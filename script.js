function mergeSort(array){
    if (array.length < 2) return array;
    const half = Math.ceil(array.length / 2);
    const left = array.slice(0, half); 
    const right = array.slice(half);
    const mergeLeft = mergeSort(left);
    const mergeRight = mergeSort(right);
    let sortedArray = [];
    while (mergeLeft.length && mergeRight.length) {
        if (mergeLeft[0] < mergeRight[0]) {
            sortedArray.push(mergeLeft.shift());
        } else {
            sortedArray.push(mergeRight.shift());
        }
    }
    return [...sortedArray, ...mergeLeft, ...mergeRight]
}

console.log(mergeSort([3,9,22,1,7,44,2,11]));
console.log(mergeSort([9,2,4,7,3]));
