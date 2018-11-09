const header = (h1) => {
  let html = "";
  html += '<header>';
  html += '<nav>';
  html += '<ul>';
  html += '<li><a href="./index.html">ImageAnalyzer</a></li>';
  html += '<li><a href="./imageanalyzer_old.html">ImageAnalyzer_old</a></li>';
  html += '<li><a href="./search.html">Flickr API</a></li>';
  html += '<li><a href="./label.html">CloudVision API</a></li>';
  html += '<li><a href="./morethan20.html">Flicker.photos.search</a></li>';
  html += '</ul>';
  html += '</nav>';
  html += '<h1>' + h1 + '</h1>';
  html += '</header>';
  document.write(html);
}
