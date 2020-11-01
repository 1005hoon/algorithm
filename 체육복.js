function solution(n, lost, reserve) {
    var answer = 0;
    for(let i = 0; i <reserve.length;i++){
        let reserveOfLost = lost.find(element => reserve[i] === element);
        if(reserveOfLost !== undefined){
            let idxOfLost = lost.indexOf(reserveOfLost);
            let idxOfReserve = lost.indexOf(reserveOfLost);
            lost.splice(idxOfLost,1);
            reserve.splice(idxOfReserve,1);
        }

        for(let j = 0; j < lost.length;j++){
            if((reserve[i] === lost[j]-1) || (reserve[i] === lost[j] + 1)){
               let rmLost = lost.indexOf(lost[j]);
               lost.splice(rmLost,1);
            }
        }
    }
    answer = n - lost.length;
    console.log(answer);
    return answer;
}

solution(3, [3], [1]);