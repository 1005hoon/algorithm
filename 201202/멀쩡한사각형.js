function solution(w,h){
    var answer = 1;
    var gcd = 1;         

    var min = Math.min(w,h);
    for(var i=min; i>0; i--){
        if((w%i===0) && (h%i===0)){
            gcd = i;
            break;
        }
    }
    
    answer = w*h - (w+h-gcd);
    return answer;
}