# Ch7. CSS

- % : 부모 크기에 비례한 크기

**viewport(뷰포트)**

- vw
- vh
- vmax : 상대적 길이가 긴 쪽 (vw | vh)
- vmin : 상대적 길이가 짧은 쪽 (vw | vh)

inline-block은 박스형태를 유지하지만 inline 요소처럼 텍스트의 흐름을 따른다.

### box-sizing

- content-box : 크기가 컨텐츠 기준
- border-box : 테두리 포함 크기

padding을 주게 되면 content의 경우에는 크기에 영향을 받지 않음 -> 컨텐츠 영역 기준이기에

border-box는 padding을 주게 되면 테두리 안쪽 공간이 생기는 만큼 크기가 그만큼 줄어들게 됨

### overflow

- visible : 부모 영역 벗어난 자식 요소를 그대로 보여줌
- hidden
- scroll : 스크롤이 생김
- auto : (default) 넘어가면 스크롤이 생기고 아니면 안생김

overflow-x, overflow-y 이런식으로 줄수도 있고 `overflow: auto scroll` 이렇게 줄수도 있다.

### box-shadow

박스 모델도 텍스트처럼 그림자 효과를 넣을 수 있다.

`box-shadow: (inset 여부) offset-x offset-y (blur-radius) (spread-radius) color`

- offset-x : x축 두께
- offset-y : y축 두께
- blur-radius : 퍼짐 효과 크기
- spread-radius : 그림자 크기
- color : 색

https://shadows.brumm.af/

그림자 효과 설정 참조할 수 있는 사이트





| 구분                           | inline                            | block                               | inline-block       |
| ------------------------------ | --------------------------------- | ----------------------------------- | ------------------ |
| 기본 너비                      | 콘텐츠만큼                        | 부모의 너비만큼                     | 콘텐츠만큼         |
| width, height 속성             | 무시                              | 적용                                | 적용               |
| 가로 공간 차지                 | 공유                              | 독점                                | 공유               |
| margin 속성<br />(바깥쪽 여백) | 좌우만 적용                       | 상하좌우 모두 적용<br />(상하 상쇄) | 상하좌우 모두 적용 |
| padding 속성<br />(안쪽 여백)  | 좌우만 적용,<br />상하는 배경색만 | 상하좌우 모두 적용                  | 상하좌우 모두 적용 |

