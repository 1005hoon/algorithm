function solution(numbers, target) {
    let allNumber = [0];

    numbers.forEach(number =>{
        const temp = allNumber;
        allNumber = [];
        temp.forEach(element =>{
            allNumber.push(element-number);
            allNumber.push(element+number);
        })
    })

    let answer = 0;
    allNumber.forEach(element=>{
        if(element === target) answer++;
    })

    return answer;
}