var haloObj = function(){
	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];
}

haloObj.prototype.num = 1;
haloObj.prototype.init = function(){
	for(var i= 0; i<this.num; i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

haloObj.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "red";
	for(var i=0; i<this.num; i++){
		if(this.alive){
			this.r[i] += deltaTime * 0.05;
			if(this.r[i] > 60){
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / 60;
			//draw
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(255, 0, 0,"+ alpha +")";
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

haloObj.prototype.born = function(x,y){
	for(var i=0; i<this.num; i++){
		if(!this.alive[i]){
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			return;
		}
	}
}
