function spiral(param1) {
    let count = 0;
    let matriks = [];
    let result = [];
    for (let i = 0; i < param1; i++) {
        matriks.push([]);
        for (let j = 0; j < param1; j++) {
            matriks[i].push(count);
            count++;
        }
    }
    //console.log(matriks);
    // variable x dan y, x = horizontal, y = vertikal
    let x = 0;
    let y = 0;
    let batasAtas = param1;
    let batasBawah = 0;

    while (true) {
        // ke kanan
        while (x < batasAtas) {
            result.push(matriks[y][x]);
            x++;
        }
        if (result.length == param1 * param1) {
            break;
        }
        x--;
        y++;
        // ke bawah
        while (y < batasAtas) {
            result.push(matriks[y][x]);
            y++;
        }
        if (result.length == param1 * param1) {
            break;
        }
        y--
        x--
        // ke kiri
        while (x >= batasBawah) {
            result.push(matriks[y][x]);
            x--;
        }
        if (result.length == param1 * param1) {
            break;
        }
        x++;
        y--;
        // ke atas
        while (y > batasBawah) {
            result.push(matriks[y][x]);
            y--;
        }
        x++;
        y++;
        batasAtas--;
        batasBawah++;
        if (result.length == param1 * param1) {
            break;
        }
    }
    console.log(result);
}

spiral(5)
spiral(6)
spiral(7)