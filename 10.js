const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimat disini> '
});
rl.prompt();
rl.on('line', (kata) => {
  console.log(`hasil konversi'${sentencesManipulation(kata).trim()}'`);
  rl.prompt();
  rl.on('line', () => {
    console.log('Good Bye!');
    process.exit(0);
  });
});

function stringManipulation(word) {
  var res = word.slice(1);
  var ros = word.charAt(0);
  if (ros == 'a' || ros == 'i' || ros == 'u' || ros == 'e' || ros == 'o') {
    return word;
  } else {
    return `${res+ros}nyo`;
  }
}

function sentencesManipulation(kalimat) {
  var pisah = kalimat.split(' ');
  var hasil = []
  for (let j = 0; j < pisah.length; j++) {
    hasil.push(stringManipulation(pisah[j]));
  }
  return hasil.join(" ");
}