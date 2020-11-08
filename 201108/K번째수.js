function solution(array, commands) {
    var answer = [];
    commands.forEach(element =>{
        answer.push(sliceArray(array, element));
    })
    return answer;
}

function sliceArray(array, command){
    return array.slice(command[0]-1,command[1]).sort((a,b)=>a-b)[command[2]-1];
}