import { movieAPILoader } from "./movieAPILoader";
import { DrawMovie } from './drawMovie';

const movieAPI = new movieAPILoader();
const drawMovie = new DrawMovie();

let count = 1;
document.querySelector(".header__navigation-bottom-submit").addEventListener("click", () => {
  movieAPI.getResponse(drawMovie.makeMovieBlock);
})

window.addEventListener('keydown', keypress);

function keypress(e) {
  if (e.keyCode == '13') {
    movieAPI.getResponse(drawMovie.makeMovieBlock);
  };
}


const leftArrow = document.querySelector('.wrapper__arrow_left-arrow');
const movieList = document.querySelector('.movie-block');
const wrap = document.querySelector('.wrapper');


function pagingLeft() {
  const pos = parseInt(movieList.style.marginLeft) || 0;
  const widthWrap = wrap.offsetWidth;
  if (pos != 0) {
    movieList.style.marginLeft = (pos + widthWrap) + 'px';
    
  }
  count--;
}
leftArrow.addEventListener('mouseup', pagingLeft);

const rightArrow = document.querySelector('.wrapper__arrow_right-arrow');

function pagingRight() {
  const pos = parseInt(movieList.style.marginLeft) || 0;
  const widthWrap = wrap.offsetWidth;
  movieList.style.marginLeft = (pos - widthWrap) + 'px';
  count++;
}
console.log(count
);
rightArrow.addEventListener('mouseup', pagingRight);

window.addEventListener('keydown', arrowPress);

function arrowPress(e) {
  if (e.keyCode == '37') {
    pagingLeft();
  } else if (e.keyCode == '39') {
    pagingRight();
  };
}
console.log(count
);