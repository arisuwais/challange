// define the class
var Kitten = function () {
    this.name = 'Garfield';
    this.color = 'brown';
    this.gender = 'male';
};

Kitten.prototype.setName = function (name) {
    this.name = name;
    return this;
};

Kitten.prototype.setColor = function (color) {
    this.color = color;
    return this;
};

Kitten.prototype.setGender = function (gender) {
    this.gender = gender;
    return this;
};

Kitten.prototype.save = function () {
    console.log(
        'saving ' + this.name + ', the ' +
        this.color + ' ' + this.gender + ' kitten...'
    );

    // save to database here...
    return this;
};



//metode chaining;
new Kitten()
    .setName('Bob')
    .setColor('black')
    .setGender('male')
    .save();


// //without chaning; bedanya tidak pakai return this;
// var bob = new Kitten();

// bob.setName('Bob');
// bob.setColor('black');
// bob.setGender('male');

// bob.save();