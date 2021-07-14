 $(document).ready(function(){
    $('.openmenu').click(function(){
        $('.mobilemenu').toggleClass('active');
    })
});


var windowWidth = $(window).width();

$('header').mousemove(function(event) {

var moveX = (($(window).width() /50) - event.pageX) * 0.009;
var moveY = (($(window).height() /50) - event.pageY) * 0.009;
$('header').css('margin-left', moveX + 'px');
$('header').css('margin-top', moveY + 'px');
});

$(document).ready(function() { 

/* Every time the window is scrolled ... */ 
$(window).scroll( function(){ 

/* Check the location of each desired element */ 
$('#aboutus,#ProjectsNumber').each( function(i){ 

var bottom_of_object = $(this).offset().top + $(this).outerHeight(); 
var bottom_of_window = $(window).scrollTop() + $(window).height(); 

/* If the object is completely visible in the window, fade it it */ 
if( bottom_of_window > bottom_of_object ){ 

$(this).animate({'opacity':'1'},200); 

} 

}); 

}); 

});