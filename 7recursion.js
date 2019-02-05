function weirdMultiply(angka) {
    if (angka.toString().length > 1) { // if untuk stopper
        let array = angka.toString().split('');
        let hasil = 1;
        for (i = 0; i < array.length; i++) {
            hasil *= parseInt(array[i]);
        }
        return weirdMultiply(hasil)
    } else {
        return angka // stopper
    }
}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))