/*
일단, 넓이가 가장 큰 값을 찾아야 함 = maxArea
area = height * width;
area = min(a, b) * (bi - ai)

*/

/*
const solution = arr => {
  let maxArea = 0;
  
  for (let i = 0; i < arr.length; i ++) {
    for (let j = i + 1; j < arr.length; j ++) {
      const height = Math.min(arr[i], arr[j]);
      const width = j - i;
      const localArea = height * width;

      maxArea = Math.max(maxArea, localArea);
    }    
  };
  console.log(maxArea)
};
*/

const solution = arr => {
  const arrLength = arr.length;
  let maxArea = 0;
  let i = 0;
  let j = arrLength - 1;

  while (i < j) {
    const width = j - i;
    const height = Math.min(arr[i], arr[j]);
    const localArea = width * height;
    maxArea = Math.max(localArea, maxArea);

    if (arr[i] <= arr[j]) {
      i ++
    } else {
      j --
    }
  }

  console.log(maxArea)
};

solution([7, 1, 2, 3, 9]);
