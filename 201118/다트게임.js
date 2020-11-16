function solution(dartResult) {
    let answer = 0;
    const tempArray = [];
    dartResult = dartResult.split('');

    dartResult.forEach((element, index) =>{
        const score = tempArray[tempArray.length-1];

        if(element === 'S'){
            tempArray[tempArray.length-1] = score*1;
        } else if(element === 'D'){
            tempArray[tempArray.length-1] = score*score;
        } else if(element === 'T'){
            tempArray[tempArray.length-1] = score*score*score;
        } else if(element === '*'){
            tempArray[tempArray.length-1] = score*2;
            if(tempArray.length >= 2){
                tempArray[tempArray.length-2] = tempArray[tempArray.length-2]*2;
            }
        } else if(element === '#'){
            tempArray[tempArray.length-1] = score*(-1);
        } else{
            if(dartResult[index-1] === '1' && element === '0'){
                tempArray.pop();
                tempArray.push(10);
                return;
            }
            tempArray.push(element*1);
        }
    })

    tempArray.forEach(element =>{
        answer += element;
    })

    return answer;
}