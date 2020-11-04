const solution = (a, b) => {
  const date = new Date(`2016-${a}-${b}`).toString();
  return date.split(" ")[0].toUpperCase();
};

console.log(solution(2, 29));
