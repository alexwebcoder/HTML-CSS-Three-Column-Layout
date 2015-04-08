$(document).ready(function() {
		
	$(".menu").click(function() {
		
		$(".nav").slideToggle(500, function(){

			$(this).toggleClass("menuOpen").css({"display":""});
			
		});
		
	});
	
});