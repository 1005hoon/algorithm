function solution(arr)
{
    var answer = [];
    let beforeElement = '';

    arr.forEach((element, index) =>{
        if(beforeElement === element){
            return;
        }
        beforeElement = element;
        answer.push(element);
    })

    return answer;
}