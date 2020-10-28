# BIG O Notation

일단 알고리즘 공부를 시작하기 전에 Big O에 대해 알아봅시다.

#### 학습 목표

- 왜 Big O Notation이 필요한지 이해하기
- Big O Notation이 뭔지 이해하기
- Time Complexity와 Space Complexity의 차이를 설명하기
- 다양한 알고리즘들의 Time Complexity와 Space Complexity를 분석 해보기
- Logarithm이 뭔지 배워보기

## Introduction

### 그래서 뭐가 중요한건데?

만약 똑같은 기능을 하는 함수가 여러개 있다고 생각해보세요.

그럼 거기서 어떤게 가장 최선의 선택일지 어떻게 파악할 수 있을까요?

> String 타입의 데이터를 받아오고 문자열의 순서를 뒤집은 문자를 return하는 함수를 만들어보세요

이것만 구글에 검색해봐도 **오조오억개**나 되는 예시를 찾을 수 있는데요,

뭐 우리가 원하는 결과값만 받아올 수 있다면 다 되는거 아닌가요?

### 도대체 왜 신경쓰는건데?

사실 프로그램을 할 때에, 정확한 단어를 활용해서 우리가 작성한 코드가 어떻게 실행하는지 설명할 수 있어야 합니다.

또한 다양한 방법을 도입하는 경우, 각각의 방법이 우리 코드가 실행될 때 어떤 영향을 미치는지도 파악하고 그에 맞는 방법을 도입해야 하구요.

마지막으로, 코드 실행속도가 너무 느리거나 crash하는 경우, 작성한 코드의 어떤 부분이 이런 문제를 일으키는지 파악 할 수 있어야 해요.

그리고, 우리의 가장 큰 관심사이지만 가장 중요하지 않은 이유로: **인터뷰에서 물어봅니다!**

### 예시를 들어볼까요?

1에서 임의의 수 n까지 모두 더하는 함수를 만들어봅시다.

직관적으로 만들어본다면 아래와 같은 코드를 작성할 수 있겠죠

```
const getSumTo = (number) => {
  let total = 0;
  for (let i = 1; i <= n; i ++>) {
    total += i
  }
  return total
}
```

그렇지만 알고리즘을 활용한다면 아래처럼 간단하게 계산이 가능합니다.

```
const getSumTo = (number) => {
  return n * (n + 1) / 2
}
```

> 도대체 어째서 두번째 코드가 첫번쨰와 같은거죠!?

```
1차원적으로 풀어서 봅시다!

  getSumTo(number) =    1   +   2   +   3   +   ...   +   (n-1)   +   n
+ getSumTo(number) =    n   +   (n-1)   +   ...   +   3   +   2    +   1
---------------------------------------------------------------------------------
2 * getSumTo(number) = (n+1)    +   (n+1)   +   ...   +   (n+1)

이 되는걸 볼 수 있죠.

그렇게 ( n + 1 )이 총 n개만큼 있으니
2 * getSumTo(number) = n * ( n + 1 )  이 나오게 되는거죠

```

물론 이 두번째 방법이 무조건 좋다는건 아닙니다.

특히 이 공식을 처음 보는 사람은 해당 코드가 무슨 결과값을 가져오는지를 직관적으로 알기는 어렵죠

하지만 왜 굳이 프로그래머들이 두번째 코드를 사용을 하는걸까요?

### 더 좋은 코드란?

- 더 빠른?
- 메모리 사용량이 적은?
- 더 직관적으로 읽히는?

첫번째, **더 빠른?** 을 알아봅시다

작성한 프로그램이 실행되는데 얼마나 오래 걸렸는지 프로그램 안에 자체적으로 시간을 기록하는건 되게 정확하지 못합니다.
그 이유는 컴퓨터마다 처리하는 속도가 달라 사용하는 컴퓨터마다 시간이 다를테구요,

