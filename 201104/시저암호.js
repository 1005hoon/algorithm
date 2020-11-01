function solution(s, n) {
    //아스키코드 배열로 변환
    const ascii = s.split('').map(element => element.charCodeAt(0));
    const pushAscii = [];

    ascii.forEach(element => {
        //z, Z 보다 큰 경우 -26
        if((element + n > 122) || (element <=90 && element+n>90)){
            pushAscii.push(element+n-26);
        }
        //공백인 경우
        else if(element === 32){
            pushAscii.push(32);
        }
        //밀어주기
        else{
            pushAscii.push(element+n);
        }
    })

    return pushAscii.map(element => String.fromCharCode(element)).join('').replace(/$/gi,"");
}