function solution(array, commands) {
    var answer = [];
    commands.forEach(element => {
       
        const cutArr = array.slice(element[0]-1,element[1])
                            .sort((x,y) => x-y);
        answer.push(cutArr[element[2]-1]);

    });
    console.log(answer);
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3]]);