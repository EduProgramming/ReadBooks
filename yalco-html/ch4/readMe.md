# Ch4. HTML

## form: fieldset

소그룹 형태로 묶어주는 형태

legend태그를 필수로 사용해야하는 것은 아니고 묶은 그룹의 제목처럼 사용할 때

## option tag

### optgroup

```html
<h2>optgroup</h2>
<label for="shopping"> 쇼핑목록 </label>
<select id="shopping">
  <optgroup label="과일">
    <option value="f_apl">사과</option>
    <option value="f_grp">포도</option>
    <option value="f_org">오렌지</option>
  </optgroup>
  <optgroup label="채소">
    <option value="v_crt">당근</option>
    <option value="v_tmt">토마토</option>
    <option value="v_ept">가지</option>
  </optgroup>
  <optgroup label="육류">
    <option value="m_bef">소고기</option>
    <option value="m_prk">돼지고기</option>
    <option value="m_ckn">닭고기</option>
  </optgroup>
</select>
```

카테고리가 있고 종류들이 있는 것들에 사용하기 좋다.

### datalist

```html
<h2>datalist</h2>
<label for="job">직업</label>
<input id="job" list="jobs" />
<datalist id="jobs">
  <option value="학생"></option>
  <option value="디자이너"></option>
  <option value="퍼블리셔"></option>
  <option value="개발자"></option>
</datalist>
```

datalist의 경우에는 자동완성 기능과 같게 예시를 주고 작성도 가능

## meter tag

meter태그는 어떤 변화도 없는 고정된 진행 상태를 나타내는 데 효과적

meter태그는 min값을 가지고 있다. progress의 경우는 기본으로 최소값이 0이다.

`optimum`: 이상적인 값을 하나 속성으로 지정

```html
<meter value="80" min="0" max="100" low="33" high="67" optimum="50">80%</meter>
<meter value="53" min="0" max="100" low="33" high="67" optimum="50">53%</meter>
```

optimum가 low, high의 사이만큼은 안정권인 초록색

벗어나면 노란색과 빨간색인데 여기서는 노란색만 나온다.



### progress 태그

| 태그 속성 | 설명      | 비고                            |
| --------- | --------- | ------------------------------- |
| max       | 최대값    | 기본값은 1                      |
| value     | 진행 수치 | 자바스크립트를 활용해 변경 가능 |



### meter 태그

| 태그 속성 | 설명                          | 비고                            |
| --------- | ----------------------------- | ------------------------------- |
| min, max  | 최소값, 최대값                |                                 |
| low, high | 전체 범위를 3등분하는 두 수치 |                                 |
| optimum   | 이상적인 값                   | 3개로 나눈 구간 중 한 곳에 위치 |
| value     | 실제 값                       |                                 |



## iframe

iframe의 사용에서의 문제점

1. 보안상 위험

**클릭 재킹(clickjacking)** -> 다른 웹 사이트에서 내 사이트를 풀 화면으로 넣어서 눈속임으로 아이디나 패스워드를 가로채서 사용할 위험이 있다.

2. 사용성 저하

3. 검색 최적화 상태 X

4. 브라우저 무리



## textarea

| 태그 속성 | 설명                | 비고                                                         |
| --------- | ------------------- | ------------------------------------------------------------ |
| cols      | 글자 수 단위의 너비 | 기본값은 20                                                  |
| rows      | 표시되는 줄 수      | 지정한 줄 수를 넘어가면 스크롤 바가 생김                     |
| multiple  | `<select>`          | 옵션 다중 선택 가능<br />드롭다운 방식 대신 상자 표시        |
| selected  | `<option>`          | 미리 선택된 상태로 만듦<br />(checkbox 타입, radio타입 속성의 checked와 유사) |
| value     | `<option>`          | 실제로 전송될 값                                             |
| list      | `<input>`           | 연결할 `<datalist>`의 ID값과 같아야 함                       |

