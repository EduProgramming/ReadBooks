# Ch8. CSS

## background

### background-image

**background-repeat**

- repeat : (default)
- no-repeat
- repeat-x
- repeat-y
- space : 각 모서리에 이미지를 먼저 배치한 다음에 남는 공간을 비례해서 채움
- round : repeat와 유사한데 이미지가 짤리지 않음

`background-repeat: round no-repeat` 이런식으로도 줄 수 있음

**background-position**

- top
- bottom
- left
- right
- center

`bottom right`, `20% 40%`, `bottom 10px right 3vw` 이런식으로도 가능

bottom 10px right 3vw -> bottom에서 10px 띄우고 오른쪽으로 3vw 띄운 것

**background-size**

배경 이미지의 크기를 지정

- auto : 이미지의 원래 크기대로 표시 (이미지 비율이 유지)
- 100% : 배경 크기에 맞춰 이미지 채우기
- contain : 전체 배경 영역에서 이미지의 긴 부분을 자동으로 맞춤
- cover : 여백 공간을 남기지 않고 해당 이미지로만 전체 배경을 가득 채우고 싶을 때 (이미지가 짤리는 것 감안해야함)

`200px auto` 이런식으로도 사용 가능

### gradient, 그라데이션

`background: linear-gradient(방향 또는 각도, 출발 색상, 도착 색상)`

```css
.gradient {
  background: linear-gradient(45deg, skyblue, slateblue);
}
```
