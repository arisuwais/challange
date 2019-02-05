const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '(cth: nasi, daging, susu, hamburger, softdrink) \n masukan nama makanan / minuman: '

});
rl.prompt();

rl.on('line', (item) => {
    switch (item) {
        case 'nasi':
        case 'daging':
        case 'susu':
            console.log('nama/minuman SEHAT \n');
            break;
        case 'hamburger':
        case 'softdrink':
            console.log('nama/minuman tidak SEHAT \n');
            break;
        default:
            console.log('anda memasukan nama makanan / minuman yang salah \n');
    }
    //rl.prompt();
    rl.close();
})

// .on('close', () => {
//     console.log('\n Terima Kasih!');
//     process.exit(0);
// })










// var item = prompt('masukan nama makanan /minuman :  \n  (cth: nasi, daging, susu,hamburger,softdrink)');

// switch (item) {
//     case 'nasi':
//         console.log('nama/minuman SEHAT');
//         break;
//     case 'daging':
//         console.log('nama/minuman SEHAT');
//         break;
//     case 'susu':
//         console.log('nama/minuman SEHAT');
//         break;
//     case 'hamburger':
//         console.log('nama/minuman tidak SEHAT');
//         break;
//     case 'softdrink':
//         console.log('nama/minuman tidak SEHAT');
//         break;
//     default:
//         console.log('anda memasukan nama makanan / minuman yang salah');

// };