package org.example.api;

import org.example.service.WordCounterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class WordCounterController {
    private final WordCounterService wordCounterService;

    @Autowired
    public WordCounterController(WordCounterService wordCounterService){
        this.wordCounterService = wordCounterService;
    }

    @GetMapping(value = "/getWordCounts", produces = "application/json")
    public List<HashMap<String, String>> getWordCounts(){
        //Logger
        return wordCounterService.getWordCounts();
    }

    @PostMapping(path="/addWord",
    consumes = "application/json",
    produces = "application/json")
    public Boolean addWord(@RequestBody String word){
        //Logger
        return wordCounterService.addWord(word.replace("\"", ""));
    }

}
