class DrawMovie {
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
        // rate.textContent = item.statistics.viewCount;
  
        fragment.appendChild(block);
        console.log(rate);
      });
  
      document.querySelector(".movie-block").innerHTML = '';
      document.querySelector(".movie-block").appendChild(fragment);
    }
  }