function solution(numbers) {
    //두개 뽑아서 더하기
    const sumArray = [];
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            sumArray.push(numbers[i]+numbers[j])
        }
    }
    //중복제거
    const answer = Array.from(new Set(sumArray));
    //오름차순
    return answer.sort((a,b) => a-b);
}
