const binarySearch = (arr, target) => {
  // 양 끝에 포인터 생성
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.round((left + right) / 2);

  while (left <= right && arr[mid] !== target) {
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.round((left + right) / 2);
  }
  if (arr[mid] === target) return mid;
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
