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

    let hasil = '';
    for (const key in roman) {
        while (n >= roman[key]) { //13<= 10 // 3<=1......
            n -= roman[key]; //13-10=3 // 3-1=2//2-1=1        
            hasil += key // 10 dimasukan ke hasil
            console.log(key)
        }
    }

    return hasil;
}

// console.log('input |expected  | result');
// console.log('4     | IV       | ', romawi(4));
// console.log('9     | IX       | ', romawi(9));
console.log('13    | XIII     | ', romawi(13));
// console.log('1453  | MCDLIII  | ', romawi(1453));
// console.log('1646  | MDCXLVI  | ', romawi(1646));