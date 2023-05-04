function mergeSort(array){
    if (array.length < 2) return array[0];
    const half = Math.ceil(array.length / 2);
    const left = array.slice(0, half); 
    const right = array.slice(half);
    mergeSort(left);
    mergeSort(right);
    //if (Number(left) < Number(right)) return left.concat(right);
    //else return right.concat(left);
    for (let i = 0; i < array.length; i++) {
        if (left[i] > right[i]) return [right[i]].concat(left[i]);
        else if (left[i] < right[i]) return [left[i]].concat(right[i]); 
    }
}

console.log(mergeSort([3,9,22,1,7,44,2,11]))


