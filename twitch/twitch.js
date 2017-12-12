//Variables
var channel="";
var linkApi = "";
var linkApi1 = "https://wind-bow.glitch.me/twitch-api/streams/"
var linkApi2 = "?callback=?&format=json";
var obj = {};
var channelsArray = ["ESL_SC2", "OgamingSC2", "RobotCaleb", "freecodecamp", "brunofin", "nightblue3"];
var par="";

function ajax(linkApi, handleData, num) { //AJAX request

	$.ajax({
		url: linkApi,
		dataType: "jsonp",
		success: function(data) {
			obj = data;
      handleData(obj, num);
		},
     error: function() {
      alert('Error occured');
     }

	});

};

function getStatus(d, n){
  $('#image' +n).attr("src", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0Y3W4wzUpCgcNl73r0bvBXVdI_7C0reuydE9GxHPA5amm4cK8dpqcxA");
  if(d.stream === null){
    $('#status'+n).html("offline");
    $("#tr"+n).css("background-color", "#3c5987");
  }
  else if(d.error){
    $('#status'+n).html("error");
    $("#tr"+n).css("background-color", "#3c5987");
  }
  else{
    game = d.stream.channel.game
    status = d.stream.channel.status;

    $('#status'+n).html(game + ": " + status);
  }

    logo = d.stream.channel.logo;

    $('#image' +n).attr("src", logo);
};



$(document).ready(function(){
  for(var i=0; i<channelsArray.length; i++){
    $("#table_body").append('<tr id="tr'+i+'"></tr>');
  }

  for(var j=0; j<channelsArray.length; j++){
    $('#tr'+j).append('<td class="col-md-1"><img src="" id="image'+j+'" /></td>');
    $('#tr'+j).append('<td class="col-md-3"><a target="_blank" id="link'+j+'">aaaaa</a></td>');
    $('#tr'+j).append('<td class="col-md-8"><p id="status'+j+'"></p></td>');
  }

  for(var k=0; k<channelsArray.length; k++){

    $('#link'+k).html(channelsArray[k]);
    $('#link'+k).attr("href", "https://www.twitch.tv/"+channelsArray[k]);
    linkApi = linkApi1+channelsArray[k]+linkApi2;
    //console.log(linkApi);
    par = "#status"+k;
    ajax(linkApi, getStatus, k);
  }
});
