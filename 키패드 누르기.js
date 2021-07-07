function solution(numbers, hand) {
    var answer = '';
    var keypad = {
        1: [0,3], 2: [1,3], 3: [2,3], 
        4: [0,2], 5: [1,2], 6: [2,2], 
        7: [0,1], 8: [1,1], 9: [2,1], 
        '*': [0,0], 0: [1,0], '#': [2,0],
    };
    var leftHand = '*';
    var rightHand = '#';
    hand === 'right' ? hand = 'R': hand = 'L'; //오른손잡이면 R, 왼손잡이면 L로 치환

    numbers.forEach(num => {
        if(num % 3 === 1){
            answer += 'L';
            leftHand = num;
        }else if(num % 3 === 0 && num !== 0){
            answer += 'R';
            rightHand = num;
        }else{
            var getDistanceResult = distance(num, leftHand, rightHand, hand, keypad);
            answer += distance(num, leftHand, rightHand, hand, keypad);
            getDistanceResult ==='R'? rightHand = num : leftHand = num;
        }
    });
    console.log(typeof answer)
    return answer;
}

function distance(num,left,right,hand,keypad){
    var x = 0,
        y = 1;
    
    var leftDistance = Math.abs(keypad[left][x] - keypad[num][x]) + Math.abs(keypad[left][y] - keypad[num][y]);
    var rightDistance = Math.abs(keypad[right][x] - keypad[num][x]) + Math.abs(keypad[right][y] - keypad[num][y]);

    if(leftDistance === rightDistance){
        return hand;
    }else{
        return leftDistance > rightDistance ? 'R' : 'L';
    }
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right");
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left");
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right");