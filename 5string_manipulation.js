function stringManipulation(word) {
    var res = word.slice(1);
    var ros = word.charAt(0);
    if (ros == 'a' || ros == 'i' || ros == 'u' || ros == 'e' || ros == 'o') {
        console.log(word);
    } else {
        console.log(`${res+ros}nyo`);
    }
}

stringManipulation('ayam');
stringManipulation('bebek');