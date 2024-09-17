const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrow.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItems = movieLists[i].querySelectorAll("img").length;
    
  arrow.addEventListener("click", () => {
    clickCounter++;
    if (imageItems - (4 + clickCounter) >= 0) {
    movieLists[i].style.transform = `translateX(${
      movieLists[i].computedStyleMap().get("transform")[0].x.value -300
  }px)`;
    }else{
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    }
  });
});
