// pembuatan object =
// object literal
// function declaration
// constractor (keyword new)
// object.create()

//  object literal 
var orang = {
    nama : "Suyud Setiawan Al Arif",
    umur : 18, 
    pekerjaan : "mahasiswa",
    personal : {
        tglahir : "29 juni 2002",
        hobby : "berenang, sepedahan, tidur",
        motto : "happy till death"
    }
};

// function declaration
// recommend
function tambahmahasiswa(nama, nim, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    return mhs; 
}
// cara manggil (sesuaikan sama kurung yang ada di function)
var mahasiswa = tambahmahasiswa('suyud', 20101008, 'teknik informatika');

// constractor
// recommend
// sama seperti function declaration
// bedanya constractor make "new" waktu dipanggil dan nama function huruf depan harus kapital.
function Mahasiswa(nama, nim, kelas, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.jurusan = jurusan;
}
var mahasiswa2 = new Mahasiswa('eka', 20101011, 'A', 'Teknik Informatika');