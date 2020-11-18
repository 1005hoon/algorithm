function InsertionSort(arr){
    const length = arr.length;
    let temp, inner;

    for(let outer=1; outer<length; outer++){
        temp = arr[outer];
        inner = outer;

        while(inner>0 && arr[inner-1] >= temp){
            arr[inner] = arr[inner-1];
            inner--;
        }

        arr[inner] = temp;
    }

    return arr;
}

const array = [ 4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ];
console.log(InsertionSort(array));