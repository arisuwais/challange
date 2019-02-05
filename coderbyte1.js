function FirstReverse(str) {

    // code goes here
    console.log(str);
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        result += str[i];
    }
    return result;

}

// keep this function call here 
console.log(FirstReverse('difa'));