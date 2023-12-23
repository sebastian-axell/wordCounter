package org.example.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static junit.framework.Assert.assertEquals;

@WebMvcTest(TranslatorService.class)
public class TranslatorServiceTest {
    @Autowired
    private TranslatorService translatorService;

    @Test
    void translatorServiceShouldReturnOriginalWordWhenNotFlorOrBlume() throws Exception{
        // given
        String word = "test";

        String result = translatorService.translateWord(word);

        assertEquals(word, result);

    }

    @Test
    void translatorServiceShouldReturnTranslatedWordWhenFlor() throws Exception{
        String word = "flor";

        String result = translatorService.translateWord(word);

        assertEquals("flower", result);
    }

    @Test
    void translatorServiceShouldReturnTranslatedWordWhenBlume() throws Exception{
        String word = "blume";

        String result = translatorService.translateWord(word);

        assertEquals("flower", result);
    }

}
