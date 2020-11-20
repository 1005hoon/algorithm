function solution(s) {
    let answer = s.length;
    const length = s.length;

    for(let i=1; i<=length; i++){
        let splitArray = [];
        for(let j=0; j<length; j+=i){
            splitArray.push(s.substr(j, i));
        }
        const compressedArrayLength = compress(splitArray);
        answer = compressedArrayLength < answer ?  compressedArrayLength : answer
    }
    return answer;
}

function compress(array){
    let repeatString = '';
    let tempArray = [];
    let repeatCount = 0;

    array.forEach(element =>{
        if(element === repeatString){
            repeatCount++;
            tempArray[tempArray.length-1] = element.length + String(repeatCount).length;
        } else {
            tempArray.push(element.length);
            repeatString = element;
            repeatCount = 1;
        }
    })

    let sum = 0;
    tempArray.map(element => sum+=element);

    return sum;
}