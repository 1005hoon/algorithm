function solution(n) {
    let answer = [];

    while(n > 0){
        if(n%3 === 0){
            answer = convert124(answer, n);
            n = Math.floor(n/3) -1;
        } else if(n%3 !== 0){
            answer = convert124(answer, n);
            n = Math.floor(n/3);
        }
    }

    return answer.join('');
}

function convert124(arr, n){
    if(n%3 === 1){
        arr.unshift(1)
    } else if(n%3 === 2){
        arr.unshift(2)
    } else if(n%3 === 0){
        arr.unshift(4)
    }
    return arr;
}