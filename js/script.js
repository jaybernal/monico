
// Smooth scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    var testimony = JSON.parse(xhr.responseText);
    var newHTML = "";
    for( var i = 0; i < testimony.length; i++){
      newHTML += '<div class="hidden">';
      newHTML += '<backquote class="quote">';
      newHTML += '<p>' + testimony[i].comment + '</p>';
      newHTML += '</backquote>';
      newHTML += '<cite>' + testimony[i].name + '</cite>';
      newHTML += '</div>';
    }
    document.getElementById("quotes").innerHTML = newHTML;
  }
};
xhr.open("GET", "data/testimony.json");
xhr.send();



$('.quotes').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
});


$( document ).ready(function() {
$('.hidden').removeClass('hidden');
});
