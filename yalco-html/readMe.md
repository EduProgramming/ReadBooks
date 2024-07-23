# 얄코의 Too Much 친절한 HTML+CSS+자바스크립트

![Book Image](../_asset/book.webp)

## 추가 학습 내용

### vh, dvh, svh, lvh

100vh 높이를 설정했다 해도 모바일 영역에서 주소 표시줄 영역에 의해 짤리는 경우가 발생한다.

```css
div {
  height: 100vh;
  height: -webkit-fill-available;
}
```

위와 같은 해결법은 ios에서만 적용되고 안드로이드에서는 적용 안되는 문제가 발생한다.

#### dvh(Dynamic Viewport Height)

주소 표시줄이 보이든 안보이든 현재 보여지는 뷰포트 높이를 동적으로 가져온다.

#### shv(Short Viewport Height)

사용자 화면 기준으로 가장 짧은 뷰포트 값.

주소 표시줄이 없어져도 기존 주소 표시줄의 높이 값을 뺀 나머지 값

#### lvh(Large Viewport Height)

사용자 화면 기준으로 가장 긴 뷰포트 값.

주소 표시줄이 있더라도 주소 표시줄이 없을 때의 총 화면의 길이 값

⚠️단, dvh, shv, lvh를 사용할 때 브라우저 하위 버전 제공에 대해 염두해야 한다.
