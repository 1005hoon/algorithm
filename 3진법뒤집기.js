function solution(n) {
	var answer = 0;
	var nArr = n.toString(3).split(""); //n을 3진수로 만들고 각 자리수를 배열의 원소로 따로 저장
	var nArrReverse = nArr.reverse().join("");//배열의 원소를 뒤집어서 sting으로 저장
	answer = parseInt(nArrReverse,3);// 3진수 -> 10진수
	return answer;
}