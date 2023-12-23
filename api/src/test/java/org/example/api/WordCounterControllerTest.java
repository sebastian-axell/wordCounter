package org.example.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.service.WordCounterService;
import org.hamcrest.Matchers;
import org.json.JSONObject;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(WordCounterController.class)
public class WordCounterControllerTest {
    ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    MockMvc mvc;

    @MockBean
    WordCounterService wordCounterService;

    @Test
    void addWordShouldReturnSuccess() throws Exception {
        // given
        String newWord = "a";
        HashMap<String, String> returnBody = new HashMap<>();
        returnBody.put("result","SUCCESS");
        returnBody.put("message", "Successfully added word to the counter");

        // when
        Mockito.when(wordCounterService.addWord(newWord)).thenReturn(returnBody);
        ResultActions result = mvc.perform(post("/api/addWord")
                .content(newWord)
                .contentType(MediaType.APPLICATION_JSON));
        //then
        Mockito.verify(wordCounterService, times(1)).addWord(any(String.class));
        result.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().string(objectMapper.writeValueAsString(returnBody)));
    }

    @Test
    void addNonAlphabeticalWordShouldFail() throws Exception{
        // given
        String newWord = "3";
        HashMap<String, String> returnBody = new HashMap<>();
        returnBody.put("result","FAILED");
        returnBody.put("message", "String can only contain alphabetical characters");

        // when
        Mockito.when(wordCounterService.addWord(newWord)).thenReturn(returnBody);
        ResultActions result = mvc.perform(post("/api/addWord")
                .content(newWord)
                .contentType(MediaType.APPLICATION_JSON));
        //then
        Mockito.verify(wordCounterService, times(1)).addWord(any(String.class));
        result.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().string(objectMapper.writeValueAsString(returnBody)));

    }

    @Test
    void getWordCountsShouldReturnEmptyListWhenNoWordsAdded() throws Exception{
        //given
        List<HashMap<String, String>> initialState = new ArrayList<>();

        // when
        Mockito.when(wordCounterService.getWordCounts()).thenReturn(initialState);

        ResultActions result = mvc.perform(get("/api/getWordCounts"));
        //then
        Mockito.verify(wordCounterService, times(1)).getWordCounts();
        result.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().string(objectMapper.writeValueAsString(initialState)));

    }
    @Test
    void getWordCountsShouldReturnCorrectListWhenWordAdded() throws Exception{
        //given
        String newWord = "a";
        List<HashMap<String, String>> wordList = new ArrayList<>();
        HashMap<String,String> wordCounter = new HashMap<>();
        wordCounter.put(newWord, "1");
        wordList.add(wordCounter);
        // when
        Mockito.when(wordCounterService.getWordCounts()).thenReturn(wordList);

        ResultActions result = mvc.perform(get("/api/getWordCounts"));
        //then
        Mockito.verify(wordCounterService, times(1)).getWordCounts();
        result.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().string(objectMapper.writeValueAsString(wordList)));
    }
}
