class DrawMovie {
    makeMovieBlock(data) {
      const fragment = document.createDocumentFragment();
      // let newsCount = (data.length >= 15) ? 15 : data.length;
      const movieItem = document.querySelector(".result-temp");
      // console.log(document.querySelector(".result-temp"));
      // for (let i = 0; i < newsCount; i++){
      // const item = data[i];
  
  
  
      data.forEach((item) => {
  
        // const id = item.id.videoId;
  
        // const totalResults = item.parentElement.pageInfo.totalResults;
        // pageInfo.totalResults
        // if (totalResults < 1) {
        //   alert('Sorry, no video for your request.');
        //   throw Error('Sorry, no video for your request.');
        // }
  
  
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
  
      // const movieBlock = document.querySelector(".movie-block");
      // movieBlock.appendChild(fragment);
      document.querySelector(".movie-block").innerHTML = '';
      document.querySelector(".movie-block").appendChild(fragment);
    }
  }