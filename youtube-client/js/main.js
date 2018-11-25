const movieAPI = new movieAPILoader();
const drawMovie = new DrawMovie();

document.querySelector(".header__navigation-bottom-submit").addEventListener("click", () => {
  movieAPI.getResponse(drawMovie.makeMovieBlock);
})

function request() {
  let context = document.getElementById('header__navigation-request-input').value;
  return context;
};

window.addEventListener('keydown', keypress);

function keypress(e) {
  if (e.keyCode == '13') {
    movieAPI.getResponse(drawMovie.makeMovieBlock);
  };
}