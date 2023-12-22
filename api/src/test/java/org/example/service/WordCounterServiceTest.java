package org.example.service;

import org.example.api.WordCounterController;
import org.example.service.WordCounterService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(WordCounterService.class)
public class WordCounterServiceTest {

    @Autowired
    MockMvc mcv;

    @MockBean
    WordCounterService wordCounterService;

    @Test
    void addWordShouldDoSomething(){
        // given

        // when
        Mockito.when(wordCounterService.addWord("a"));

        //then
//        System.out.println(wordCounterService.getWordCounts());
    }
}
