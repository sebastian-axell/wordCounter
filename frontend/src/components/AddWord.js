import { useState } from 'react';
import { addWord } from '../api/wordCounterApi';


export function AddWord({
  handleWordAdd
}){
    const [word, setWord] = useState("");
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
                //execute function to add new todo to the list
                addWord(word).then(response=>{
                  handleWordAdd();
                })
              }}
            >
              Add word
            </button>
          </div>
        </div>
      );
  }