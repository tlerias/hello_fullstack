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

	forEach(array, function(element) {
		startVal = combo(startVal, element);
	});
	return startVal

}

var countWordsInReduce = function (startCount, wordArray){
	return startCount + countWords(wordArray)
}; //i'm not sure why this worked

function sum(ints){
	return reduce(ints, 0 , function(a, b){
		return a + b;
	});

}

function every(array, func){
	for (var i = 0; i < array.length; i++){
		if(!func(array[i])){
			return false
		}

	}
	return true

}

function any(collection, testFunc){
	if (typeof testFunc === "undefined"){
		testFunc = function(item){
			return item
		}
	}
	return reduce(collection, false, function(isTrue, item) {
		if (isTrue){
			return true;
		}
		return testFunc(item);
	});
}

function once(func){
	var sum = 0;
	return function(){
		if (sum == 0){
			func();
		}
		sum++;
	}
}

function wrapper(func, funcWrap){
	return function(){
		return funcWrap(func)
	}
}



