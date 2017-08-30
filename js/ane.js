var aneObj = function(){
	//start point, control point, end point(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = []; //振幅
	this.alpha = 0;
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	for(var i = 0;i < this.num; i++){
		this.rootx[i] = i *16 + Math.random()* 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 220 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 50;
	}
}

//	绘制海葵需要用到的API
//	beginPath（） 方法开始一条路径或重置当前路径。
//	closePath（） 创建从当前点回到起始点的路径。
//	strokestyle（） 设置或返回用于笔触的颜色、渐变或模式。
//	stroke（） 绘制已定义的路径。
//	linewidth（）设置或返回当前的线条宽度。
//	linecap（）设置或返回线条的结束端点样式。
//	globalAlpha 透明度
aneObj.prototype.draw = function(){
	this.alpha += deltaTime * 0.0006;  
	var l = Math.sin(this.alpha);// [-1 , 1]
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e"
	for(var i = 0; i<this.num; i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight)
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i])
		ctx2.stroke();
	}
	ctx2.restore();
}
