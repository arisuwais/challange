function jumlah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;

}
console.log(jumlah(2, 2, 2));




function data(a, b) {
    return (a * a * a) + (b * b * b);
}

console.log(data(2, 2));