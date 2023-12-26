import { useState } from 'react';
import { addWord } from '../api/wordCounterApi';
import Modal from './Modal';


export function AddWord({
  handleWordAdd,
  globalShowModal,
  globalShowModalHandler
}){
    const [word, setWord] = useState("");
    const [response, setResponse] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () =>{
      let checkbox = document.getElementById("checkboxForGlobalshowModal");
      if (checkbox.checked){
        globalShowModalHandler();
      }
      setShowModal(false);
    }
    const handleInputAdd = () => {
      setWord("");
    }
    const carryOutWordAdd = e =>{
      e.preventDefault();
      handleInputAdd();
      handleWordAdd();
      setShowModal(true);
    }

      return (
        <form onSubmit={e => {carryOutWordAdd(e)}}>
          <div className="mt-5 flex justify-center text-xs sm:text-lg">
            <div className="flex w-3/6 h-9">
              <input className="bg-gray-400 text-white w-9/12 rounded-l-lg pl-5 
              placeholder-white outline-none"
                value={word}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                placeholder="Word to add to counter"
              />
              <button
                className="bg-gray-800 text-white w-3/12 border-l-3 border-l border-indigo-600 rounded-r-lg"
                type='submit'
                onClick={e => {
                  addWord(word).then(response=>{
                    carryOutWordAdd(e);
                    setResponse(response);
                  })
                }}
              >
                Add word
              </button>
              <Modal handleCloseModal={handleCloseModal} showModal={showModal} response={response} globalShowModal={globalShowModal}/>
            </div>
          </div>
        </form>
      );
  }