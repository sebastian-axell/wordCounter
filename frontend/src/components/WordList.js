import { useState, useEffect } from 'react';
import { getWordCounts } from '../api/wordCounterApi';
import Word from './Word';

function WordList({
    updateTrigger,
}) {

const [words, setWords] = useState([]);

const getWords = async() => {
    await getWordCounts().then(response=>{
        setWords(response)
    })
}
useEffect(() => {
    getWords();
  }, [updateTrigger]);


  if (words.length >0){
      return (
         <div className='flex justify-center mt-3'>
          <div className="w-10/12 text-center flex items-center flex-col gap-1 text-sm sm:text-xl">
            <h1 className="text-white uppercase font-semibold sm:text-2xl text-lg">Word List</h1>
            <div className="w-10/12 backdrop-blur-lg px-3 py-5 grid grid-cols-2 text-white">
              <div className='col-span-1'>Word</div>
              <div className='col-span-1'>Count</div>
              <div className=' col-span-2 rounded-lg'>
              {words.map((word, value) =>(
                  <div key={value} className=''>
                      <Word word={word['word']} count={word['count']}/>
                  </div>
              ))}
              </div>
            </div>
          </div>
         </div>
    );
}else{
    return (
    <div className='text-white flex justify-center text-2xl mt-10'>
        No words added yet. Add a word by clicking the Add word tab!
    </div>
    )
}
   }
   export default WordList;