const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let size = 'box-size';
  let color = 'color';
  if (box.classList.contains(size)) {
    [size, color] = [color, size];
  }
  box.classList.toggle(size);
  setTimeout(() => {
    box.classList.toggle(color);
  }, 500);
});
