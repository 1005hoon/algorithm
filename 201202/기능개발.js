function solution(progresses, speeds) {
    const days = [];
    let answer = [];

    for(let i=0; i<progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }

    let count = 0;
    let maxDay = days[0];
    for(let i=0; i<days.length; i++){
        if(days[i]<=maxDay){
            count++;
        } else{
            maxDay = days[i];
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}