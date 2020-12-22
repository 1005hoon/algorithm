# Recursion

recursion은 자기 자신을 불러오는 함수를 활용해 문제를 해결하는 방법

함수를 호출을 하게 되면, callstack에 쌓이게 되는데 이를 잘 활용해야 한다!

## Where could things go wrong?

### No Base Case

만약 베이스 케이스가 없다면, 무한루프에 빠지게 된다

```javascript
const factorial = (num) => {
  // if (num === 1) return 1;
  return num * factorial(num - 1);
};
```

이런식으로 recursion에게 어디서 멈출지 알려주지 않았기에 무한루프에 빠지게 되고, 미칠듯한 함수 호출에 stack overflow 발생!

### Wrong return!

return을 까먹거나 잘못된 값을 return 하면 역시나 에러가 발생!

```javascript
const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num);
};
```

이런식으로 `factorial(num)` 을 리턴시키면 평생 다다를수 없는 베이스케이스로써 잘못된 return값을 제공해준건데,
이런 경우에도 stack overflow 발생!

## Helper Method Recursion

recursion을 좀 더 활용하기 쉽게 하기 위해 사용하는 패턴중 하나로 다음과 같이 사용을 한다

```javascript
function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
```

### 예: array 안의 모든 홀수를 담아보자

위의 디자인 패턴을 활용하면 다음과 같이 사용이 가능하다

```javascript
function getOddValues(numArr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    // modify the outerScopedVariable
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
```
