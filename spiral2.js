let size = 5;
let count = 0;
let matriks = [];
for (let i = 0; i < size; i++) {
    matriks.push([]);
    for (let j = 0; j < size; j++) {
        console.log(`[${i}][${j}] berisi ${count}`);
        matriks[i].push(count);
        count++;
    }
}

console.log(matriks);

// variable x dan y, x = horizontal, y = vertikal
let x = 0;
let y = 0;
let horizontalLimit =

    // ke kanan
    while (x < size) {
        console.log(matriks[y][x]);
        x++;
    }
x--;
y++;

// ke bawah
while (y < size) {
    console.log(matriks[y][x]);
    y++;
}
y--
x--

// ke kiri
while (x >= 0) {
    console.log(matriks[y][x]);
    x--;
}
x++;
y--;

// ke atas
while (y > 0) {
    console.log(matriks[y][x]);
    y--;
}