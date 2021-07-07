function solution(dartResult) {
	var answer = 0;
	const reducer = (accumulator, currentVal) => accumulator + currentVal;
	let dartArr = dartResult.split('');
	for(let i = 0; i < dartArr.length; i++){
		 if(dartArr[i] === '1' && dartArr[i+1] ==='0'){
					dartArr.splice(i, 2, dartArr[i] + dartArr[i+1]);
					i -= 1;
		 }
	}
	
	let copyArr = Array.from(dartArr);
	let lastArr = [];
	copyArr.forEach(function(arg){
	let index = copyArr.indexOf(arg);

			switch (arg){
					case 'S':
							lastArr.push(parseInt(copyArr[index - 1]));
							break;
					case 'D':
							lastArr.push((parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1])));
							break;
					case 'T':
							lastArr.push((parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1]) * parseInt(copyArr[index - 1])));
							break;
					case '#':
							lastArr.push(copyArr[index]);
							break;
					case '*':
							lastArr.push(copyArr[index]);
							break;
			}
	// }
	})
	// console.log(copyArr);
	for(let i = 0; i < lastArr.length; i++){
			if(typeof(lastArr[i]) === 'int'){
					if(lastArr[i + 1] === '*' || lastArr[i + 2] === '*'){
							answer += (lastArr[i] * 2);
					}else if(lastArr[i + 1] === '#'){
							answer += (lastArr[i] * (-1));
					}else{
							answer += lastArr[i];
					}
					
			}
		
	}
	return answer;
}




