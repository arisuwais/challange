var arr = ['telur', 'ayam', 'bebek'];

arr.push('roti', 'nasi');
console.log(arr.join());
arr.pop();
console.log(arr.join());
arr.unshift('susu');
console.log(arr.join());
arr.shift('susu');
console.log(arr.join());


// spilce(index awal dihapus/ditambah, mau dihapus berapa, elemen yg baru)
arr.splice(2, 0, 'bayem', 'tahu');
arr.splice(2, 4, 'bebek', 'tempe', 'daging');
console.log(arr.join());

// slice(index awal, index akhir)=menghasilkan array baru
var arr2 = arr.slice(1, 3);
console.log(arr2.join());


console.log(arr2.concat(arr));