function coba() {
    hasil = 0;
    for (var i = 0; i < arguments.length;i++) {
        hasil += arguments[i];
    }
    return hasil; 
}
var hasil = coba(1,2,3,4);
console.log(hasil);