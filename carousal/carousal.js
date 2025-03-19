
var slide_index = 1;
displaySlides(slide_index);

// Function to move to the next slide
function nextSlide(n) {
  displaySlides(slide_index += n);
}

// Function to set the current slide
function currentSlide(n) {
  displaySlides(slide_index = n);
}

// Function to display slides
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";

  
}

// Auto slide functionality
function autoSlide() {
  nextSlide(1);
  setTimeout(autoSlide, 5000); 
}

// Start auto slide
autoSlide();
  
