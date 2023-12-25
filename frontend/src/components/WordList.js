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
    console.log(words);
  }, [updateTrigger]);


  if (words.length >0){
      return (
        <div className="w-4/6 mx-auto">
            <div className="text-yellow-100 mb-1 text-lg">
            Total: {words.length}
            </div>
            <div className="flex grid grid-cols-3 mx-auto gap-3">
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
    <div className='text-white flex justify-center text-2xl mt-5'>
        No words added yet
    </div>
    )
}
   }
   export default WordList;