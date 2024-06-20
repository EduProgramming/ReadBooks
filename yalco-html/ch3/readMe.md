# Ch3. HTML

## Table

`table>caption+(tr>td*3)*3`

```html
<table>
  <caption></caption>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

`table>caption+(thead>tr>th*4)+(tbody>(tr>(th+td*3))*3)+tfoot(tr>th+td*3)`

```html
<thead>
  <tr>
    <th scope="col">일</th>
    <th scope="col">월</th>
    <th scope="col">화</th>
    <th scope="col">수</th>
    <th scope="col">목</th>
    <th scope="col">금</th>
    <th scope="col">토</th>
  </tr>
</thead>
```

table의 `scope="col"`과 `colgroup`은 무엇인가?

**colgroup**: 테이블의 특정 열을 그룹으로 묶어 공통적인 속성을 넣어 줄 때 사용

> **tag속성으로 CSS처리하기**
>
> `td[rowspan="2"]` 이런식으로 처리
