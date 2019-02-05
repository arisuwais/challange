// function sum(n) {
//     var hasil = 0;
//     for (var i = 0; i < n.length; i++) {
//         hasil += arguments[i];
//     };
//     console.log(hasil);

// };


// sum(1, 2, 7);


function genap(n) {



    z = [];
    for (i = 0; i <= n; i++) {
        if (i % !2 == 0) {
            z.push(i);
        };

    };
    return z;

};


console.log(genap(20));