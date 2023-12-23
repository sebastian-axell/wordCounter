import { useState } from 'react';
import { addWord } from '../api/wordCounterApi';
import Modal from './Modal';


export function AddWord({
  handleWordAdd
}){
    const [word, setWord] = useState("");
    const [response, setResponse] = useState("");
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () =>{
      setShowModal(false)
    }
      return (
        <div className="mt-5 flex justify-center items-center flex-col gap-8 text-sm sm:text-lg">
          <div className="flex justify-center items-center gap-6">
            <input
              className="sm:w-72 w-34 border-2 rounded-md px-3 py-3 backdrop-blur-lg text-black"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
              placeholder="Enter a new word"
            />
            <button
              className="h-full px-5 py-2 bg-yellow-50 text-black font-medium rounded-md"
              onClick={() => {
                addWord(word).then(response=>{
                  handleWordAdd();
                  setShowModal(true);
                  setResponse(response);
                })
              }}
            >
              Add word
            </button>
            <Modal handleCloseModal={handleCloseModal} showModal={showModal} response={response}/>
          </div>
        </div>
      );
  }