function solution(numbers, target) {
	var answer = 0;

	dfs(0, 0);

	function dfs(index, sum){
		if(index === numbers.length) {
			if(sum === target) {
				answer++;
			}
			return;
		}
		dfs(index + 1, sum + numbers[index]);// dfs(1,1) -> dfs(2,2)->dfs(3,3)...dfs(5,5)에서 return을 만나 해당함수를 stack에서 제거하고
		dfs(index + 1, sum - numbers[index]);// dfs(4,4)에서 dfs(4,3) 실행
	}
	return answer;
}

solution([1,1,1,1,1],3);