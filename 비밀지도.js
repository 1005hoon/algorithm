function solution(n, arr1, arr2) {
    const tempArray = Array.from(Array(n), () => new Array(n));

    const binary1 = setArray(arr1.map(element => element.toString(2).split('')), n);
    const binary2 = setArray(arr2.map(element => element.toString(2).split('')), n);

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            tempArray[i][j] = binary1[i][j] | binary2[i][j] ? '#' : ' ';
        }
    }

    return tempArray.map(element => element.toString().replace(/,/g,''));
}

function setArray(array, n){
    array.forEach(element=>{
        while(element.length <n){
            element.unshift('0');
        }
    })
    return array;
}