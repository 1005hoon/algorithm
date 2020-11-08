function solution(a, b) {
    let answer = 0;
    const week = ['FRI','SAT','SUN','MON','TUE','WED','THU','FRI','SAT'];
    const month = [31, 29, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];

    for(let i=0; i<a-1; i++){
        answer += month[i];
    }
    answer += b-1;
    return week[answer%7];
}