package com.kakao.booksearchservice.controller;

import com.kakao.booksearchservice.config.api.KakaoProperty;
import com.kakao.booksearchservice.config.api.NaverProperty;
import com.kakao.booksearchservice.domain.Book;
import com.kakao.booksearchservice.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public ResponseEntity<Flux<Book>> getBooks(){
        bookService.getBooksByKakaoApi();
        return null;
    }

}
