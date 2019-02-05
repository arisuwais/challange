const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = JSON.parse(fs.readFileSync("data.json"))
let hitung = 0;
let kesalahan = 0;

if (process.argv[1] = 'lat.js' && process.argv[2] !== 'data.json') {
    console.log("Tolong sertakan nama file sebagai inputan soalnya");
    console.log("Misalnya 'node solution.js data.json'");
    rl.close();

    if (process.argv[2] !== 'data.json') {
        return true
    }
}

console.log("Selamat Datang di permainan Tebak-Tebakan, kamu akan diberikan pertanyaan dari file ini \'data,json.\'" +
    "\nUntuk bermain, jawablah dengan jawaban yang sesuai," +
    "\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan ditanyakan lagi");

console.log("\n Pertanyaan:" + data[hitung].definition);

rl.setPrompt(' Jawaban : ');
rl.prompt();

rl.on('line', (line) => {
    if (hitung == data.length - 1) {
        if (data[hitung].term.toLowerCase() == line.trim().toLowerCase()) {
            console.log('Anda Beruntung!');
            console.log('\n Anda Berhasil!');
            rl.close();
        } else {
            kesalahan++
            console.log('anda kurang beruntung! anda telah salah ' + kesalahan + ' ' + 'kali, silahkan coba lagi,');
            rl.prompt();
        }
    } else {
        if (line.trim().toLowerCase() == 'skip') {
            kesalahan = 0;
            let kembali = data.splice(hitung, 1);
            data.push(kembali[0]);
            console.log("\n Pertanyaan:" + data[hitung].definition);

        } else if (data[hitung].term.toLowerCase() == line.trim().toLowerCase()) {
            console.log('Anda Beruntung!');
            hitung++;
            kesalahan = 0;
            console.log("\n Pertanyaan:" + data[hitung].definition);
        } else {
            kesalahan++
            console.log('anda kurang beruntung! anda telah salah ' + kesalahan + ' ' + 'kali, silahkan coba lagi,');
        }
        rl.prompt();
    }
}).on('close', () => {
    console.log("\n Terima kasih Telah bermain");
})