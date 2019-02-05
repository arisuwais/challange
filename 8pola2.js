function pola(param) {
    // let coba = parseInt


    let angka = param.split('=');
    // console.log(angka);
    let angka1 = angka[0].split('*')[0].trim()
    //console.log(angka1);
    let angka2 = angka[0].split('*')[1].trim()
    //console.log(angka1);
    let angka3 = angka[1].trim()

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (angka1.replace('#', i) * angka2 == angka3.replace('#', j)) {
                return [i, j];
            }
        }
    }
}

console.log(pola("42#3*188= 80#204"));
console.log(pola("8#61*895= 78410#5"));