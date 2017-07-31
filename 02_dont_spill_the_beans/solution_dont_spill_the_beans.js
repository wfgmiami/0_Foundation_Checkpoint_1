function dontSpillTheBeans(secret){
	var obj = {};
	var code = secret;

	obj.getSecret = function(){
		return code;
	}

	obj.setSecret = function(newSecret){
		code = newSecret;
	}

	return obj;
}

/*
Nice job, but there's no need to save the parameter 'secret' in a var code. All parameters are available as local variables.



function dontSpillTheBeans(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
}


*/
