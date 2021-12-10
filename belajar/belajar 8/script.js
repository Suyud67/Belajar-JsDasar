class toko {
  constructor(buah1, buah2, buah3, buah4, buah5) {
    this.buah1 = buah1;
    this.buah2 = buah2;
    this.buah3 = buah3;
    this.buah4 = buah4;
    this.buah5 = buah5;
  }
  cekBuah() {
    return `buah nomer 2 ialah ${this.buah2}`;
  }

  jmlBuah() {
    return `isi seluruh buah ${toko.length}`;
  }
}

const tokoBuah = new toko('apel', 'nanas', 'jeruk', 'manggis', 'durian');

console.log(tokoBuah.jmlBuah());
