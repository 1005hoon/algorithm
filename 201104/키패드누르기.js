function solution(numbers, hand) {
    const answer = [];
    let leftThumb = '*';
    let rightThumb = '#';

    numbers.forEach(num => {
        if(num === 1 || num === 4 || num === 7){
            leftThumb = num;
            answer.push('L');
        } else if(num === 3 || num === 6 || num === 9){
            rightThumb = num;
            answer.push('R');
        } else {
            let leftLength = length(num, leftThumb);
            let rightLength = length(num, rightThumb);

            if(leftLength < rightLength){
                leftThumb = num;
                answer.push('L');
            } else if(leftLength > rightLength){
                rightThumb = num;
                answer.push('R');
            } else {
                if(hand === 'left'){
                    leftThumb = num;
                    answer.push('L');
                } else{
                    rightThumb = num;
                    answer.push('R');
                }
            }
        }
    })

    return answer.join('');
}

function length(num1, num2){
    const keypad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#'],
    ]
    let num1_index = [];
    let num2_index = [];

    keypad.forEach((value, index) =>{
        if(keypad[index].indexOf(num1) !== -1){
            num1_index = [index, keypad[index].indexOf(num1)]
        }
        if(keypad[index].indexOf(num2) !== -1){
            num2_index = [index, keypad[index].indexOf(num2)]
        }
    })

    return Math.abs(num1_index[0]-num2_index[0]) + Math.abs(num1_index[1]-num2_index[1]);
}