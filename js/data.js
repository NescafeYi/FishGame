var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.draw = function(){
	var width = can1.width;
	var height = can1.height;
	
	ctx1.save();
	ctx1.fillStyle = "white";
	ctx1.font = "14px Verdana";
	
	ctx1.fillText("num: "+ this.fruitNum, width*0.5, height - 50);
	ctx1.fillText("double: " + this.double, width*0.5, height - 80);
	ctx1.fillText("score: " + this.score, width*0.5, height - 20);
	
	if(data.gameOver){
		this.alpha += deltaTime * 0.0003;
		if(this.alpha > 1) this.alpha = 1;
		ctx1.font = "30px Verdana";
		ctx1.shadowBlur = 20;
		ctx1.shadowColor = "white";
		ctx1.fillStyle = "rgba(255,255,255,"+ this.alpha +")"
		ctx1.fillText("GAME OVER", width*0.5, height*0.4)	
	}
	ctx1.restore();
}
dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 10 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}
