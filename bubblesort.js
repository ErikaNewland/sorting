function bubbleSort(array) {
    for(var m=array.length-1; m>0; m--){    
        var didSwap=false;
        for (var i=1; i<=m; i++){
            if(array[i-1]>array[i]) {
                didSwap=true;
            }
            var miniArray=swap(array[i-1], array[i]);
            array[i-1]=miniArray[0];
            array[i]=miniArray[1];
        }
        if(!didSwap){
            break;
        }
    }
    return array;
}



function swap(element1, element2){
    if(element1<element2) {
        return [element1, element2];
    } else {
        return [element2, element1];
    }
}