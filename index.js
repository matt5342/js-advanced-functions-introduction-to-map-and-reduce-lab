// Your code here
function mapToNegativize(array) {
    let newarray = [];
    for (var i = 0; i < array.length; i++) {
        newarray.push(array[i] * -1);
    }
    return newarray;
}
function mapToNoChange(array) {
    let newarray = [];
    for (var i = 0; i < array.length; i++) {
        newarray.push(array[i]);
    }
    return newarray;
}
function mapToDouble(array) {
    let newarray = [];
    for (var i = 0; i < array.length; i++) {
        newarray.push(array[i] * 2);
    }
    return newarray;
}
function mapToSquare(array) {
    let newarray = [];
    for (var i = 0; i < array.length; i++) {
        newarray.push(array[i] * array[i]);
    }
    return newarray;
}
function reduceToTotal(array, starting=0){
    let total = starting

    for (var i = 0; i < array.length; i++){
        total += array[i];
    }
    return total
}
function reduceToAllTrue(array){
    for (var i = 0; i < array.length; i++){
        if (!array[i]){
            return false;
        }

    }
    return true
}
function reduceToAnyTrue(array){
    for (var i = 0; i < array.length; i++){
        if (array[i]){
            return true;
        }

    }
    return false
}
