function Rectangle(color, h, w){
	this.color = color;
	this.height = h;
	this.width = w;
}

Rectangle.prototype.getArea = function(){
	return this.height * this.width;
}

//Great
