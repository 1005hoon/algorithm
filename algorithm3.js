function solution(board, moves) {
    var result = 0;
    var boardCnt = board.length;
    var popArr = [];
    moves.forEach(move => {
        for(var i = 0; i < boardCnt; i++){
            var dollNum = board[i][move-1];
            if (dollNum !== 0){
                if (popArr.length !== 0 && (popArr[popArr.length-1] === dollNum)){
                    popArr.pop();
                    result += 2;
                }else{
                    popArr.push(dollNum);
                }
                board[i][move-1] = 0;
                break;
            }
        }
    })
    return result;
}