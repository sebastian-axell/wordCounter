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
    const handleInputAdd = () => {
      document.getElementById("addInput").value="";
    }

      return (
        <div className="mt-5 flex justify-center text-sm sm:text-lg">
          <div className="flex w-3/6 h-9">
            <input className="bg-gray-400 text-white w-9/12 rounded-l-lg pl-5 placeholder-white outline-none"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
              placeholder="Word to add to counter"
              id='addInput'
            />
            <button
              className="bg-gray-800 text-white w-3/12 border-l-3 border-l border-indigo-600 rounded-r-lg"
              onClick={() => {
                addWord(word).then(response=>{
                  handleInputAdd();
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