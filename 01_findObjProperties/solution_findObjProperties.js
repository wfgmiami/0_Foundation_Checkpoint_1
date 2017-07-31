function findObjPropsHasOwn(obj){
	var keys = [];

	for (var key in obj){
		if (obj.hasOwnProperty(key))
			keys.push(key)
	}
	return keys.join(", ");
}

function Rectangle(color, h, w){
	this.color = color;
	this.height = h;
	this.width = w;
}

function findObjKeys(obj){
	return Object.keys(obj).join(", ");
}

//perfect
