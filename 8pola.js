let pola = str => {
    let strArray = str.split(" ")



    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (Number(strArray[0].replace("#", i)) * Number(strArray[2]) === Number(strArray[4].replace("#", j))) {
                return [i, j]
            }
        }
    }
}

console.log(pola("42#3 * 188 = 80#204"))
// result [8,5]