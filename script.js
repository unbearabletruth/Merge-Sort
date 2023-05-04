function mergeSort(array){
    if (array.length < 2) return array;
    const half = Math.ceil(array.length / 2);
    const left = array.slice(0, half); 
    const right = array.slice(half);
    const mergeLeft = mergeSort(left);
    const mergeRight = mergeSort(right);
    return merge(mergeLeft, mergeRight)  
}

function merge(left, right){
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return sortedArray
                    .concat(left)
                    .concat(right);
}

console.log(mergeSort([3,9,22,1,7,44,2,11]));
console.log(mergeSort([9,2,4,7,3]));
