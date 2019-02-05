function tampil(n) {

    if (n === 100) return; //untuk menghentikan loopingan

    console.log(n);
    return tampil(n + 1);
}


tampil(10);


// function faktorial(n) {
//     if (n === 0) return 1;
//     return n * faktorial(n - 1);
// }


// faktorial(5);
var factor = function (number) {
    var result = 1;
    var count;
    for (count = number; count > 1; count--) {
        result *= count;
    }
    return result;
};
console.log(factor(5));
// 720