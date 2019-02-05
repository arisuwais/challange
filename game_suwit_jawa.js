// menagkap pilihan player
var p = ('gajah', 'semut', 'orang');


// menagkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
    p = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    p = 'semut'
} else {
    p = 'orang'

}

var hasil = '';
if (p == comp) {
    hasil = 'SERI';
} else if (p == 'gajah') {
    // if(comp= 'orang'){
    //     hasil = 'MENANG';
    // } else {
    //     hasil = 'KALAH';
    // }
    hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
} else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
} else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'memasukan pilihan yang salah';
}


// tampilkan hasilnya
console.log('kamu memilih : ' + p + 'dan komputer memilih:' + comp + 'hasilnya' + hasil)