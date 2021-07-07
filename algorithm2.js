function solution(numbers) {
    var answer = [];
    var numCnt = numbers.length;
    for ( var i = 0; i < numCnt; i++) {
      for ( var j = i + 1; j < numCnt; j++) {
          if(i !== j){//같은 인덱스가 아닐 경우에만 수행
            var sum = numbers[i] + numbers[j];
            if( answer.indexOf(sum) === -1) {//sum값이 배열에 없으면 추가
                answer.push(sum);
              }
          }
      }
    }
    answer.sort((a,b) => a - b);
    return answer;
}



