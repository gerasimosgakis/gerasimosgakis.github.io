//The page loads

$(document).ready(function(){

  
//Creating two new variables to store latitude and longitude
  var lat = 0;
  var lon = 0;
  var units = "metric";
  var type = "C";
  var time = (new Date).getHours();
  var daylight = true;
  //If the user accepts to allow GPS we call the success function
  if(navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(success);
  }
  
  
  $('#fahr').on('click', function(){
    type = "F";
    units = "imperial";
    if(navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(success);
    }   
  });
  
  $('#cel').on('click', function(){
    type = "C";
    units = "metric";
    if(navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition(success);
    }   
  });
  
//Getting position  
  function success(pos){
    var crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
    console.log('Your current position is:');
    console.log(`Latitude : ${lat}`);
    console.log(`Longitude: ${lon}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    var linkApi = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=" + units + "&appid=7888ee1c8b22c5543cba076d14f47e99";
    
    //https://cors-anywhere.herokuapp.com/
    //Gives us temperature in C & area
    //Then depending the weather(sunny, cloudy etc and day/night) makes a relative icon appearing
    $.getJSON(linkApi, function(data){
        console.log(data.main.temp);
        console.log(time);
      console.log(data.weather[0].description);
        $("#weather").html(data.main.temp.toFixed(1) + " " + type +"</br>" + data.weather[0].description + "</br>" + data.name+", "+ data.sys.country);
        $("#weatherImage").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon+".png");  
        
        
        /*if(data.weather[0].description == "broken clouds"){
          $('body').css("background-image", "url(https://1.bp.blogspot.com/-8-3A-qbQ2v4/TsFQQSZ4CEI/AAAAAAAADDI/_FDK48j6uRM/s1600/stormy_sky-wallpaper-1920x1080+%25281%2529.jpg");
        }*/
      
      });
    
    $.getJSON(linkApi, function(data){
      background(time, data.weather[0].description);
    });
    
 
    
    
  };
  
  var time = (new Date).getHours();
  var daylight = true;
  
 
  
 // background(time, data.weather[0].description);
  
  //Determines the background picture depending the weather and the time of the day
  
  function background(time, description){
    
    
    //Determines if it is day or night
    if (time>=6 && time<=19){
      daylight = true;
    }
    else{
      daylight = false;
    }
    
    //Determines background
    if (daylight==true){
      $('container-fluid').css("color", "black");
      if(description == "clear sky"){
        $('body').css("background-image", "url(http://globalsharingcommunity.com/wp-content/uploads/2015/01/Most-Beautiful-Places-in-the-World-Blue-Sky-Greeny-Everywhere1.jpg)");
      }
      else if(description.match(/clouds/)){
        $('body').css("background-image", "url(https://1.bp.blogspot.com/-8-3A-qbQ2v4/TsFQQSZ4CEI/AAAAAAAADDI/_FDK48j6uRM/s1600/stormy_sky-wallpaper-1920x1080+%25281%2529.jpg");
      }
      else if(description.match(/rain/)){
        $('body').css("background-image", "url(http://goldwallpapers.com/uploads/posts/rainy-day-wallpapers/rainy_day_wallpapers_012.jpg)");
      }
      else if(description.match(/thunderstorm/)){
        $('body').css("background-image", "url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSiraNzTlWOavQRMohZrtJIF0emH9mStXJNWO50lGQl9EKFWCM1JQ)");
      }
      else if(description.match(/snow/)){
        $('body').css("background-image", "url(http://wallpapermonkey.com/wp-content/uploads/2016/08/snowfall-wallpaper-HD3.jpg)");  
      }
      else if(description.match(/mist/)){
        $('body').css("background-image", "url(https://images.fineartamerica.com/images-medium-large/the-mist-at-machu-picchu-michael-langdon.jpg)");
      }

    }
    else{
      $('.container-fluid').css("color", "white");
      if(description == "clear sky"){
        $('body').css("background-image", "url(https://i.imgur.com/HF3Xxg1.jpg)");
      }
      else if(description.match(/clouds/)){
        $('body').css("background-image", "url(http://www.pxleyes.com/images/contests/the-moon-2/fullsize/Cloudy-moon-4e0d60ae13343_hires.jpg");
      }
      else if(description.match(/rain/)){
        $('body').css("background-image", "url(http://belajoo.com/i/2017/01/rain-sad-wallpapers-hd.jpg)");
      }
      else if(description.match(/thunderstorm/)){
        $('body').css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/2d/c4/f9/2dc4f9111d6fbc2befa14b459d2fb505.jpg)");
      }
      else if(description.match(/snow/)){
        $('body').css("background-image", "url(http://bhstorm.com/i/2016/11/snow-night-wallpapers-photo.jpg)");  
      }
      else if(description.match(/mist/)){
        $('body').css("background-image", "url(https://68.media.tumblr.com/3b3613c6fffc2e00b50df5bb45095d74/tumblr_nfhziaurdm1qj97aco1_1280.jpg)");
      }     
    }
  };
  

});