심지어 가은 컴퓨터로 같은 코드를 실행하는 경우에도 각각 다른 시간이 걸립니다 .
따라서 얼마나 더 빨리 실행되는지를 알아보는건 사실상 불가능하죠.

그렇다면 해당 코드가 다른 코드보다 더빠른지 어떻게 파악이 가능할까요?

**동작 횟수 계산하기** 를 통해 코드의 속도를 파악할 수 있습니다.

두번째의 코드의 경우,

```
const getSumTo = (number) => {
  return n * ( n + 1 ) / 2
}
```

에서 실제 코드가 동작하는 계산의 수는 총 세개입니다!

n **곱하기** ( n **더하기** 1 ) **나누기** 2

따라서, 정말 큰 수를 더한다 하더라도, 해당 알고리즘을 사용하면 단 세번의 계산으로 원하는 값을 구할 수 있겠죠?

하지만 첫번째 코드의 경우

```
const getSumTo = (number) => {
  let total = 0;
  for (let i = 1; i <= number; i ++>) {
    total += i
  }
  return total
}
```

더하고 싶은 수가 크면 클수록 동작하는 계산의 수도 함꼐 늘어납니다.
n이 100이라면, for loop이 총 100번을 동작하게 되겠죠. 물론 중간에 자잘한 더하기도 있을테구요.
n이 93129953295이라면, for loop은 그대로 93129953295번 동작할거구요. 여기에도 중간에 자잘한 더하기등은 별로 중요하지 않겠죠.
따라서 n의 개수가 몇이든, 해당 코드는 n번의 연산을 해야만 합니다.

비교해보면, 첫번째의 코드는 총 3번의 계산만 활용하였고,
두번째의 코드는 총 n번의 계산을 활용하였죠.

이처럼 코드의 속도를 파악하는 방법으로, 총 몇번의 계산이 동작하는지를 계산하는 방법을 사용하고,
그 방법을 쉽게 **Big O Notation** 이라고 합니다.

## Big O Notation

### Big O Notation이란?

Big O Notation은 해당 코드가 총 몇번 동작을 하는지를 계산하는 방법입니다.
따라서 input의 사이즈가 커짐에 따라 해당 코드가 몇번 동작하는지를 파악할 수 있게 해주는데요,
Big O Notation을 활용할 때에는 사소한 연산들은 포함시키지 않습니다.

흔히 알고리즘의 실행속도를 이야기 할때는,

> 알고리즘의 n에 사이즈에 변화에 따라 해당 상수도 어떻게 변하는지를 파악하여 O(f(n)) 의 형태로 나타냅니다

- O(f(n) = n)
- O(f(n) = n^2)
- O(f(n) = 1)
  등등 O(f(n))은 그때그때 다 다르게 활용됩니다.

```
const getSumTo = (number) => {
  return n * ( n + 1 ) / 2
}
```

에서 실제 코드가 동작하는 계산의 수는 총 세개입니다!

n **곱하기** ( n **더하기** 1 ) **나누기** 2

따라서 Big O Notation을 활용한다면
**O(1)**이 되죠!

왜 3이 아니라 1이냐구요?
그 이유는 n의 수가 얼마나 커지든 해당 코드가 동작하는 횟수는 항상 같기 때문이에요!

```
const getSumTo = (number) => {
  let total = 0;
  for (let i = 1; i <= number; i ++>) {
    total += i
  }
  return total
}
```

에서 실제 코드가 동작하는 계산의 수는 총 n개입니다!
n의 수가 커지면 커질수록 돌아가는 for loop도 더 많아지겠죠.

따라서 해당 코드를 Big O Notation을 활용한다면
**O(n)** 이 됩니다!

그럼 다른 예시를 한번 봐볼까요

```
const countUpAndDown = (number) => {
  console.log('간다간다뿅간닥')
  for (let i = 0; i < n; i ++) {
    console.log(i)
  }

  console.log('떡락 가쟝')
  for (let j = n - 1; j >= 0; j --) {
    console.log(j)
  }

  console.log('바닥을 쳤읍니다')
}
```

