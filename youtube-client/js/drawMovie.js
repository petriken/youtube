export class DrawMovie {
  makeMovieBlock(data) {
    const fragment = document.createDocumentFragment();

    const movieItem = document.querySelector(".result-temp");

    data.forEach((item) => {
      const block = movieItem.content.cloneNode(true);

      const title = block.querySelector(".title");
      const preview = block.querySelector(".preview");
      const description = block.querySelector(".description");
      const author = block.querySelector(".author");
      const date = block.querySelector(".date");
      const rate = block.querySelector(".rate");

      title.setAttribute('href', 'https://www.youtube.com/watch?v=' + item.id.videoId);
      title.textContent = 'https://www.youtube.com/watch?v=' + item.id.videoId;
      preview.style.backgroundImage = `url(${item.snippet.thumbnails.high.url || 'img/placeholder.jpg'})`;
      description.textContent = item.snippet.description || ' ... Something is wrong, the description is not defined ... ';
      author.textContent = item.snippet.channelTitle;
      date.textContent = item.snippet.publishedAt.slice(0, 10).split('-').join('-') + ' | ' + item.snippet.publishedAt.slice(11, 19).split('-').join(':');

      const videoId = item.id.videoId;

      function getRate() {

        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD4vV8YtxlNXyq02GyPU5v1Pd4LoweSe1s&part=statistics&id=${videoId}`)
          .then(res => res.json())
          .then(data => rate.textContent = data.items[0].statistics.viewCount)
          .catch(err => console.error(err));
      }

      getRate();

      fragment.appendChild(block);
    });

    document.querySelector(".movie-block").innerHTML = '';
    document.querySelector(".movie-block").appendChild(fragment);
    const arrowVis = document.querySelector(".wrapper__arrow");
    arrowVis.style.visibility = "visible";
  }
}