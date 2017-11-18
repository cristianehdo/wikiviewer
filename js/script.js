
var displayResults = (results) => {
  let counter = 0;
  let indexMax = results[1].length;
  results[1][counter];
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
