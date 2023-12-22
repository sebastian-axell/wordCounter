package org.example.api;

import org.example.service.WordCounterService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(WordCounterController.class)
public class WordCounterControllerTest {
    @Autowired
    MockMvc mvc;

    @MockBean
    WordCounterService wordCounterService;

    @Test
    void addWordShouldDoSomething() throws Exception {
        // given

        // when
        Mockito.when(wordCounterService.addWord("a")).thenReturn(true);
        ResultActions result = mvc.perform(post("/api/addWord")
                .content("{word:a}")
                .contentType(MediaType.APPLICATION_JSON));
        //then
        Mockito.verify(wordCounterService, times(1)).addWord(any(String.class));
        result.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().string("true"));
    }
}
