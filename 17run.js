const MesinHitung = require('./17file.js');
let mh = new MesinHitung();
let Pi = Math.PI;

mh.add(10).substract(5).result(); //1+10-5=6
mh.add(3).multiply(4).divide(6).result(); //current result is 2 then mutate is 6+3*4/6 =6
mh.x = 7; //set jari-jari 7
console.log(`nilai sekarang : ${mh.x}`);
mh.multiply(2).multiply(Pi).result(); //keliling lingkaran dengan jari-jari 7 => 2 x Pi x r = 44
mh.x = 7; //set jari-jari 7
mh.square().multiply(Pi).result(); //luas lingkaran dengan jari-jari 7 => Pi x r pangkat 2 = 154
mh.x = 4;
mh.exponent(3).result(); //4 pangkat 3 = 64
mh.squareRoot().result(); //akar pangkat 2 dari 64 = 8





// cara mengintall babel 
// npm init (membuat package.json => project node.js)
//.babelrc diisi({"presets": ["es2015"]})
// npm install -D babel-cli
// npm install --save-dev babel-preset-es2015
// change "test":.... => "start": "babel-node 17run.js"
// npm start (menjalankan)