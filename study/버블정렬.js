function swap(arr, index1, index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function BubbleSort(arr){
    const length = arr.length;

    for(let outer=length; outer>1; outer--){
        for(let inner=0; inner < outer; inner++){
            if(arr[inner] > arr[inner+1]){
                swap(arr, inner, inner+1);
            }
        }
    }
    return arr;
}

const array = [ 4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ];
console.log(BubbleSort(array));