const images = document.querySelectorAll(".galleryImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.display = "none";
    if (i === index) {
      image.style.display = "block";
    }
  });
}

function previous() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

function next() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

showImage(currentIndex);
