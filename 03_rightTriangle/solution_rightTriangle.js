function rightTriangle(num){
	var str = "";

	if(num == 0)
		return str;

	for (var i = num; i > 0; i--){
		for (var j = i; j > 0; j--){
			str += "*";
		}
		str += "\n";
	}

	return str.substr(0,str.length - 1);
}

//Great. For readability, please use braces {} after if statements
