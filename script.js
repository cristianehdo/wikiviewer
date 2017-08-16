window.onload = function() {
 document.getElementById("wiki-search-input").focus();
};

$(document).ready(function(){
	$('#search').click(function(){
		var searchText= $('#searchText').val();
		var url='https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchText + '&prop=info&inprop=url&utf8=&format=json';
	});



});