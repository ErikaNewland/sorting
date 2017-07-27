function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
    var midpoint = Math.floor(wholeArray.length /2)
    var firstHalf = wholeArray.slice(0, midpoint)
    var secondHalf = wholeArray.slice(midpoint)
  return [firstHalf, secondHalf];
}


function mergeSort(array) {
  if(array.length===1) {
    return array[0];
  } else {
    var splitArray = split(array);
    return merge(mergeSort(splitArray[0]),mergeSort(splitArray[1]))
  }
}


function merge(array1, array2){
    var mergedArray = [];
    
    while (array1.length > 0 && array2.length > 0){
        if (array1[0]> array2[0]){
            mergedArray.push(array2[0])
            array2 = array2.slice(1)
        } else {
            mergedArray.push(array1[0])
            array1 = array1.slice(1)
        }
    }
    console.log("after the while loop: Array1 ", array1)
    console.log("after the while loop: Array 2: ", array2)
    if (array1.length !== 0){
        mergedArray = mergedArray.concat(array1);
    } 
    console.log(array2)
    if (array2.length !== 0){
        mergedArray = mergedArray.concat(array2);
    }
    return mergedArray
}