function sum(n) {
    var z = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            z.push(`${i} genap`);
        } else if (i % 2 !== 0) {
            z.push(i + ' ganjil');
        }

    }

    return z;


}


console.log(sum(3));