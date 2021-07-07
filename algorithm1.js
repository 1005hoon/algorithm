var resSupo1 = 0;
var resSupo2 = 0;
var resSupo3 = 0;
var resArr = [];

function solution(answers) {
    // var answer = [];
    return chkAnswer(answers);
}

//정답갯수 구하기
function chkAnswer(answers){
    var supo1 = [1,2,3,4,5];
    var supo2 = [2,1,2,3,2,4,2,5];
    var supo3 = [3,3,1,1,2,2,4,4,5,5];
    var CntAnswer = answers.length;
    for(var i = 0; i < CntAnswer; i++){
        if(supo1[i % supo1.length] === answers[i]){
            resSupo1++;
        }
        if(supo2[i % supo2.length] === answers[i]){
            resSupo2++;
        }
        if(supo3[i % supo3.length] === answers[i]){
            resSupo3++;
        }
    }
    
   return getMax(resSupo1,resSupo2,resSupo3);

};

//최대값 구해서 수포자 번호 배열에 담기
function getMax(arg1,arg2,arg3){
    console.log(arg1,arg2,arg3);
   var maxCnt = Math.max(arg1,arg2,arg3);
    console.log(maxCnt);
   // resArr.push(maxCnt);
   if(maxCnt === arg1){
    resArr.push(1);
   }
    console.log(resArr);
   if(maxCnt === arg2){
    resArr.push(2);
   }
     console.log(resArr);
   if(maxCnt === arg3){
    resArr.push(3);
   }
     console.log(resArr);
   
   return resArr;
}