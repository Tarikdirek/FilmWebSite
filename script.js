const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItems = movieLists[i].querySelectorAll("img").length;
  
  // Ekran genişliğine göre kaydırma oranı dinamik olarak hesaplanıyor
  const maxItemsVisible = Math.floor(window.innerWidth / 300); // Her 300px'lik alan bir öğe için
  const slideAmount = movieLists[i].clientWidth / maxItemsVisible; // Her kaydırma ne kadar olacak
  
  arrow.addEventListener("click", () => {
    clickCounter++;
    
    // Eğer hala kaydırılacak öğe varsa
    if (imageItems - (clickCounter + maxItemsVisible) >= 0) {
      movieLists[i].style.transform = `translateX(${
        -slideAmount * clickCounter
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)"; // Baştan başla
      clickCounter = 0;
    }
  });
});


/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar,.sidebar i,.movie-list-title ,.toggle,.toggle-ball,.movie-list-filter select"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
