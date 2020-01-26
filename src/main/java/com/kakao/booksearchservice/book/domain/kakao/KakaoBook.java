package com.kakao.booksearchservice.book.domain.kakao;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class KakaoBook {
    private Meta meta;
    private List<Document> documents = new ArrayList();
}
