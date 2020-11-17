const quicksort = function(arr, left, right){
    if(left < right){
        const i = position(arr, left, right);
        quicksort(arr, left, i-1);
        quicksort(arr, i+1, right);
    }
    return arr;
}

const position = function(arr, left, right){
    let i = left;
    let j = right;
    const pivot = arr[left];

    //pivot을 중심으로 왼쪽을 pivot 보다 작은 요소들 오른쪽은 pivot 보다 큰 요소들로 이동
    while(i < j){
        while(arr[j] > pivot) j--;
        while(i < j && arr[i] <= pivot) i++;

        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    arr[left] = arr[j];
    arr[j] = pivot;

    return j;
}

const arr = [ 4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ];

console.log(quicksort(arr, 0, arr.length-1)); // [1,1,2,2,3,4,5,5,8,11]