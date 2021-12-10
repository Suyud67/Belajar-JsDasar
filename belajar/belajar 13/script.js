// dapatkan elemen
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// create active slide
let index = 1;
displaySlide(index);

// if next and previous btn on click
function nextSlide(n) {
  displaySlide((index += n));
}

// display slide
function displaySlide(n) {
  const imgSlides = Array.from(document.querySelectorAll('.img-menu'));
  if (n > imgSlides.length) {
    index = 1;
  }
  if (n < 1) {
    index = imgSlides.length;
  }
  for (let i = 0; i < imgSlides.length; i++) {
    imgSlides[i].style.display = 'none';
  }
  imgSlides[index - 1].style.display = 'block';
}
