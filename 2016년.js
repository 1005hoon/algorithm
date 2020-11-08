function solution(a, b) {
    var answer = '';
    const datArr = ['SUN', 'MON','TUE','WED','THU','FRI','SAT'];//각 요일을 배열에 저장
    const date = new Date(`2016/${a}/${b}`);
    const day = date.getDay(); //0 ~ 6 까지 숫자로 요일 반환. 0~6 === 일요일 ~토요일

    answer = datArr[day];
    return answer;
}

solution(5,24);