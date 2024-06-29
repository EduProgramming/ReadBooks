# Ch10. CSS

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

### flex-wrap

- nowrap (default)
- wrap : 내부 요소가 부모 요소를 넘어서면 줄바꿈

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
