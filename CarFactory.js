class Tyre {
    constructor(merk, qty) {
        this.merk = merk;
        this.qty = qty;
    }
}

class Car {
    constructor(seat, door, tyre, guarantee, year, type) {
        this.seat = seat;
        this.door = door;
        this.tyre = tyre;
        this.guarantee = guarantee;
        this.year = year;
        this.type = type;
    }

    jalan() {
        console.log("jalan");
    }

    expireGuarantee(currentYear) {
        if (currentYear - this.guarantee <= this.year) {
            console.log("garansi masih berlaku");
        } else {
            console.log("garansi habis");
        }
    }
}

class Avanza extends Car {
    constructor(year) {
        super(7, 5, new Tyre("bridgestone", 4), 3, year, 'Avanza');
    }
}

class Agya extends Car {
    constructor(year) {
        super(5, 5, new Tyre("dunlop", 4), 1, year, 'Agya');
    }
}

class CarFactory {
    constructor() {
        this.avanzaList = [];
        this.agyaList = [];
    }

    avanzaProduced(year) {
        let totalAvanza = CarFactory.getRandomInt();
        for (let i = 0; i < totalAvanza; i++) {
            this.avanzaList.push(new Avanza(year));
        }
    }

    agyaProduced(year) {
        let totalAgya = CarFactory.getRandomInt();
        for (let i = 0; i < totalAgya; i++) {
            this.agyaList.push(new Agya(year));
        }
    }

    productionResult() {
        console.log(`avanza telah diproduksi sebanyak ${this.avanzaList.length}, yakni :`);
        for (let i = 0; i < this.avanzaList.length; i++) {
            console.log('avanza ', this.avanzaList[i]);
        }
        console.log(`avanza telah diproduksi sebanyak ${this.agyaList.length}, yakni :`);
        for (let i = 0; i < this.agyaList.length; i++) {
            console.log('agya ', this.agyaList[i]);
        }
    }

    guaranteeSimulation(year) {
        console.log(`hasil simulasi untuk avanza, yakni :`);
        for (let i = 0; i < this.avanzaList.length; i++) {
            console.log(this.avanzaList[i]);
            this.avanzaList[i].expireGuarantee(year);
        }
        console.log(`hasil simulasi untuk agya, yakni :`);
        for (let i = 0; i < this.agyaList.length; i++) {
            console.log(this.agyaList[i]);
            this.agyaList[i].expireGuarantee(year);
        }
    }

    static getRandomInt() {
        let min = 1;
        let max = 5;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

let toyota = new CarFactory();
toyota.avanzaProduced(2012);
toyota.agyaProduced(2013);
toyota.agyaProduced(2015);
toyota.productionResult();
toyota.guaranteeSimulation(2015);