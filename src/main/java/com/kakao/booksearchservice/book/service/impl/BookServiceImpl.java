package com.kakao.booksearchservice.book.service.impl;

import com.kakao.booksearchservice.book.domain.dto.BookSearchRequest;
import com.kakao.booksearchservice.book.domain.naver.NaverBook;
import com.kakao.booksearchservice.config.api.KakaoProperty;
import com.kakao.booksearchservice.config.api.NaverProperty;
import com.kakao.booksearchservice.book.domain.kakao.KakaoBook;
import com.kakao.booksearchservice.book.service.BookService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
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

    private final WebClient client;

    @HystrixCommand(commandKey = "getBooksByKakaoApi", fallbackMethod = "getBooksByNaverApi")
    public Flux<KakaoBook> getBooksByKakaoApi(BookSearchRequest bookSearchRequest){
        Flux<KakaoBook> kakaoBooks = client.get()
                .uri(bookSearchRequest.getKakaoUri(kakaoProperty.getDomain() + kakaoProperty.getPath()))
                .header("Authorization", kakaoProperty.getAppKey())
                .retrieve()
                .bodyToFlux(KakaoBook.class)
                .subscribeOn(Schedulers.elastic());
        return kakaoBooks;
    }

    public Flux<NaverBook> getBooksByNaverApi(BookSearchRequest bookSearchRequest){
        Flux<NaverBook> naverBooks = client.get()
                .uri(bookSearchRequest.getNaverUri(naverProperty.getDomain() + naverProperty.getPath()))
                .header("X-Naver-Client-Id", naverProperty.getClientId())
                .header("X-Naver-Client-Secret", naverProperty.getClientSecret())
                .retrieve()
                .bodyToFlux(NaverBook.class)
                .subscribeOn(Schedulers.elastic());
        return naverBooks;
    }

    public Mono<String> greet(String name){
        return Mono.fromCallable(() -> "Greeting" + name)
                .subscribeOn(Schedulers.elastic())
                ;
    }


}
