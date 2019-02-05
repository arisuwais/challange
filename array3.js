// objek = key : value
function test(n) {
    var arr = {
        satu: 'A',
        dua: 'B',
        tiga: 'C',
        empat: 'D',
        lima: 'E'
    }

    // mengkonversi nilai objek kedalam array
    // console.log(Object.values(arr));


    kotak = [];

    // melooping objek
    for (key in arr) {
        kotak += (arr[key]);


    }


    return kotak;
}



console.log(test(11));