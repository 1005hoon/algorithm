# search algorithms

생각보다 search algorithm이 사용되는곳이 많은데, 보기엔 간단하지만 정말 효율적으로 적용하기는 어려운 알고리즘이다.

예를 들어, 구글의 경우 크롤러가 초당 몇만개였나 의 사이트의 데이터를 가져오는데 해당 사이트의 데이터들을 검색 키워드에 해당하게 맞추어 랭킹을 먹여서 나타나게 하는걸 보면 진짜 어마어마한 기술력임을 알 수 있다.

파이썬의 경우, 100만개의 element를 순차적으로 iterate 시키기 위해서는 약 13초가 걸리는데, 알고리즘을 효율적으로 사용하여 그 많은 사이트 정보를 검색 키워드에 맞추어 1초도 안걸리게 표현을 해준다.

## How do we search?

### Linear Search

예를들어, 미국의 주를 담은 array가 있다고 쳐보자.

```javascript
const states = ['Alabama', ... ,'Wyoming']

```

이렇게 50여개의 주가 존재하는지를 찾기 위해 가장 근본적인 해결방법은 array 안에 있는 element를 하나씩 iterate 돌리면서 비교를 해보고, 아니라면 pass 맞다면 return true 끝까지 가서 없다면 false를 리턴하면 된다.

만약 데이터가 sort가 되어있다면 그런 방법도 나쁘진 않을 수 있는데, sort가 되어있지 않는 상태라면 얄짤없이 끝까지 돌아가봐야 한다.

이를 `linear Search` 라고 하며, javascript의 `includes, indexOf, find, findIndex` 의 경우 linear search를 사용해 동작하게 된다.

Linear Search란 배열 안의 원소를 하나씩 돌아가며 비교를 해보는 방식으로 동작을 한다.

#### Linear Search Pseudocode

- array를 받아오는 함수를 작성
- array를 한바퀴 루프를 돌리며 해당 값이 우리가 타겟으로 잡은 값과 같은지 비교
- 만약 같다면, return true 및 해당 인덱스를 리턴시키고
- 찾지 못한다면 return -1

```javascript
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};
console.log(linearSearch([10, 15, 20, 25, 30], 15));
```

#### BIG O for Linear Search

간단 명료하게, 한번에 우리가 원하던 타겟값을 찾게 된다면 `O(1)` 이고, 최악의 경우 가장 마지막에 위치하게 됨으로 `O(n)` 이다.
따라서 평균적으로 그냥 `O(n)` 이라고 생각을 하면 된다.

## Binary Search

일단 binary search는 linear search보다 훨씬 빠른데, 그 이유는 일단 array의 중간을 보고, 해당되지 않는 반을 버려버림으로써 엄청나게 속도를 빠르게 해준다.

하지만 주의점으로 binary search는 무조건 `sorted array` 의 경우에만 사용이 가능하다.

### Divide and Conquer

- sorted array를 받아들이는 함수를 생성
- 두개의 포인터 생성
  - 첫번째는, 가장 왼쪽의 값을 가리키게
  - 두번째는 가장 오른쪽 값을 가리키게
- 왼쪽 포인터가 오른쪽 포인터보다 작은동안 다음의 로직을 계속 실행
  - 정 중앙에 포인터 생성
  - 만약 중앙이 우리가 원하던 값이면 해당 인덱스를 리턴
  - 값이 작다면, 왼쪽 포인터를 중간값 + 1 인덱스로 이동
  - 값이 크다면, 오른쪽 포인터를 중간값 - 1 인덱스로 이동
- 인덱스가 겹친다면 return -1

```javascript
const binarySearch = (arr, target) => {
  // 양 끝에 포인터 생성
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.round((left + right) / 2);

  // 오른 포인터가 왼쪽 포인터보다 크고, 타겟값은 찾지 못한경우 와일 루프
  while (left <= right && arr[mid] !== target) {
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.round((left + right) / 2);
  }
  // 타겟값이 같다면 해당 인덱스 리턴
  if (arr[mid] === target) return mid;
  return -1;
};
```

평균적으로 `O(log n)` 이고, 베스트케이스의 경우 단번에 찾은 경우로써 `O(1)` 이다.

## Naive String Search

문자열 안에서 특정 단어 또는 낱말이 몇번이나 사용되었는지 찾고 싶을 때 활용하는 검색 방법으로 다음과 같은 검색 처리를 한다

- 긴 문자열의 낱말을 loop을 돌리고
  - 그와 함께 타겟 단어 또는 낱말을 loop을 돌린다
  - 만약 해당 낱말이 같지 않다면, 이너 루프를 깨고
  - 일치한다면 계속 비교를 한다
  - 이너루프가 다 끝난다면 match 카운트를 1 추가
- 카운트 리턴

```javascript
const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};
```
