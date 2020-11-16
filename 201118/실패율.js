function solution(N, stages) {
    const answer = [];
    stages.sort();

    let stage = 1;
    while(stage <= N){
        let challenger = 0;
        let fail = 0;
        stages.forEach(element => {
            if(element >= stage){
                challenger++;
                if(element === stage){
                    fail++;
                }
            }
        })
        answer.push({stage: stage, failRate: fail/challenger})
        stage++;
    }

    return answer.sort((a,b) => b.failRate - a.failRate).map(element => {return element.stage});
}