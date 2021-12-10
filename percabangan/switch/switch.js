var angka = prompt('masukan angka : '); 
// yang user input pada prompt adalah string tapi di case adalah int
// case harus diubah menjadi string pakai ' '

switch (angka) {
    case '1':
        alert('angka yang anda masukan adalah 1');
        break;
    case '2':
        alert('angka yang anda masukan adalah 2');
        break;
    case '3':
        alert('angka yang anda masukan adalah 3');
        break;
    case '4':
        alert('angka yang anda masukan adalah 4');
        break;
    default:
        alert('angka yang anda masukan salah');
        break;
}