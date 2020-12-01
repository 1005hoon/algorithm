function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let over = [];
    let cross = [];
    let end = false;가
    let crossWeight  = 0;
    
    while(!end){
        answer++;
        //cross 배열에서 start 값 모두 더해준 후 다 건넌 트럭이 있는지 확인.
        if(cross.length !== 0){
            cross.forEach(element => {
                element.start++;
            })
            
            if(cross[0].start > bridge_length){
                over.push(cross[0].weight);
                crossWeight -= cross[0].weight;
                cross.shift();
            }
        }
        //cross 배열 무게 체크 후 wait 배열에서 트럭 꺼내기
        if(crossWeight + truck_weights[0] <= weight && truck_weights.length !== 0){
            cross.push({
                weight: truck_weights[0],
                start: 1
            })
            crossWeight += truck_weights[0];
            truck_weights.shift();
        }
        
        //cross 배열과 truck_weigths 배열이 모두 비어있으면 end=true
        if(cross.length === 0 && truck_weights.length === 0){
            end = true;
        }
    }
    
    return answer;
}