// var heroes = [
// 	{name: “Batman”, franchise: “DC”},
// 	{name: “Ironman”, franchise: “Marvel”},
// 	{name: “Thor”, franchise: “Marvel”},
// 	{name: “Superman”, franchise: “DC”}
// ];

// var marvelHeroes =  heroes.filter(function(hero) {
// 	return hero.franchise == “Marvel”;
// });

// [ {name: “Ironman”, franchise: “Marvel”}, {name: “Thor”, franchise: “Marvel”} ]


// var arr = [1, 22, 3, 4, 5];
// var strArr = arr.map(function (e) {
//     return e.toString()
// });
// console.log(strArr); //["1", "2", "3", "4", "5"] 

var words = [
    ["exuberant"],
    ["spray", "limit", "elite"],
    ["destruction", "present"]
];


for (let s = 0; s < words.length; s++) {
    let item = words[s]
    // console.log(item);

    var longWords = item.filter(function (word) {
        return word == 'limit';
    });

    console.log(longWords);
}










// name(process.argv[2])

// function name() {

// }
// var kata = process.argv[2]
// var coba = kata.slice(0, 7)
// console.log(coba);
// console.log(kata.slice(7));


// if (coba == 'filter:') {
//     var kal = ["makan", "nasi"]
//     //var hal = kal.slice(0, 1)
//     //console.log(hal);
//     console.log(kal);




//     if (kata.slice(7) == kal.splice(1) || kata.slice(7) == kal.splice(0)) {
//         console.log('berhasil');
//     }
// }