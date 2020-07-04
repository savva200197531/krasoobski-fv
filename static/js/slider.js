const prev = document.querySelectorAll('.prev'),
  next = document.querySelectorAll('.next'),
  logo = document.querySelectorAll('.logo__img');

let slideIndex = 1;
showSlides(slideIndex);

let plusSlide = () => {
  showSlides(slideIndex += 1);
}

let minusSlide = () => {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

prev.forEach(item => {
  item.addEventListener('click', minusSlide);
})

next.forEach(item => {
  item.addEventListener('click', plusSlide);
})

logo.forEach(item => {
  item.addEventListener('click', () => {
    slideIndex = 1;
    showSlides();
  })
})
