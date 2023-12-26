import React from "react";
import { useState } from "react";
import WordList from "./components/WordList";
import { AddWord } from "./components/AddWord";

function App() {
  const [wordAdded, setWordAdded] = useState(true);
  const [globalShowModal, setGlobalShowModal] = useState(true);
  const handleWordAdd = () =>{
      setWordAdded(!wordAdded);
  }
  const globalShowModalHandler = () =>{
      setGlobalShowModal(false);
  }
  
  return (
    <div className="bg-gray-700 h-screen pb-5 overflow-y-auto">
      <div className="flex flex-col gap-y-2">
        <div className="mx-auto w-1/2 pt-10">
          <img className="mx-auto" src="https://www.synechron.com/themes/synechron/images/logo-white.svg"/>
          <h1 className="font-bold text-md sm:text-xl uppercase flex justify-end text-white">Word <span className="pl-3 text-yellow-200">C</span>ounter</h1>
        </div>
        <AddWord handleWordAdd={handleWordAdd} globalShowModal={globalShowModal} globalShowModalHandler={globalShowModalHandler}/>
        <WordList updateTrigger={wordAdded}/>
      </div>
    </div>
  )
}

export default App;
