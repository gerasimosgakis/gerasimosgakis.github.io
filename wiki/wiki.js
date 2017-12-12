//Variables
var title = ""; //our input
var obj = {}; //creates an object where we will save our api info;
var linkApi1 = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="
var linkApi2 = "&prop=info&inprop=url&utf8=&format=json" //the url of our query to the api
//End of variables
var linkApi = "";


function ajax(linkApi) { //AJAX request
	$.ajax({
		url: linkApi,
		dataType: "jsonp",
		success: function(data) {
			obj = data.query;
      addResults();
      //console.log(obj);
			if (data.query.searchinfo.totalhits === 0) {
				showError(title);
			}
			else {
				showResults(data);
			}
		},
		error: function () {
			alert("Error retrieving search results, please refresh the page");
		}
	});

}; //End Ajax request


function addResults(){ //Adds divs with the titles
  for(var i=0; i<=10; i++){

      $('#results').append("<div id='res"+i+"'><span id='title"+i+"'></span><span id='snippet"+i+"'></span></div>");

  }
  for(var j=0; j<=10; j++){
    $("#title"+j).html('<a target=_blank href="https://en.wikipedia.org/wiki/'+obj.search[j].title+'">'+obj.search[j].title+'</a>');
    $("#snippet"+j).html('</p>'+obj.search[j].snippet+'</p>');
  }

};//End of addResults

$(document).ready(function(){ //Document start
//Gets the text from the input box
  $('.input').keydown(function(e){
    if(e.which == 13){
      title = $('#input').val();
      linkApi = linkApi1+title+linkApi2;
      ajax(linkApi);
    }
  });

  $('#search_btn').click(function(e){
      title = $('#input').val();
      linkApi = linkApi1+title+linkApi2;
      ajax(linkApi);
  });

});//End Document
