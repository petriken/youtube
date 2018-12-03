export class movieAPILoader {
  constructor() {
    this.Key = "AIzaSyD4vV8YtxlNXyq02GyPU5v1Pd4LoweSe1s";
    this.url = "https://www.googleapis.com/youtube/v3/";
  }
  
  _errorHandler(res) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) alert(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl() {
    function request() {
      let context = document.getElementById('header__navigation-request-input').value;
      return context;
    };
    let url = `${this.url}search?key=${this.Key}&maxResults=15&part=snippet&type=video&q=${request()}`;
    return url;
  }

  getResponse(callback) {
    fetch(this.makeUrl())
      .then(this._errorHandler)
      .then(res => res.json())
      .then(data => callback(data.items))
      .catch(err => console.error(err));
  }
}