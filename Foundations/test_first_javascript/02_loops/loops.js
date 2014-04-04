function repeat(input, number) {
	var word = "";
	if (number > 0){
		for (var i = 0; i < number; i++) {
			word += input;
		}
		return word
	}
	else{
		return ""
	}

}

function join(array, delimiter) {
	var oneBigWord = "";
	if (array.length > 0) {
		for (var j = 0; j < array.length; j++) {
				oneBigWord += array[j];
				if (delimiter && j<array.length-1) {
					oneBigWord += delimiter;
				}
			
		}
		return oneBigWord.toString()
	}
	else{
		return ""
	}

}

function sum(array) {
	var sum = 0;
	for (var k = 0; k < array.length; k++) {
				sum += array[k];
			
		}
	return sum

}

function paramify(hash) {
	var output = [];
	for (var item in hash){
		if (hash.hasOwnProperty(item))
			output.push(item + "=" + hash[item]);
	}
	
	output.sort();
	var sorted = output.join('&');
	return sorted		
	
}

function factorial(num){
	var product = 0;
	if (num ==  0){
		return 1
	}
	else{
		return num * factorial(num - 1);
	}

}

function concat_string(){
	var args = Array.prototype.slice.call(arguments);
	return args.join(""); 

}
