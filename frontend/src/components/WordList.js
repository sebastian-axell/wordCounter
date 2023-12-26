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
        <div className="mt-3 w-3/6 mx-auto">
            <div className="text-yellow-100 mb-1 text-lg">
            Total: {words.length}
            </div>
            <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 sm:gap-3 pt-0.5 pr-2 overflow-y-auto max-h-96 pb-3">
            {words.map((word, value) =>(
                  <div key={value} className=''>
                      <Word word={word['word']} count={word['count']}/>
                  </div>
              ))}
            </div>
        </div>
      )
}else{
    return (
    <div className='text-white flex justify-center text-md sm:text-2xl mt-5'>
        No words added yet
    </div>
    )
}
   }
   export default WordList;