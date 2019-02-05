function indexPrime(n) {
    let penampung = []
    let angka = 2
    while (penampung.length < n) {
        if (cekPrimaApaNgga(angka)) {
            penampung.push(angka)
        }
        angka++
    }

    function cekPrimaApaNgga(angka) {
        if (angka < 2) {
            return false
        } else {
            for (let i = 2; i < angka; i++) {
                if (angka % i == 0) {
                    return false;
                }
            }
            return true
        }
    }

    return penampung[n - 1]
}


console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));