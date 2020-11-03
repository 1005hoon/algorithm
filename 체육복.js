function solution(n, lost, reserve) {
    var answer = 0;
    var rmArr=[];
    for(let i = 0; i <reserve.length;i++){
        let reserveOfLost = lost.find(element => reserve[i] === element);//도난당한 학생중 여벌옷 가져온 학생을 찾아서
        if(reserveOfLost !== undefined){//도난당한 학생 배열과 여벌옷가져온 학생 배열에서 각각 제거
            let idxOfLost = lost.indexOf(reserveOfLost);
            let idxOfReserve = reserve.indexOf(reserveOfLost);
            lost.splice(idxOfLost,1);
            reserve.splice(idxOfReserve,1);
        }
        
    }
    for(let i = 0; i <reserve.length;i++){
        for(let j = 0; j < lost.length;j++){//여벌옷 가져온 학생의 번호가 도난당한 학생의 바로 앞이거나 뒤 일경우 도난 배열에서 제거
            if((reserve[i] === lost[j]-1) ){
                rmArr.push(lost[j]);
                reserve.splice(reserve.indexOf(reserve[i]),1);
                lost.splice(lost.indexOf(lost[j]),1);
            }else if(reserve[i] === lost[j]+1){
                rmArr.push(lost[j]);
                reserve.splice(reserve.indexOf(reserve[i]),1);
                lost.splice(lost.indexOf(lost[j]),1);
            }
        }
    }
    console.log('rmArr: ',rmArr);
    const set1 = [...new Set(rmArr)];
    // var rmCnt = Math.abs(lost.length - set1.length);
    // console.log('rmCnt: ',rmCnt)
    answer = n - set1.length;//전체 학생수에서 도난 당한 학생의 수를 빼줌
    console.log(answer);
    return answer;
}

solution(5, [2, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);