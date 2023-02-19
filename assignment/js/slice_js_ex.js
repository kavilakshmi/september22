function slice_func(array, start, end){
    return array.slice(start,end+1);
}

array = [1,2,3,45,23,113,443,32,25];
console.log(slice_func(array, 1, 3));
console.log(slice_func(array, 4, 10));
console.log(slice_func(array, 5, 3));
