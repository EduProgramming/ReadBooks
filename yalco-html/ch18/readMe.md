# Ch18. JS

### null

```js
typeof null; // 'object'

let x = null;

console.log(x === null);
```

### for문

#### for of문

변수에 배열을 사용할 경우 이 배열의 요소를 순서대로 반환하는데 사용

```js
for (const 반복_상수 of 배열) {
  console.log(반복_상수);
}
```

#### for in문

키와 값의 쌍으로 이루어져 있는 객체에서 키를 순서대로 반환

```js
for (const key in 객체) {
  console.log(key);
}
```
