package org.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class WordCounterService {

    private TranslatorService translatorService;
    private HashMap<String, Integer> words;

    private Boolean wordIsAlphabetic(String word){
        return word.matches("[a-zA-Z]+");
    }

    @Autowired
    public WordCounterService(HashMap<String, Integer> words, TranslatorService translator) {
        this.words = words;
        this.translatorService = translator;
    }

    public List<HashMap<String, String>> getWordCounts(){
        List<HashMap<String, String>> wordList = new ArrayList<>();
        for (Map.Entry<String, Integer> word: words.entrySet()){
            HashMap<String, String> processedWord = new HashMap<>();
            processedWord.put("word", word.getKey());
            processedWord.put("count", String.valueOf(word.getValue()));
            wordList.add(processedWord);
        }
        return wordList;
    }

    public HashMap<String,String> addWord(String newWord){
        HashMap<String, String> returnBody = new HashMap<>();
        if (wordIsAlphabetic(newWord)){
            String translatedWord = translatorService.translateWord(newWord);
            words.compute(translatedWord, (word, currentCount) -> (currentCount == null) ? 1 : currentCount + 1);
            returnBody.put("result", "SUCCESS");
            returnBody.put("message", "Successfully added \'" + newWord + "\' to the word counter.");
            return returnBody;
        } else{
            returnBody.put("result", "FAILED");
            returnBody.put("message", ErrorCode.NON_ALPHABETICAL_CHARACTERS.getErrorMessage());
        }
        return returnBody;
    }

    private enum ErrorCode {
        NON_ALPHABETICAL_CHARACTERS("String can only contain alphabetical characters");

        private String errorMessage;

        public String getErrorMessage(){return errorMessage;}

        private ErrorCode(String errorMessage){
            this.errorMessage = errorMessage;
        }

    }

}
