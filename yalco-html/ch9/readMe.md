# Ch9. CSS

## Position

https://showcases.yalco.kr/html-css/02-09/01.html

TODO: 추후 이런 식으로 만들어 볼 것

- static : (default)
- relative : 원래 있던 위치를 기준으로 이동값이 적용됨.
- absolute : static이 아닌 첫 부모 요소를 기준으로 이동 속성값이 적용됨. (자리를 차지하지 않음)
- fixed : 뷰포트를 기준으로 위치를 지정. (스크롤에 영향을 받지 않음)
- sticky : **부모 요소에서만 적용**되니 부모 태그에 height 높이 값이 있어야 한다.

## z-index

z축 우선순위

auto = 0과 같음

## Flex

https://showcases.yalco.kr/html-css/02-11/01.html

https://flexboxfroggy.com/#ko

flex와 inline-flex의 차이는 block과 inline의 차이 정도라고 생각하면 된다.

### justify-content

- flex-start
- center
- flex-end
- space-between
- space-around : 각 내부 요소의 양쪽에 일정한 크기의 빈 공간을 배치
- space-evenly : 모든 빈 공간의 크기를 고르게 지정

start와 end를 작성해도 되지만 reverse기능을 호라용하기 위해서 flex-start를 권장.

### align-items

- stretch : (default)수직 축 방향을 꽉 채움
- flex-start : Y축 상단
- center : 중앙
- flex-end : Y축 하단

### flex-direction

내부 자식 요소를 어느 축을 기준으로 정렬할지 결정

- row (default)
- row-reverse
- column
- column-reverse

reverse를 사용하면 flex-start와 flex-end 순서도 뒤바뀐다.

flex-direction이 column이면 jusitfy-content의 방향이 세로고, align-items의 방향이 가로로 바뀐다.

### flex-wrap

- nowrap (default)
- wrap : 내부 요소가 부모 요소를 넘어서면 줄바꿈
- wrap-reverse

### flex-flow

flex-direction과 flex-wrap을 동시에 사용할 수 있다.

```css
#pond {
  display: flex;
  flex-flow: column wrap;
}
```

### align-content

flex-wrap: wrap일 때 차이가 발생함.

- align-items는 줄 간의 여백 있음.
- align-content는 내부 요소 전체가 공백 없이 붙음
  - space-between
  - space-around
  - space-evenly

를 통하여 간격 조절도 가능

### gap

내부 요소 사이에 들어가는 공백의 크기를 지정하는 것

단위는 `em`을 사용

### flex-basis와 flex-shrink

#### flex-basis

메인 축의 길이를 지정

width와 height를 줘서 길이를 지정하는 것과의 차이점이 메인 축으로 지정된다는 점

(default) auto

#### flex-shrink

(default) 1

flex-shrink가 1로 지정되면 부모 요소 안에서 가능한 최개 길이만큼

0이면 제한이 넘어가도 되게 됨.

### flex-grow

내부 요소에 빈 공간이 있을 경우 그 공간을 채우는지의 여부를 결정하고 빈 공간을 채울 경우에는 다른 내부 요소들의 속성값에 비례해서 공백을 나눠 갖는다.

```css
.flex {
  /* flex: (flex-grow 값); */
  /* flex: (flex-grow 값) (flex-basis 값); */
  flex: (flex-grow 값) (flex-basis 값) (flex-basis값);
}
```

이런식으로도 지정해줄 수 있다.

### order

순서를 임의로 변경해줄 수 있다.

기본값이 (default)0인 경우 코드에 작성된 순서대로 나열

대상을 현재 위치에서 조정하는 것

기본이 0이고 이것보다 큰 값이면 뒤로 밀리고

같은 값이면 HTML태에서 그려지는 순서대로

음수도 가능하기에 -1이면 기본값보다 앞으로 놓이게 된다.

## 요소 감추는 방법

### 1. opacity

- 0 : 안보임
- 1 : 보임
- 0 < 값 < 1 : 투명도

이벤트는 적용 됨.

### 2. visibility

- visible : 보이게
- hidden : 감춰지게 (자리 유지)

이벤트들도 무효화 됨.

### 3. display

- none : 자리차지도 없이 감춰짐. 흔적을 지우는 것이기에 마우스 이벤트 기능들도 안됨.

---

### jusitfy-

#### justify-self

- Grid item

개별 아이템을 정렬하는데 사용

그리드 레이아웃에서 주로 사용되며, 플랙스 레이아웃에서는 지원하지 않는다.

#### justify-content

- Grid item, Flex item

컨테이너 내에서 각 그리드 아이템들을 정렬하는데 사용된다.

모든 아이템에 동일한 정렬 규칙을 적용한다.

#### justify-tracks

- Grid item

트랙(행/열)을 정렬하는데 사용

표준화되지 않은 실험적인 기능

### align-

#### align-self

- Grid item, Flex item

개별 아이템을 정렬하는데 사용

#### align-content

- Grid item, Flex item

플랙스 또는 그리드 컨테이너 내에서 여러 행(줄)을 정렬하는데 사용

#### align-items

- Grid item, Flex item

플랙스 또는 그리드 컨테이너 내에서 모든 아이템 정렬하는데 사용

#### align-tracks

아직 실험적인 기능
