package org.example.service;

import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class TranslatorService {

    public String translateWord(String word){
        String translatedWord;
        switch (word.toLowerCase()){
            case "flor":
                translatedWord = "flower";
                break;
            case "blume":
                translatedWord = "flower";
                break;
            default:
                translatedWord = word;
        }
        return translatedWord;
    }
}
