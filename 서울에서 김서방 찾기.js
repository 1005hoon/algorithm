function solution(seoul) {
    var answer = '';
    const idx = seoul.findIndex(arg => arg ==='Kim');
    answer = `김서방은 ${idx}에 있다.`
    console.log(answer);
    return answer;
}

solution([Jane, Kim]);