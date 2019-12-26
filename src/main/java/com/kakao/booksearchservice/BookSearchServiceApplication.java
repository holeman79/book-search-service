package com.kakao.booksearchservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
@EnableCircuitBreaker
@EnableWebFlux
public class BookSearchServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookSearchServiceApplication.class, args);
	}

}
