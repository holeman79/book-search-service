package com.kakao.booksearchservice.book.service;

import com.kakao.booksearchservice.book.domain.kakao.KakaoBook;
import com.kakao.booksearchservice.book.domain.dto.BookSearchRequest;
import reactor.core.publisher.Flux;

public interface BookService {
    Flux<KakaoBook> getBooksByKakaoApi(BookSearchRequest bookSearchRequest);
}
