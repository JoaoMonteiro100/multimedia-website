
// Copyright 2011 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var canvas;
var context;
var images = {};
var totalResources = 30;
var numResourcesLoaded = 0;
var fps = 30;
var x = 245;
var y = 185;
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);
var maxEyeHeight = 14;
var curEyeHeight = maxEyeHeight;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;                    
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);
var curFPS = 0;
var elementalist = false;
necromancer = false;
mesmer = false;
ranger = false;
engineer = false;
thief = false;
warrior = false;
guardian = false;

function becomeEle() {
                        
  if (!elementalist) {
    elementalist = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeNecro() {
                        
  if (!necromancer) {
    necromancer = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeMesmer() {
                        
  if (!mesmer) {
    mesmer = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeRanger() {
                        
  if (!ranger) {
    ranger = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeEngi() {
                        
  if (!engineer) {
    engineer = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeThief() {
                        
  if (!thief) {
    thief = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeWarrior() {
                        
  if (!warrior) {
    warrior = true;
    setTimeout(returnToNormal, 750);
  }
}

function becomeGuardian() {
                        
  if (!guardian) {
    guardian = true;
    setTimeout(returnToNormal, 750);
  }
}

function returnToNormal() {             
	elementalist = false;
	necromancer = false;
	mesmer = false;
	ranger = false;
	engineer = false;
	thief = false;
	warrior = false;
	guardian = false;
}

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight)
{
	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);
	
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	// Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
	//     context = document.getElementById('canvas').getContext("2d");
	
	loadImage("braco-esq");
	loadImage("pernas");
	loadImage("tronco");
	loadImage("braco-dir");
	loadImage("cabeca");
	loadImage("orelhas");
	
	loadImage("braco-esq-mesmer");
	loadImage("pernas-mesmer");
	loadImage("tronco-mesmer");
	loadImage("braco-dir-mesmer");
	loadImage("cabeca-mesmer");
	loadImage("orelhas-mesmer");
	
	loadImage("braco-esq-thief");
	loadImage("pernas-thief");
	loadImage("tronco-thief");
	loadImage("braco-dir-thief");
	loadImage("cabeca-thief");
	loadImage("orelhas-thief");
	
	loadImage("braco-esq-necro");
	loadImage("pernas-necro");
	loadImage("tronco-necro");
	loadImage("braco-dir-necro");
	loadImage("cabeca-necro");
	loadImage("orelhas-necro");
	loadImage("aura-necro");
	
	loadImage("braco-esq-ele");
	loadImage("braco-esq-engi");
	loadImage("braco-esq-guardian");
	loadImage("braco-esq-ranger");
	loadImage("braco-esq-warrior");
}

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
	  resourceLoaded();
  }
  images[name].src = "static/images/animation/" + name + ".png";
}

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
  
	setInterval(redraw, 1000 / fps);
  }
}

function redraw() {
				
  canvas.width = canvas.width; // clears the canvas 
  var cloneDist = 70;
  
  //Draw Shadow
  if(mesmer) {
	drawEllipse(x + 42 - cloneDist, y + 29, 160 - breathAmt, 6);
  }
  else if(!thief) {
    drawEllipse(x + 42, y + 29, 160 - breathAmt, 6);
  }

  //Draw Asura
  if(elementalist) {
	  context.drawImage(images["braco-esq-ele"], x + 45, y - 70 - breathAmt);
	  context.drawImage(images["pernas"], x, y + 8);
	  context.drawImage(images["tronco"], x, y - 57);
	  context.drawImage(images["cabeca"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5, y - 45 - breathAmt);
  }
  else if(mesmer) {
	  context.drawImage(images["braco-esq"], x + 40 - cloneDist, y - 45 - breathAmt);
	  context.drawImage(images["pernas"], x - cloneDist, y + 8);
	  context.drawImage(images["tronco"], x - cloneDist, y - 57);
	  context.drawImage(images["cabeca"], x + 3 - cloneDist, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21 - cloneDist, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5 - cloneDist, y - 45 - breathAmt);
	  
	  //Clone:
	  context.drawImage(images["braco-esq-mesmer"], x + 40 + cloneDist, y - 45 - breathAmt);
	  context.drawImage(images["pernas-mesmer"], x + cloneDist, y + 8);
	  context.drawImage(images["tronco-mesmer"], x + cloneDist, y - 57);
	  context.drawImage(images["cabeca-mesmer"], x + 3 + cloneDist, y - 112 - breathAmt);
	  context.drawImage(images["orelhas-mesmer"], x - 21 + cloneDist, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir-mesmer"], x - 5 + cloneDist, y - 45 - breathAmt);
  }
  else if(necromancer) {
	  context.drawImage(images["aura-necro"], x - 30, y - 125 - breathAmt);
	  context.drawImage(images["braco-esq-necro"], x + 40, y - 45 - breathAmt);
	  context.drawImage(images["pernas-necro"], x, y + 8);
	  context.drawImage(images["tronco-necro"], x, y - 57);
	  context.drawImage(images["cabeca-necro"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas-necro"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir-necro"], x - 5, y - 45 - breathAmt);
  }
  else if(ranger) {
	  context.drawImage(images["braco-esq-ranger"], x + 45, y - 75 - breathAmt);
	  context.drawImage(images["pernas"], x, y + 8);
	  context.drawImage(images["tronco"], x, y - 57);
	  context.drawImage(images["cabeca"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5, y - 45 - breathAmt);
  }
  else if(thief) {
	  context.drawImage(images["braco-esq-thief"], x + 40, y - 45 - breathAmt);
	  context.drawImage(images["pernas-thief"], x, y + 8);
	  context.drawImage(images["tronco-thief"], x, y - 57);
	  context.drawImage(images["cabeca-thief"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas-thief"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir-thief"], x - 5, y - 45 - breathAmt);
  }
  else if(engineer) {
	  context.drawImage(images["braco-esq-engi"], x + 47, y - 57 - breathAmt);
	  context.drawImage(images["pernas"], x, y + 8);
	  context.drawImage(images["tronco"], x, y - 57);
	  context.drawImage(images["cabeca"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5, y - 45 - breathAmt);
  }
  else if(guardian) {
	  context.drawImage(images["braco-esq-guardian"], x + 45	, y - 120 - breathAmt);
	  context.drawImage(images["pernas"], x, y + 8);
	  context.drawImage(images["tronco"], x, y - 57);
	  context.drawImage(images["cabeca"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5, y - 45 - breathAmt);
  }
  else if(warrior) {
	  context.drawImage(images["braco-esq-warrior"], x + 47, y - 100 - breathAmt);
	  context.drawImage(images["pernas"], x, y + 8);
	  context.drawImage(images["tronco"], x, y - 57);
	  context.drawImage(images["cabeca"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5, y - 45 - breathAmt);
  }
  else {
	  context.drawImage(images["braco-esq"], x + 40, y - 45 - breathAmt);
	  context.drawImage(images["pernas"], x, y + 8);
	  context.drawImage(images["tronco"], x, y - 57);
	  context.drawImage(images["cabeca"], x + 3, y - 112 - breathAmt);
	  context.drawImage(images["orelhas"], x - 21, y - 106 - breathAmt);
	  context.drawImage(images["braco-dir"], x - 5, y - 45 - breathAmt);
  }
  
  //Draw eyes
  if(mesmer) {
		drawEllipse(x + 41 - cloneDist, y - 83 - breathAmt, 20, curEyeHeight); // Left Eye
		drawEllipse(x + 58 - cloneDist, y - 83 - breathAmt, 20, curEyeHeight); // Right Eye
		drawEllipse(x + 41 + cloneDist, y - 83 - breathAmt, 20, curEyeHeight); // Left Eye
		drawEllipse(x + 58 + cloneDist, y - 83 - breathAmt, 20, curEyeHeight); // Right Eye
  }
  else {
		drawEllipse(x + 41, y - 83 - breathAmt, 20, curEyeHeight); // Left Eye
		drawEllipse(x + 58, y - 83 - breathAmt, 20, curEyeHeight); // Right Eye
  }
}

function drawEllipse(centerX, centerY, width, height) {

  context.beginPath();
  
  context.moveTo(centerX, centerY - height/2);
  
  context.bezierCurveTo(
	centerX + width/2, centerY - height/2,
	centerX + width/2, centerY + height/2,
	centerX, centerY + height/2);

  context.bezierCurveTo(
	centerX - width/2, centerY + height/2,
	centerX - width/2, centerY - height/2,
	centerX, centerY - height/2);
 
  context.fillStyle = "black";
  context.fill();
  context.closePath();	
}

function updateBreath() { 
				
  if (breathDir === 1) {  // breath in
	breathAmt -= breathInc;
	if (breathAmt < -breathMax) {
	  breathDir = -1;
	}
  } else {  // breath out
	breathAmt += breathInc;
	if(breathAmt > breathMax) {
	  breathDir = 1;
	}
  }
}

function updateBlink() { 
				
  eyeOpenTime += blinkUpdateTime;
	
  if(eyeOpenTime >= timeBtwBlinks){
	blink();
  }
}

function blink() {

  curEyeHeight -= 1;
  if (curEyeHeight <= 0) {
	eyeOpenTime = 0;
	curEyeHeight = maxEyeHeight;
  } else {
	setTimeout(blink, 10);
  }
}