# Ch10. HTML 심화

## HTML HEAD TAG 정보

### DOCTYPE

: HTML문서가 어떤 형식과 버전으로 되었는지 명시

`<!DOCTYPE html>` 최신 버전 HTML5로 작성되었다는 뜻

### meta 태그

#### charset

캐릭터셋으로 해당 페이지에 사용된 문자들을 어떤 방식으로 읽을지를 명시.

문자 인코딩 방식이 어떤 것인지를 지정하는 역할

```html
<meta charset="UTF-8" />

<!-- 과거 형식 -->
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
```

`html lang="ko"`는 검색 엔진이나 스크린 리더에 이 웹사이트가 어떤 언어인지를 알려주는 역할.

#### IE관련 호환 정보

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

인터넷 익스플로러에서 열었을 때 엣지로 명시

#### 뷰포트 관련 정보

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Open Graph 정보

웹 사이트가 공유될 때 유용한 정보.

웹페이지의 주소를 페이스북이나 카카오톡 등의 SNS 계정으로 공유할 때 보여지는 웹사이트 제목과 섬네일 등의 기본 정보

```html
<meta property="og:title" content="제목" />
<meta property="og:description" content="설명" />
<meta property="og:image" content="이미지 URL주소" />
```

### favicon

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

## 시맨틱 태그

https://www.w3schools.com/html/html5_semantic_elements.asp

- main : 페이지마다 반드시 한 개만 존재

TODO: 추후 만들 때 시맨틱 태그를 고려하면서 설계를 잘 해야하니 다시 살펴볼 것!
