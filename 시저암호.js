function solution(s, n) {
    var answer = '';
    var sArr = s.split('')
                 .map(function(arg){
                        if(arg === ' ') return arg;
                         
                         if(arg.charCodeAt() >= 97 && arg.charCodeAt() + n > 122){//a~z사이의 문자가 z를 넘을때
                            return arg.charCodeAt() + n - 26;
                         }else if(arg.charCodeAt() >= 65 &&  arg.charCodeAt() + n > 90 && arg.charCodeAt() < 97){//A~Z 사이의 문자가 Z를 넘을때
                            return arg.charCodeAt() + n - 26;
                         }else{
                            return arg.charCodeAt(0)+n;
                         }
                        
                 })
                 .map(function(arg2){
                       return String.fromCharCode(arg2);
                })
                
    sArr.forEach(arg3 => {
         answer += arg3.toString()
    });
    answer = answer.replace(/\u0000/g,' '); //\u0000을 공백으로 대치   
   
    return answer;
}

solution("AB", 1);
solution("z", 1);
solution("a B z", 4);
