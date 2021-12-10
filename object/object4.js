// membuat object angkot 
// komponen angkot (sopir, destinasi, penumpang, kas angkot);

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length == 0) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
        } else{
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == undefined) {
                    this.penumpang[i] =  namaPenumpang;
                    return this.penumpang;
                }else if (this.penumpang[i] == namaPenumpang) {
                    console.log(namaPenumpang + ' sudah ada di angkot');
                    return this.penumpang;
                }else if (i == this.penumpang.length -1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
        
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        // cek penumpang masih kosong;
        if (this.penumpang.length == 0) {
            alert('angkot masi kosong');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            // nurunin penumpang;
            if (this.penumpang[i] == namaPenumpang) {
            this.penumpang[i] = undefined;
            // duit penumpang masuk ke kas angkot;
            this.kas += bayar;
             return this.penumpang;
            }else if (i == this.penumpang.length -1){
            console.log(namaPenumpang + ' tidak ada dalam angkot');
            return this.penumpang;
            } 
        }
    }
}

var angkot1 = new Angkot('suyud', ['gianyar', 'badung'], [], 0);