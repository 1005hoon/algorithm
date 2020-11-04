const solution = (arr, options) => {
  return options.map((option) => {
    return mapper(arr, option);
  });
};

const mapper = (originalArr, optionArr) => {
  return originalArr
    .slice(optionArr[0] - 1, optionArr[1])
    .sort((a, b) => a - b)[optionArr[2] - 1];
};

console.log(
  solution(
    [1, 5, 2, 6, 3, 7],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
