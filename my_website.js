$(document ).ready(function() {
$('.my-pic').attr('src', 'https://www.dropbox.com/s/nb2f4f9btqa8gaf/profile_pic_grey.jpg?dl=1');
  
  var unique=["#u", "#n", "#i", "#q", "#u2", "#e"];
  var digital=["#d", "#i2", "#g", "#i3", "#t", "#a", "#l"];
  var creations=["#c", "#r", "#e2", "#a2", "#t2", "#i4", "#o", "#n2", "#s2"];
  u_index=0;
  
  function letters(lett, val){
    $(lett).animate({marginLeft: val});
  }
  
  function letters2(lett, val){
    $(lett).animate({fontSize: val});
  }
  
  function unique_letters(){
    for(var i=0; i<=unique.length; i++){
      setTimeout(letters(unique[i], "0px"), 1000);
    }
  }
  
  function digital_letters(){
    setTimeout(letters(digital[0], "35px"), 1000);
    for(var i=6; i>0; i--){
      setTimeout(letters(digital[i], "35px"), 1000);
    }
  }
  
  function creations_letters(){
    setTimeout(letters(creations[0], "200px"), 1000);
    for(var i=0; i<=creations.length; i++){
      setTimeout(letters2(creations[i], "3em"), 1000);
    }
  }
  
  unique_letters();
  digital_letters();
  creations_letters();
  
  /*setTimeout(letters("#u", "0px"), 1000);
  setTimeout(letters("#n"), 1000);
  setTimeout(letters("#i"), 1000);
  setTimeout(letters("#q"), 1000);
  setTimeout(letters("#u2"), 1000);
  setTimeout(letters("#e"), 1000);*/
 
  
    
  
  //pixelate();
 
    var backgrounds = [
      'https://www.dropbox.com/s/nb2f4f9btqa8gaf/profile_pic_grey.jpg?dl=1', 
      'https://www.dropbox.com/s/gar847zypl3e7wx/profile_pic_grey_pixel.jpg?dl=1'];
    var current = 0;

    function nextBackground() {
        $('.my-pic').attr(
            'src',
        backgrounds[current = ++current % backgrounds.length]);

        //setInterval(nextBackground, 1000);
        setTimeout(nextBackground, 500);
        //setTimeout(nextBackground, 2000);
    }
    setInterval(nextBackground, 2000);
    $('#my_pic').attr('src', backgrounds[0]);
  
});
