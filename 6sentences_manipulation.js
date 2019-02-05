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

    console.log(hasil.join(" "));
}

sentencesManipulation('ibu pergi ke pasar bersama aku');