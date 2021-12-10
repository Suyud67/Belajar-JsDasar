const arraySatu = [
  {
    title: 'what are you doing?',
    tags: ['java', 'javascript'],
  },
  {
    title: 'can you build some web app?',
    tags: ['html', 'css', 'javascript'],
  },
];

arraySatu.forEach((arr) => {
  for (let i = 0; i < arr.tags.length; i++) {
    console.log(arr.tags[i]);
  }
});
