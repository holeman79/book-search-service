package com.kakao.booksearchservice.config.api;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ConfigurationProperties("app.api.naver")
public class NaverProperty {
    private String url;
    private String clientId;
    private String clientSecret;
}
