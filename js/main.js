var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var bgPic = new Image();

var lastTime;
var deltaTime;

var ane;

var fruit;

var mom;
var momBodyOrg = [];
var momBodyBlue = [];
var bigTail = [];
var bigEye = [];

var baby;
var babyTail = [];
var babyEye = [];
var babyBody =[];

var data;

var mx;
var my;

var wave;

var halo;

var dust;
var dustPic = [];

document.body.onload = game();

function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//获取canvas context
	can1 = document.getElementById("canvas1");   //fishes , dust , UI, circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");   //background , ane , fruits
	ctx2 = can2.getContext('2d');
	
	ctx1.textAlign = "center"
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src = "img/background.jpg";
	
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	for(var i=0; i<8; i++){
		bigTail[i] = new Image();
		bigTail[i].src = "./img/bigTail" + i + ".png"
		momBodyOrg[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrg[i].src = "img/bigSwim" + i + ".png"
		momBodyBlue[i].src = "img/bigSwimBlue" + i + ".png"
	}
	for(var i=0; i<2; i++){
		bigEye[i] = new Image();
		bigEye[i].src = "img/bigEye" + i + ".png";
	}
	
	baby = new babyObj();
	baby.init();
	for(var i=0; i<8; i++){
		babyTail[i] = new Image();
		babyTail[i].src = "./img/babyTail" + i + ".png"
	}
	for(var i=0; i<2; i++){
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png"
	}
	for(var i=0; i<20; i++){
		babyBody[i] = new Image();
		babyBody[i].src = "img/babyFade" + i + ".png"
	}
	
	data = new dataObj();
	data.reset();
	
	wave = new waveObj();
	wave.init();
	
	halo = new haloObj();
	halo.init();
	
	dust = new dustObj;
	dust.init();
	for(var i=0; i<7; i++){
		dustPic[i] = new Image();
		dustPic[i].src = "img/dust" + i + ".png";
	}
	
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
}

function gameloop(){
	window.requestAnimationFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	
	if(deltaTime > 40) deltaTime = 40 ;
	
	drawBackground();
	
	ane.draw();
	
	fruit.draw();
	fruitMonitor();
	
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	
	data.draw();
	
	wave.draw();
	
	halo.draw();
	
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offsetX || e.layerX){
			mx = e.offsetX == undefined ? e.layerX : e.offsetX;
			my = e.offsetY == undefined ? e.layerY : e.offsetY;
		}
	}
}

