const pengurusKls = [
  {
    nama: 'udin',
    nim: 20101008,
    jabatan: 'ketua',
    eskul: {
      eskul1: 'basket',
      eskul2: 'remi',
    },
  },
  {
    nama: 'cahya',
    nim: 20101121,
    jabatan: 'wakil',
  },
  {
    nama: 'budi',
    nim: 20103214,
    jabatan: 'sekertaris',
  },
  {
    nama: 'mala',
    nim: 20101012,
    jabatan: 'bendahara',
  },
];

pengurusKls.forEach((siswa) => {
  console.log(siswa.nama);
});
