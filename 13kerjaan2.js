const readline = require('readline');
const fs = require('fs');

let data = JSON.parse(fs.readFileSync("kerjaan.json", "utf8"));
let input = process.argv
// if (process.argv[0][1] = true && process.argv[2] == false) {
//     console.log(
//         ">>> JS TODO <<<" +
//         "\n node todo.js <command>" +
//         "\n node todo.js list" +
//         "\n node todo.js task <task_id>" +
//         "\n node todo.js add <task_content>" +
//         "\n node todo.js delete <task_id>" +
//         "\n node todo.js complete <task_id>" +
//         "\n node todo.js uncomplete <task_id>" +
//         "\n node todo.js list: outstanding asc|desc" +
//         "\n node todo.js list: completed asc|desc" +
//         "\n node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>" +
//         "\n node todo.js filter: <tag_name>"
//     );
//     process.exit(0);
// }
// else {
switch (process.argv[2]) {
    case 'add':
        let output = '';
        for (let i = 3; i < input.length; i++) {
            output += input[i] + ' ';
        }
        data.push({
            "status": "[ ]",
            "task_content": output
        })
        fs.writeFileSync("kerjaan.json", JSON.stringify(data))
        console.log(output + "telah di tambahkan");
        process.exit(0);

    case 'complete':
        for (let f = 0; f < data.length; f++) {
            if (data[f].task_id == input[3]) {
                data[f].status = "[X]";
                console.log(data[f].task_content + ' ' + "telah selesai");
            }
        }
        fs.writeFileSync("kerjaan.json", JSON.stringify(data))
        process.exit(0)

    case 'uncomplete':
        for (let f = 0; f < data.length; f++) {
            if (data[f].task_id == input[3]) {
                data[f].status = "[ ]";
                console.log(data[f].task_content + ' ' + "status selesai dibatalkan");
            }
        }
        fs.writeFileSync("kerjaan.json", JSON.stringify(data))
        process.exit(0)

    case 'delete':
        let index = parseInt(input[3]) - 1
        let item = data[index]
        data.splice(index, 1)
        console.log(item.task_content + ' ' + "telah dihapus dari daftar");
        fs.writeFileSync("kerjaan.json", JSON.stringify(data))
        process.exit(0);

    case 'list':
        console.log("Daftar Pekerjaan:");
        for (let j = 0; j < data.length; j++) {
            console.log(j + 1 + '.' +
                data[j].status + ' ' + data[j].task_content);
        }
        process.exit(0);

        // case 'list:outstanding'


    case 'help':
        console.log(
            ">>> JS TODO <<<" +
            "\n node todo.js <command>" +
            "\n node todo.js list" +
            "\n node todo.js task <task_id>" +
            "\n node todo.js add <task_content>" +
            "\n node todo.js delete <task_id>" +
            "\n node todo.js complete <task_id>" +
            "\n node todo.js uncomplete <task_id>" +
            "\n node todo.js list: outstanding asc|desc" +
            "\n node todo.js list: completed asc|desc" +
            "\n node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>" +
            "\n node todo.js filter: <tag_name>"
        );
        process.exit(0);
};

// };


name(process.argv[2])

function name() {
    let proses = process.argv[2]
    let proses2 = proses.slice(0, 7)
    if (proses2 == 'filter:') {
        let hasil = data.filter(item => {
            return item.tag.includes(proses.slice(7))
        })


    };
    console.log(hasil);
};

// else if (isFilter(process.argv[2])) {
//     let wadahArgv = process.argv[2];
//     let tandaTag = wadahArgv.slice(7);
//     data.map((item, index) => {
//         //console.log(item.tags.includes(tandaTag));
//         // console.log(item)
//         // console.log(index);
//         if (item.tags.includes(tandaTag)) {
//             console.log(`${index + 1}. ${item.ceklis ? "[ ]" : "[x]"} ${item.task_content}`);
//         }

//     })
// }

// function isFilter() {
//     let wadahArgv = process.argv[2];
//     let sliceArgv = wadahArgv.slice(0, 7);
//     let tandaTag = wadahArgv.slice(7)
//     return sliceArgv === "filter:" ? true : false
// }