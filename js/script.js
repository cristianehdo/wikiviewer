
var displayResults = (results) => {
  var resultBox = document.getElementById("articleBox");
  let counter = 0;
  let indexMax = results[1].length;
  for (i = 0; i < indexMax; i++) {
    results[1][counter];
    let title = results[1][counter];
    let description = results[2][counter];
    let link = results[3][counter];
    let content = '<div class="card"><a class="card-link" href=' + link + ' target="_blank"></a><h4>' + title + '</h4><p>' + description + '</p></div>';
    resultBox.insertAdjacentHTML("beforeend", content);
    counter += 1;
  }
};

var fetchResult = (text) => {
  const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + text + '&format=json&origin=*';
  fetch(url, {
    dataType: "json",
    type: "GET"})
  .then(response => response.json())
  .then((data) => {
    displayResults(data);
  });
};


var form = document.getElementById('form');
var searchField = document.getElementById('searchText');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchResult(searchField.value);
});
