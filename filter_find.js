var angka = [1, 4, 3, 5, 2, 7, 6, 8];
var angka2 = angka.
filter(function (x) {
    return x > 5;
});
console.log(angka2);

var angka2 = angka.find(function (x) {
    return x === 5;
});
console.log(angka2);