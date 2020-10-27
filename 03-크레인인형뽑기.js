const solution = (board, choices) => {
  const filteredBoard = board
    .reduce((prev, cur) => {
      return cur.map((val, index) => {
        return [...(prev[index] || []), cur[index]];
      });
    }, [])
    .map((row) => row.filter((el) => el !== 0));

  let bucket = [];
  let result = 0;
  for (let choice of choices) {
    const doll = filteredBoard[choice - 1].shift();
    if (!doll) {
      continue;
    }
    if (doll === bucket[bucket.length - 1]) {
      bucket.pop();
      result += 2;
      continue;
    }
    bucket.push(doll);
  }
  return result;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
