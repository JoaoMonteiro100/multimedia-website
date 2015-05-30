var $window = $(window);

$window.scroll(function() {
	if ($(this).scrollTop() > 130){
		$("#navbar").addClass("after-scroll");
	}
	else{
		$("#navbar").removeClass("after-scroll");
	}
});