이코드의 경우, 가장 위에있는 i를 활용한 루프는 O(n)입니다.
아래에 있는 j를 활용한 떡락 루프도 O(n)이지요.

그럼 해당 함수의 Big O Notation은 얼마일까요?
바로 O(n)입니다.
왜냐하면 O(2n)도 나중에 엄청나게 큰 수를 input으로 받게되면 2배의 차이는 별로 크게 차이나지 않기 떄문이에요.

그럼 nested loop의 경우는 어떨까요?

```
const twistThis = (number) => {
  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < n; j ++ ) {
      console.log(i, j)
    }
  }
}
```

이친구의 경우, i 루프는 O(n)이구,
i 루프 안에 있는 j루프도 O(n)입니다.
하지만 i 루프 안에 j 루프가 있죠? `i * j`
따라서 Big O Notation도 `O(n) * O(n) = O(n*n) = O(n^2)` 가 됩니다.

### 자그마한 것들은 무시합니다!

이처럼 Big O Notation을 적을때에는, 작은 상수들은 신경쓰지 않습니다

| 사용불가능  | 사용가능 |
| ----------- | -------- |
| O(2n)       | O(n)     |
| O(500)      | O(1)     |
| O(13n^2)    | O(n^2)   |
| O(n+10)     | O(n)     |
| O(1000n+50) | O(n)     |
| O(n^2+5n+7) | O(n^2)   |

## Space Complexity

여지껏은 Time Complexity에 대해 알아보았는데요,
Time Complexity라 함은 우리의 알고리즘이 input의 크기가 커짐에 따라 얼마나 오래 걸릴지를 계산하는 방법이였습니다.

Big O Notation을 사용하면, 시간뿐만 아니라 공간 (space) 복잡도도 함께 계산이 가능합니다.
공간 복잡도라 함은, 작성한 코드 알고리즘이 실행되기 위해 얼마나 많은 메모리할당이 필요한지 계산하는건데요

> Input 크기가 커지면 차지하는 공간도 커지지 않나요?
> **Auxiliary Space Complexity** 라는 표현이 있습니다.

이는 input size에 상관없이 알고리즘 사용에 필요한 공간을 뜻하는데요,
특별히 명시되어있지 않는 한 Big O Notation의 공간복잡도는 auxiliary space complexity를 이야기 합니다.

### JavaScript에서의 Space Complexity

- 대부분의 primitive values (booleans, numbers, undefined, null)은 일정한 양의 공간을 차지합니다 (constant space)
- String은 O(n)의 공간을 필요로 하고, n의 값은 String의 길이입니다
- Reference Types은 대체로 O(n)을 필요로 하며, n은 Array의 경우 길이이거나, Object의 경우 key의 수입니다

이전에 작성했던 코드를 볼까요?

```
const getSumTo = (number) => {
  let total = 0;
  for (let i = 1; i <= number; i ++>) {
    total += i
  }
  return total
}
```

이 코드 같은 경우, 코드의 space complexity는 일단

- total -> primitave value = 1
- i -> primitive value = 1
  따라서 O(1)입니다.

그럼 다음 코드를 한번 봐볼까요?

```
const double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  })
  return newArr
}
```

이 코드의 경우, array가 활용이 되었죠.
따라서 O(n)의 space complexity를 갖습니다.

## Logarithms

여태껏 O(1), O(n), O(n^2) 등의 복잡도를 알아보았는데요,
어떤 경우에는 big O notation이 좀 더 복잡한 수학식을 갖고 계산이 됩니다.

> 여기서 잠깐! 로그가 뭐였지?

```
log2(8) = 3           =>      2^3 = 8

log2(n) = exponent    =>      2^exponent = value
```

Logarithm Complexity는 가장 효율적인 알고리즘으로,
걸리는 시간으로 비교를 하면 O(1) 다음으로 요율적인 알고리즘입니다.
