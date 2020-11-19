# Recursion

첫번째로, Recursion이 뭔지 배워봅시다

#### 학습목표

- recursion이 무엇인지, 그리고 어떻게 사용하는지 설명하기
- recursive 함수의 두가지 요소를 이해하기
- call stack을 시각화 하여 recursive 함수를 좀 더 효율적으로 debug 하기

## Introduction

### Recursion이 뭔가요?

Recursion은 코드의 한 단계가 자기 자신을 다시 호출하는 경우인데요,

작성된 코드에서는 보통 function이 끝날 때 자기 자신을 다시 호출하는 경우입니다.

Recursion은 생각보다 많은곳에서 사용되고 있는데요, 예를 들어:

- JSON.parse / JSON.stringify
- document.getElementById / DOM Traversal Algorithms
- Object Traversal

등등에도 모두 다 recursion이 활용되고 있습니다

### Recursive Function은 어떻게 동작하나요?

Recursive Function은 똑같은 함수에 다른 input에 넣어 문제의 근원점에 다다를때까지 실행을 시키는데요,

문제의 근원점, Base Case라고 칭하겠습니다, 은 recursion이 끝나는 부분을 뜻합니다.

이처럼, Recursive Function은 두개의 요소로 이루어져 있습니다

- Base Case
- Different Input

예를 들어 알아봅시다.

```
const countDown = (num) => {
  if (num <= 0) {
    console.log('카운트다운 끝!')
    return;
  }
  console.log(num);
  num --;
  countdown(num);
}

```
이 `countDown`이란 함수는 number가 base case에 닿기 전까지 계속해서 다른 input값을 제공하여 자기자신을 호출하고 있습니다.

따라서 base case는 카운트다운이 끝나는, 즉 num === 0 에 도달하는 지점이 base case이구요, 

base case가 아닌 경우, 계속해서 num -- 를 한 후 자기자신을 다시 호출하는 부분을 different input으로 설명할 수 있습니다.


다음 예시를 봐봅시다
```
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1)
}
```
