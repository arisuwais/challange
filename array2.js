function sum() {
    var kotak = [];
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    for (let i = 0; i < arguments.length; i++) {

        kotak.push(arr[arguments[i] - 1]);
    }

    console.log(kotak.toString());



}



sum(5, 10, 9);