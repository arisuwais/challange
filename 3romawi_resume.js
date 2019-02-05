function romawi(n) {

    const roman = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }


    // mengkonversi nilai objek kedalam array
    // console.log(Object.values(arr))

    let hasil = ''; // tempat menampung key

    // melooping objek
    for (const key in roman) {
        while (n >= roman[key]) { // cnth n=13 bila  masih lebih kecil dr 1000 maka false  dan akan terus ke value selanjutnya smp value 10 maka true 
            n -= roman[key]; // (n)13-10= 3 sisa ini dimasukan ke  n while lg dan terus berulang
            hasil += key // value 10 keynya akan dimasukan ke hasil=''  (stlh n =0 akan berhenti)
        }
    }

    return hasil;
}


console.log('input |expected  | result');
console.log('4     | IV       | ', romawi(1500));
console.log('9     | IX       | ', romawi(9));
console.log('13    | XIII     | ', romawi(13));
console.log('1453  | MCDLIII  | ', romawi(1453));
console.log('1646  | MDCXLVI  | ', romawi(1646));