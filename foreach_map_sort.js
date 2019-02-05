var angka = [1, 4, 3, 5, 2, 7, 6, 8];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
// angka.forEach(function (e) {
//     console.log(e);
// });


// var nama = ['budi', 'toto', 'joko', 'ali'];
// nama.forEach(function (e, i) {
//     console.log((i + 1) + ' ' + e);
// });


var angka2 = angka.map(function (e) {
    return e * 2;
});
console.log(angka2.join());
angka2.sort();
console.log(angka2.join());
angka2.sort(function (a, b) {
    return a - b;
});
console.log(angka2.join());

