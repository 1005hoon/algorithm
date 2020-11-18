function swap(arr, index1, index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function SelectionSort(arr){
    const length = arr.length;
    let min;

    for(let outer=0; outer<length-1; outer++){
        min = outer;
        for(let inner=outer+1; inner < length; inner++){
            if(arr[inner] < arr[min]){
                min = inner;
            }
        }
        swap(arr, outer, min);
    }
    return arr;
}

const array = [ 4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ];
console.log(SelectionSort(array));