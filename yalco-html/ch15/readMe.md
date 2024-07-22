# Ch15. CSS 심화

적응형 웹과 반응형 웹

- 적응형 : ex) 네이버 웹용과 모바일 따로 구성
- 반응형 : ex) Apple 크기가 변함에 따라 그에 맞게 적용

## Media Query

`@media`

1) min-width
2) max-width
3) , : or 조건
4) and : and 조건

- 모바일 스마트폰: 최대 480px
- 저해상도 태블릿, 아이패드: 최대 767px
- 태블릿 세로 화면: 최대 1024px
- 태블릿 가로 화면 및 저해상도 노트북/PC: 최대 1280px
- 일반 노트북, PC: 최소 1281px
- 거대 스크린: 1281px 이상


## 기타 알아두면 좋은 속성들

### clip속성과 clip-path속성

**clip속성**

요소의 어느 부분을 시각적으로 보여줄지를 결정

`rect()` 함수 안에 top, right, bottom, left값을 넣어 보여질 요소의 위치와 크기를 지정

`clip: rect(0, 0, 0, 0);`

**clip-path속성**

어떤 요소의 어느 부분을 나타낼지를 지정할 때 (clip보다 더 나음)

position 속성이 반드시 absolute나 fixed가 아니어도 사용할 수 있고, 이미지 자르는 방식도 다양

- circle: `clip-path: circle(30%);`
- ellipse: `clip-path: ellipse(200px 200px at 0 0)`
- polygon: `clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)`

### scroll-snap속성

윈도우보다는 맥이나 스마트폰에서 더 실감나게 쓰이는 요소로 세로로 긴 웹 페이지를 내리다가 마우스 버튼이나 손가락을 떼면 특정 지점으로 페이지가 자석처럼 착 달라붙는 것.

scroll-snap속성은 Flex레이아웃이나 Grid레이아웃처럼 부모 요소와 자식 요소에 각각 별도로 값을 지정해야 제대로 동작한다.

부모 요소에는 `scroll-snap-type`속성에 스크롤 스냅을 적용할 방향과 방식을 지정

- proximity: 스냅할 위치에 가까울 때 스냅
- mandatory: 항상 가까운 방향으로 스냅

자식 요소에서는 `scroll-snap-align`속성을 지정

- start: 요소의 처음 부분으로 스냅
- center: 요소의 중간 부분으로 스냅
- end: 요소의 마지막 부분으로 스냅

### aspect-ratoi속성

가로/세로 비율

`aspect-ratio: 3 / 2;`이면 가로는 3 : 세로는 2 비율

가로 길이만 지정한 div와 세로 길이만 지정한 div를 비교해보면 이해가 됨.


### backdrop-filter속성

TODO: safari에서는 100% 적용되지 않음.