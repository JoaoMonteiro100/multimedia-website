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

var images = {};

loadImage("braco-esq");
loadImage("pernas");
loadImage("tronco");
loadImage("braco-dir");
loadImage("cabeca");
loadImage("orelhas");

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "../images/" + name + ".png";
}

var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}

var context = document.getElementById('canvas').getContext("2d");

var charX = 245;
var charY = 185;
  
function redraw() {

  var x = charX;
  var y = charY;

  canvas.width = canvas.width; // clears the canvas 
                      
  context.drawImage(images["leftArm"], x + 40, y - 42);
  context.drawImage(images["legs"], x, y);
  context.drawImage(images["torso"], x, y - 50);
  context.drawImage(images["rightArm"], x - 15, y - 42);
  context.drawImage(images["head"], x - 10, y - 125);
  context.drawImage(images["hair"], x - 37, y - 138);
}