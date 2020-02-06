package com.kakao.booksearchservice.book.service;

import com.kakao.booksearchservice.book.domain.kakao.KakaoBook;
import com.kakao.booksearchservice.book.domain.dto.BookSearchRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public Flux<KakaoBook> getBooks(@Valid BookSearchRequest bookSearchRequest) {
        Flux<KakaoBook> books = bookService.getBooksByKakaoApi(bookSearchRequest);
        return books;
    }
}
