package com.kakao.booksearchservice.service;

import com.kakao.booksearchservice.domain.Book;
import reactor.core.publisher.Flux;

public interface BookService {
    Flux<Book> getBooksByKakaoApi();
}
