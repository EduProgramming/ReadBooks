# Ch12. CSS 심화

## 반복 및 공통되는 스타일

`@import url(CSS PATH)`를 통하여 css 파일에서 다른 CSS를 적용할 수 있다.

```css
/* common.css */
/* 1. 모든 요소에서 사용될 수 있는 변수 */
:root {
  --font-small: 8px;
   /* ... */
}

/* 2. 특정 요소에서만 사용될 수 있는 변수 */
u {
  --not-good: wavy underline orange;
  --wrong: wavy underline red;
}

.wrong {
  --warn: yellow;
}
```

> **색 조합 참조 사이트**
>
> Color Space: [https://mycolor.space](https://mycolor.space)
>
> Paletton: [http://paletton.com](http://paletton.com)
>
> Color Hunt: [https://colorhunt.co](https://colorhunt.co)
>
> Gradient Hung: [https://gradienthunt.com](https://gradienthunt.com)

## 선택자 심화

### 특성 선택자

주어진 특성의 존재 여부나 그 값에 따라 요소를 선택하는 것(=속성 선택자)

#### 속성값이 특정 테스트를 포함하는 요소 선택하기

```css
/* 속성값이 특정 텍스트를 포함하는 요소 */
span[class*="item"] {
  text-decoration: underline;
}

/* 속성값이 특정 텍스트로 시작하는 요소 */
span[class^="fruit"] {
  color: var(--color-red);
}

span[class^="vege"] {
  color: var(--color-green);
}

/* 속성값이 특정 텍스트로 끝나는 요소 */
span[class$="-1"] {
  font-weight: bold;
}
```

### 가상 클래스

- :hover : 마우스 오버
- :active : 클릭 중
- :checked : 체크 된 것
- :enabled : 활성화 된 것
- :disabled : 비활성화 된 것
- :focus : 포커스 상태
  - :focus-visible : 키보드에 대한 포커스만
  - :focus-within : 해당 요소를 포함해서 그 내부에 요소 중에 하나가 포커스를 받으면 스타일 적용[Example](./focuswithin.html)
- :required : 필수 입력 요소
- :valid : 값 유효한 입력 요소
- :not(:valid) : 값 무효한 입력 요소

- :nth-of-type : 부모 요소 내 n번째 요소
  앞에 태그 지정시 부모 요소 내 태그 n번째 요소
  - :first-of-type
  - :last-of-type
  - :only-of-type : 부모 요소 내 유일한 요소
  - :only-child : 부모 요소 내 종류 무관 유일한 요소(독자)

### 가상 요소

- ::before
- ::after

`content`속성이 꼭 있어야 함. 사용하지 않더라도 `content: '';` 이와 같이 작성 필요.

[Example](./pseudo-elements.html)

- ::selection : 선택 영역 가상 요소
- ::placeholder : 플레이스홀더 가상 요소


## 상속과 리셋

- initial : 브라우저가 주는 속성을 없애고 완전한 초기 속성값 지정
- inherit : 부모 요소 속성에 맞춤
- unset : 상속된 값이 있으면 inherit, 없으면 initial
- revert : unset과 비슷하자 initial처럼 작동하지는 않음. 상속받지 않은 값을 완전히 초기값으로 되돌리는 역할은 하지 않는다.

**RESET CSS**

브라우저에 기본적으로 지정되어 있는 CSS 초기화하려면 initial이나 all: unset을 사용해도 되지만 라이브러리 그대로 가져오는 것도 시간 절약 방법

- Eric Meyer 2.0 : https://meyerweb.com/eric/tools/css/reset
- Normalize.css : https://necolas.github.io/normalize.css
- Elad Shechter : https://elad.medium.com/the-new-css-reset-53f41f13282e

### 벤더 프리픽스(vender prefix)

: 표준이 정립되지 않은 CSS 속성들을 각 브라우저가 구현하는 대로 사용하도록 하는 것

- `-webkit-` : 사파리, 크롬, 오페라
- `-moz-` : 파이어폭스
- `-ms-` : 엣지, 익스플로러
- `-o-` : 구버전 오페라

```css
.element {
  background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
  background: -o-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}
```

접두사가 붙지 않은 속성은 맨 마지막 줄에 작성한다.

Autoprefixes : https://autoprefixer.github.io

TODO: 브라우저마다 다르게 적용하는 것을 React, Vue에서는 무엇으로 처리해줄까?



