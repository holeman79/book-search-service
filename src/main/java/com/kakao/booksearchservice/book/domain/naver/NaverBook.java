package com.kakao.booksearchservice.book.domain.naver;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class NaverBook {
    private Date lastBuildDate;
    private Integer total;
    private Integer start;
    private Integer display;
    private List<Item> items;
}
