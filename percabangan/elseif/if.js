var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroprasi && noAngkot != 5) {
        console.log('angkot no.' + noAngkot + ' beroprasi dengan baik');
    }else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
        console.log('angkot no.' + noAngkot + ' sedang lembur');
    }else{
        console.log('ankot no.' + noAngkot + ' tidak beroprasi dengan baik');
    }
    
}