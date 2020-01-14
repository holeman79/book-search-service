package com.kakao.booksearchservice.book.domain.kakao;

import com.kakao.booksearchservice.book.domain.kakao.Meta;
import com.kakao.booksearchservice.book.domain.kakao.Document;

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
