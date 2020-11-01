function solution(answers) {
    const answer = [];

    const solver_01 = [1,2,3,4,5];
    const solver_02 = [2,1,2,3,2,4,2,5];
    const solver_03 = [3,3,1,1,2,2,4,4,5,5];
    const score = [0,0,0];

    //맞춘 정답 개수 세기
    answers.forEach((answer, index)=>{
        if(answer === solver_01[index%5]) score[0]++;
        if(answer === solver_02[index%8]) score[1]++;
        if(answer === solver_03[index%10]) score[2]++;
    })

    //가장 높은 점수를 받은 사람 구하기
    const maxScore = Math.max.apply(null, score);
    score.forEach((element,index) => {
        if(element === maxScore){
            answer.push(index+1)
        }
    });

    return answer;
}