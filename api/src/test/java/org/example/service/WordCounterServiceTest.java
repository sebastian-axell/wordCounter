package org.example.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.api.WordCounterController;
import org.example.service.WordCounterService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static junit.framework.Assert.assertEquals;

@WebMvcTest(WordCounterService.class)
public class WordCounterServiceTest {
    ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    WordCounterService wordCounterService;

    @MockBean
    TranslatorService translatorService;

    @Test
    void addWordShouldReturnSuccessWhenWordIsAlphabetic(){
        // given
        String word = "a";
        HashMap<String, String> expectedResult = new HashMap<>();
        expectedResult.put("result", "SUCCESS");
        expectedResult.put("message", "Successfully added word to the counter");

        // when
        Mockito.when(translatorService.translateWord(word)).thenReturn(word);
        HashMap<String, String> result = wordCounterService.addWord(word);

        //then
        assertEquals(expectedResult, result);
    }
    @Test
    void addWordShouldReturnFailWhenWordContainsNonAlphabetic(){
        // given
        String word = "a1";
        HashMap<String, String> expectedResult = new HashMap<>();
        expectedResult.put("result", "FAILED");
        expectedResult.put("message", "String can only contain alphabetical characters");

        // when
        Mockito.when(translatorService.translateWord(word)).thenReturn(word);
        HashMap<String, String> result = wordCounterService.addWord(word);

        //then
        assertEquals(expectedResult, result);
    }

    @Test
    void getWordListShouldReturnCorrect(){
        // given
        String word = "a";
        List<HashMap<String, String>> expectedWordList = new ArrayList<>();
        HashMap<String, String> returnedWordist = new HashMap<>();
        returnedWordist.put("count", "1");
        returnedWordist.put("word", word);
        expectedWordList.add(returnedWordist);

        // when
        Mockito.when(translatorService.translateWord(word)).thenReturn(word);
        wordCounterService.addWord(word);
        List<HashMap<String, String>> result = wordCounterService.getWordCounts();

        //then
        assertEquals(expectedWordList, result);
    }
}
