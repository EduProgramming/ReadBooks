# Ch14. CSS 심화

## Float

Flex와 Grid가 나오면서 Float를 잘 사용하지 않음. 레거시 코드들에서 있으니 대략적인 내용은 알아둘 것.

Float는 block요소를 허용하고 inline요소를 밀어낸다.

부모 요소의 크기가 적용되지 않는데 적용되게 하는 방법.

```html
<!-- 1. 자식 요소 clear속성이 적용된 빈 블록 요소 추가 -->
<section class="ex1">
  <div class="parent">
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="empty"></div>
  </div>
</section>

<!-- 2. 부모 요소에 overflow: hidden 지정 -->
<section class="ex2">
  <div class="parent">
    <div class="box red"></div>
    <div class="box green"></div>
  </div>
</section>

<!-- 3. 가상 요소 만들어 해결 -->
<section class="ex3">
  <div class="parent">
    <div class="box red"></div>
    <div class="box green"></div>
  </div>
</section>
```

```css
section {
  margin-bottom: 2rem;
}

.parent {
  padding: 1rem;
  background-color: gray;
}

.box {
  height: 200px;
}

.red {
  width: 200px;
  background-color: tomato;
  float: left;
}

.green {
  width: calc(100% - 200px);
  background-color: green;
  float: left;
}

section.ex1 .empty {
  clear: both;
}

section.ex2 .parent {
  overflow: hidden;
}

section.ex3 .parent::after {
  content: "";
  clear: both;
  display: block;
}
```

## Grid

부모 요소를 `display: grid;`로 설정한 후

부모 요소에서 `grid-template-columns`를 통해 열들의 크기 지정.

`1fr`을 쓰면 쓰여진 만큼 1배 크기로 나눠가짐. 2fr이면 1fr의 2배 크기.

- grid-template-columns: 열
- grid-template-rows: 행

**justify-items 속성**

- start : 왼쪽 정렬
- center : 가운데 정렬
- end : 오른쪽 정렬

background-color가 끝까지 안되는 걸로 보아서 정렬한 쪽으로 영역이 다 잡힘. display는 block인데 보이는 것은 inline-block과 같게 됨.

**align-items 속성**

수직 축 정렬

**grid-column 속성**

grid에 적용된 요소 중 하나에 해당 값을 쓰면 해당 위치 열에 놓임. Grid열을 넘어서는 값을 작성하면 벗어나서 이상하게 됨.

`grid-column: 2 / span 3;` span을 주어 크기를 정해줄 수도 있지만 `grid-column: 1 / 4;` 방식으로 그리드 번호로 지정하여 줄수도 있다.

repeat(4, 1fr)의 경우 1, 2, 3, 4, 5 그리드 번호이면서 역으로 -5, -4 , -3, -2 , -1이기도 하다. `1 / -5`로 주어도 적용은 `1 / -4`와 같게 나온다(safari 기준).

**grid-row 속성**

grid-column은 열. grid-row는 행

**justify-self, align-self 속성**

개별 요소이기에 `-self`로 정렬

> **Flex레이아웃과 Grid레이아웃 중 무엇을 사용하면 되는가?**
>
> Flex 레이아웃이 가로/세로 방향 택한 뒤 자식 요소들의 배치를 조절하는 것이라면, Grid레이아웃은 가로, 세로까지의 하나의 부모 안에서 전박적으로 통제하는 모습
>
> Flex레이아웃이 조금 더 직관적
>
> 두 레이아웃의 특징에 맞게 사용

## 애니메이션

https://showcases.yalco.kr/html-css-scoop/04-10/01.html
https://showcases.yalco.kr/html-css-scoop/04-10/02.html
https://showcases.yalco.kr/html-css-scoop/04-10/03.html

### transform

#### scale

요소의 배율을 지정

`transform: scale(2);` 2배 크기로, `transform: scale(0.5, 0.3);` 가로는 0.5배, 세로는 0.3배 비율로

#### rotate

요소를 회전

tum이라는 단위를 사용해도 되는데 1tum은 360도(=360deg).

#### translate

괄호 안에 있는 숫자만큼 해당 이미지의 위치를 옮김.

#### skew

요소를 기울이기

rotate처럼 각도를 줄 수 있으며 x, y축을 인자로 줘야하며, skewX, skewY를 통하여 각각 줄수도 있다.

### transition

변화되는 속성을 어떤 방식으로 적용할 것인지 결정

`transition: 속성 지속시간 시간함수 지연시간;

- linear: 객체를 일정한 속도로 움직이게 하는 속성
- ease-in: 천천히 가다가 빨리
- ease-out: 빨리 가다가 천천히
- ease-in-out: 천천히 출발해 빨리 이동하다가 다시 천천히 마무리

움직이는 속도를 `cubic-bezier()`함수를 이용해 커스터마이징할 수도 있다.

https://cubic-bezier.com

### animation

외부 요인과 상관없이 객체에 어떤 변화를 줄지를 수동으로 지정

`@keyframe`을 사용

```css
@keyframes animation-test {
  /* 시작 0% */
  from {
    left: 36px;
    border-radius: 0;
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  /* 중간 과정 */
  67% {
    transform: scale(2) rotate(540deg);
    border-radius: 10%;
    opacity: 1;
  }

  /* 끝 100% */
  to {
    left: 600px;
    border-radius: 100%;
    transform: scale(0.25) rotate(1000deg);
    opacity: 0;
  }
}

.ex2 .box {
  animation-name: animation-test;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-direction: alternate;
}
```
