function countWords(sentence){
	var sentenceArray = sentence.split(" ");
	return sentenceArray.length;
}


function makeAdder(a){
	return function add(b){
		return a + b
	}
}

function forEach(array, func){
	for (var i = 0; i < array.length; i++){
		func(array[i]);
	}
}

function map(array, toDo){
	var result = [];
	forEach(array, function(elem){
		result.push(toDo(elem));
	});
	return result

}

function filter(collection, func){
	result = [];
	for (var key in collection){
		if (func(collection[key]) == true){
			result.push(collection[key])
		}
	}
	return result
}

function contains(collection, val){
	for (item in collection){
		if (collection[item] == val){
			return true
		}
	}
	return false

}

function reduce(array, startVal, combo){
	var sum = 0;

	for (var i = startVal; i < array.length; i++){
		sum = combo(sum, array[i]);
	}
	return sum

}

var countWordsInReduce = function (one, array){
	return one + countWords(array)
}; //i'm not sure why this worked

function sum(ints){
	return reduce(ints, 0 , function(a, b){
		return a + b;
	});

}

function every(array, func){
	if (func()){
		return true
	}
	return false
}


