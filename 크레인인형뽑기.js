function solution(board, moves) {
    let answer = 0;
    const basket = [];

    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[j][moves[i]-1] !== 0){
                basket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                if(basket.length >=2){
                    if(basket[basket.length-1] === basket[basket.length-2]){
                        basket.splice(basket.length-2, 2)
                        answer += 2;
                    }
                }
                break;
            }
        }
    }
    return answer;
}