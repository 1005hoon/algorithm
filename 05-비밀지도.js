const solution = (n, arr1, arr2) => {
  // arr1, arr2 를 2진수로 바꿔주고
  const toBinary1 = arr1.map((num) => num.toString(2));
  const toBinary2 = arr2.map((num) => num.toString(2));

  const sum = toBinary1.map((bin, i) => {
    // 일단 n의 수만큼 빈 공간이 있다면 0을 채워주고
    return (
      ((n, result) => "0".repeat(n - result.length) + result)(
        n,
        // toBinary1의 bin과   toBinary2의 bin들을 합쳐준걸 인풋을 ㅗ입력
        String(Number(bin) + Number(toBinary2[i]))
      ) //  0, 1, 2
        // 결과값을 합친다음
        .split("")
        // 만약에 해당 숫자가 0이면 공백을 주고
        .map((num) => {
          if (num * 1 === 0) return " ";
          // 아니라면 #으로 채운뒤
          return "#";
        })
        // map은 array를 반환하니 쪼인
        .join("")
    );
  });
  return sum;
};

// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
