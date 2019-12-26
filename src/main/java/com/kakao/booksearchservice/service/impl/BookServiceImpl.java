package com.kakao.booksearchservice.service.impl;

import com.kakao.booksearchservice.config.api.KakaoProperty;
import com.kakao.booksearchservice.config.api.NaverProperty;
import com.kakao.booksearchservice.domain.Book;
import com.kakao.booksearchservice.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final KakaoProperty kakaoProperty;

    private final NaverProperty naverProperty;

    private WebClient webClient;

    public Flux<Book> getBooksByKakaoApi(){
        WebClient.create(kakaoProperty.getBaseUrl())
                .get()
                .uri(kakaoProperty.getUri())
                .header("Authorization", kakaoProperty.getAppKey())
                .retrieve()
                .bodyToFlux(Book.class);
        return null;
    }

    public Mono<String> greet(String name){
        return Mono.fromCallable(() -> "Greeting" + name)
                .subscribeOn(Schedulers.elastic())
                ;
    }
}
