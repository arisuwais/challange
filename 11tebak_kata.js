const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = JSON.parse(fs.readFileSync("data.json"))
let hitung = 0;

console.log("Selamat Datang di permainan Tebak kata, silahkan isi dengan jawaban yang benar ya!");


console.log("\n Pertanyaan:" + data[hitung].definition);

rl.setPrompt(' Tebakan : ');
rl.prompt();

rl.on('line', (line) => {
    if (hitung == data.length - 1) {
        console.log('Selamat Anda Benar!');
        console.log('\n Hore Anda Menang!');
        rl.close();
    } else {
        if (data[hitung].term.toLowerCase() == line.trim().toLowerCase()) {
            console.log('Selamat Anda Benar!');
            hitung++
            console.log("\n Pertanyaan:" + data[hitung].definition);
        } else {
            console.log('Wkwkwkwk, Anda kurang beruntung!');
        }
        rl.prompt();
    }
}).on('close', () => {
    console.log("\n Terima kasih Telah bermain");
}) U