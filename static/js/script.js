var $window = $(window);

$window.scroll(function() {
	if ($(this).scrollTop() > 130){
		$("#navbar").addClass("after-scroll");
	}
	else{
		$("#navbar").removeClass("after-scroll");
	}
});

function showAsura() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="block";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="none";
}

function showSylvari() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="block";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="none";
}

function showHuman() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="block";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="none";
}

function showNorn() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="block";
	document.getElementById('charr-id').style.display="none";
}

function showCharr() {
	document.getElementById('race-id').style.display="block";
	document.getElementById('asura-id').style.display="none";
	document.getElementById('sylvari-id').style.display="none";
	document.getElementById('human-id').style.display="none";
	document.getElementById('norn-id').style.display="none";
	document.getElementById('charr-id').style.display="block";
}