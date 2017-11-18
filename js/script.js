// window.onload = function() {
//  document.getElementById("wiki-search-input").focus();
// };
var form = document.getElementById('form');
var searchField = document.getElementById('searchText');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchResult(searchField.value);
});

var fetchResult = (text) => {
  const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&srsearch=' + text + '&format=json&callback=?';
https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=brazil&format=json&callback=?
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    // displayResult(data)
  });
};

// function displayResult() => {

// };

// var
// 	var searchText= $('#searchText').val();
// 	var url='https://en.wikipedia.org/w/api.php?action=opensearch&srsearch=' + searchText + '&limit=2&namespace=0&format=json&callback=?';
// 	https://en.wikipedia.org/w/api.php?action=opensearch&search=api&limit=2&namespace=0&format=xmlfm
// 	console.log(url);
// 	$.ajax({
// 		type: "GET",
// 		url: url,
// 		async: false,
// 		dataType: "json",
// 		success: function(result){

// 	        $("output").html(result)},
// 	    error: function(err){
// 	    	alert("Sorry, an error ocurred.")},
// 	});
// });





	// &prop=info&inprop=url&utf8=
