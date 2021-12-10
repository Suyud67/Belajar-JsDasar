// this

// cara 1 = function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this itu mengembalikan nilai yang ada di global;

// cara 2 = literal

// var obj = {a : 10, nama : "suyud"};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }

// obj.halo();
// // menegmbalikan nilai function sendiri atau local;

// cara 3 = constract
// sama sperti literal

function Halo(a = 10) {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat;