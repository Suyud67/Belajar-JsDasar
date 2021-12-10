const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        daerah: 'Ubud',
        suhu: 24,
        keadaan: 'mendung',
      },
      {
        daerah: 'Klungkung',
        suhu: 28,
        keadaan: 'cerah',
      },
    ]);
  }, 1000);
});

cuaca.then((obj1) => {
  document.getElementById('printOut').innerHTML = JSON.stringify(obj1, null, 2);
});
