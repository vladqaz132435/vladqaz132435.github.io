

	var gameRight;
	var x=450, y=200;



var keys = {
	'W':87,
	'S':83,
	'A':65,
	'D':68
};

var keyDown = {};

var setKey = function(keyCode){
	keyDown[keyCode]= true;
};

var clearKey= function(keyCode){
	keyDown[keyCode]= false;
};

var gameEngine = function() {
	
	if (typeof engine == 'function'){
		engine();
	}
	else
		document.body.innerHTML='не определено';
	requestAnimationFrame(gameEngine);
	
	
};



var isKeyDown = function(keyName) {
	return keyDown[keys[keyName]] == true;
};
window.onload = function() {
	
	window.onkeydown= function(e) {
		setKey(e.keyCode);
	};
	
	window.onkeyup= function(e) {
		clearKey(e.keyCode);
	};
	
	gameEngine();
};
