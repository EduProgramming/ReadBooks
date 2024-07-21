# Ch13. CSS 심화

## 서체와 웹폰트

- 구글 폰트 : https://fonts.google.com
- 눈누(상업용 무료 한글폰트) : https://noonuu.cc

서버에 폰트를 저장하여 두는 방식에서는 `@font-face`를 사용

```css
@font-face {
  font-family: "NotoSansKR";
  src: url(./fonts/NotoSansKR-Regular.ttf);
}

@font-face {
  font-family: "NotoSansKR";
  font-weight: 100;
  src: url(./fonts/NotoSansKR-Thin.ttf);
}

@font-face {
  font-family: "NotoSansKR";
  font-weight: 300;
  src: url(./fonts/NotoSansKR-Light.ttf);
}

@font-face {
  font-family: "NotoSansKR";
  font-weight: 500;
  src: url(./fonts/NotoSansKR-Medium.ttf);
}

@font-face {
  font-family: "NotoSansKR";
  font-weight: 700;
  src: url(./fonts/NotoSansKR-Bold.ttf);
}

@font-face {
  font-family: "NotoSansKR";
  font-weight: 900;
  src: url(./fonts/NotoSansKR-Black.ttf);
}
```

## 텍스트 심화

### vertical-align

텍스트 요소를 세로로 정렬하는 속성. 인라인 텍스트와 함께 나열되어 있는 input요소나 이미지의 세로 배치에 유용. -> block 요소에는 해당 사항 없음.

- baseline
- sub
- super
- text-top
- text-bottom
- top
- middle
- bottom


### white-space

요소 내의 공백과 줄바꿈이 처리되는 방식 지정

- normal (default)
- nowrap : 고정된 너비를 무시하고 텍스트 내용이 한 줄로 나열되면서 영역 밖을 넘어감
- pre : 내용이 밖으로 나가는 것도 개의치 않음
- pre-wrap : pre처럼 동작하되 해당 영역 밖으로 텍스트가 넘어가지 않음
- pre-line : pre형식에서 공백을 무시한 상태
- break-spaces : 연속 공백이 줄의 끝에 위치하더라도 공간을 차지


### text-overflow

텍스트가 상자의 너비를 넘어가는 경우 어떻게 표시할지 지정

- hidden
- scroll

