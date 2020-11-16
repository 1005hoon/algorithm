function solution(s) {
    var answer = [];
    s = s.split('');
    if(s.length%2 === 0){
        answer.push(s[Math.floor(s.length/2)-1]);
        answer.push(s[Math.floor(s.length/2)]);
    } else{
        answer.push(s[Math.floor(s.length/2)])
    }

    return answer.join('');
}