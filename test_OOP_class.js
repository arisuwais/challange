// class carFactory {
//     constructor() {

//     }
// }

class car {
    constructor(ban, pintu, kursi) {
        this.ban = ban;
        this.pintu = pintu;
        this.kursi = kursi;
    }
    prduksiMobil() {
        console.log(this.ban + ' berputar-putar');
        console.log(this.pintu + ' buka-tutup');
    }

}


class panther extends car {
    prduksiMobil() {
        super.prduksiMobil();
        console.log(this.ban + ' bocor');

    }

}
let xxx = new panther();
xxx.prduksiMobil();






class formatDate extends Date {
    constructor(dateStr) {
        super(dateStr);
    }

    getFormattedDate() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}

console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());
// expected output: "19-Aug-1975"