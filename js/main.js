$( document ).ready(function() {
    
$( ".box1" ).on( "click", function(e) {
  	$('.present').toggle();
  	$('.puppy_pic').toggle();
});

$( ".box2" ).on( "click", function() {
	$('.present2').toggle();
	$('.box2_paragraph').html("Not down here!");
});

$( ".box3" ).on( "click", function() {
	$('.present3').toggle();
	$('.box3_paragraph').html("Not down here!");
});


});  //jquery ends
