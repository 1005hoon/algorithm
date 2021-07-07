function solution(n, arr1, arr2) {
    var answer = [];
    var sumBinary = [];
    var sumBinaryLen ;

    //arr1 이진수로 변환
    var arr1ToBinary = arr1.map(arg =>
            parseInt(arg.toString(2))
        );
    //arr2 이진수로 변환
    var arr2ToBinary = arr2.map(arg2 =>
        parseInt(arg2.toString(2))
    );
    
    for(let i = 0; i < n; i++){
        answer.push(arr1ToBinary[i] + arr2ToBinary[i]);//arr1과 arr2의 두 이진수를 더해서 answer배열에 추가
        sumBinaryLen = answer[i].toString().length;
        if(sumBinaryLen < n){//asnwer에 추가한 이진수의 자릿수가 n보다 작으면 앞에 0 추가
            for(let j = sumBinaryLen; j < n; j++){
                answer[i] = ('0'+ answer[i]); 
            }
        }
        answer[i] = answer[i].toString().replace(/[1-9]/g,'#');//1~9를 #으로 대체
        answer[i] = answer[i].toString().replace(/0/g,' ');//0을 공백으로 대체
    }
    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);