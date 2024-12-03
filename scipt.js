var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}














// Получаем элементы стрелок и контейнер с отзывами
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const reviewContainer = document.querySelector(".review-container");

// Обработчик для прокрутки влево
scrollLeft.addEventListener("click", function() {
  reviewContainer.scrollBy({
    left: -300, // Прокрутка на 300px влево
    behavior: "smooth"
  });
});

// Обработчик для прокрутки вправо
scrollRight.addEventListener("click", function() {
  reviewContainer.scrollBy({
    left: 300, // Прокрутка на 300px вправо
    behavior: "smooth"
  });
});




const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.header-right');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });