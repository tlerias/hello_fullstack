function translate(string){
	var ay = "ay"
	
	if (/[aeiouAEIOU]/.test(string[0])){
		return string.concat(ay)

	}
	else if (/[bcdfghjklmnpqrstvwxz]/.test(string[0].toLowerCase())){
		var arrString = string.split('');
		for (var i = 0; i <= arrString.length; i++){
			if (/[bcdfghjklmnpqrstvwxz]/.test(arrString[0].toLowerCase())){
				arrString.push(arrString.shift());

			}
		else {

			break;
		}
}

		string = arrString.join('');
		return string.concat(ay)
	}

}
translate("apple");
translate("banana");
translate("cherry");
translate("eat pie");
translate("three");
translate("quiet");
translate("square");
translate("the quick brown fox");