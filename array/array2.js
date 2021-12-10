// var arr = ['suyud', 'iwan', 'udin', 'tono', 'jaya', 'haji'];
// var angka = [1,2,3,4,5,6,7,8,9,10];

// for (var i = 0; i < arr.length; i++) {
//     console.log('nama mahasiswa di kelas A no. ' + (i+1) + ' ' + arr[i])
// }

// 1. pop dan push
// pop (menghapus array paling belakang) & push (menambahkan array paling belakang)
// push bisa lebih dari satu sedangkan pop harus satu persatu.

// arr.pop();
// arr.push('siti')

// 2. unshift dan shift
// unshift(menambahkan array paling depan) dan shift(mengkapus array paing depan)

// arr.unshift('jhonny');
// arr.shift();  

// 3. splice, slice dan join 
// splice (menyisipkan array di tengan) dan slice(mengambil array dan membuat array baru)
// rumus slice arr.slice (awal, akhir) array awal diambil tapi array akhir tidak dimasukan.
// rumus splice arr.splice(indexAwal, array yang mau dihapus, elemen baru(bisa diisi lebih dari 1 elemen));

// arr.splice(3, 0, 'siti', 'ujang', 'doni');

// var arr2 = arr.slice(0,4);
// console.log(arr2.join(" - "));

// 4. forEach dan map
// angka.forEach(function (e) {
//     console.log(e);  
// })

// arr.forEach(function (e, i) {
//     console.log('mahasiswa dengan no.' + (i + 1) + ' adalah : ' + e);
// })

// 
// angka = [1,2,3,4,5,6,7,8,9,10];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka2.join(' '));

// 5. sort 
// angka = [2, 1, 4, 20, 3, 10, 5, 7, 8,];
// angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(angka.join(' '));

// filter dan find
angka = [2, 1, 4, 20, 3, 10, 5, 7, 8,];
var angka2 = angka.filter(function(a) {
    return a > 2;
});
console.log(angka2.join(' '));