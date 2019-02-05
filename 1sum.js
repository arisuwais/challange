function sum() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    };
    console.log(hasil);

};


sum(1, 2, 7);