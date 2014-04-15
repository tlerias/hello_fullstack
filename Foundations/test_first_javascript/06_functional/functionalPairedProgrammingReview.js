function countWords(sentence){
  return sentence.split(" ").length;
}

function makeAdder(num1){
  return function(num2){
    return num1 + num2;
  }
}

function forEach(arr, action){
  for (var i = 0; i < arr.length; i++){
    action(arr[i]);
  }
}

function map(arr, action){
  var result = [];
  forEach(arr, function(elem){
    result.push(action(elem));
  });
  return result;
}

function filter(arr, action){
  var result = [];
  map(arr, function(elem){
    if(action(elem)){
      result.push(elem);
    };
  });
  return result;
}

function contains(arr, value){
  for(var i in arr){
    if (arr[i] === value){
      return true;
    }
  }
  return false;
}

function reduce(arr, startVal, comboFunc){
  var result = startVal;
  forEach(arr, function(elem){
    // var firstNum = arr.shift();
    // var secondNum = arr.shift();
    result = comboFunc(result, elem);
    // arr.push(result);
  });
  return result;
}

var countWordsInReduce = function (startCount, wordArray){
  return startCount + countWords(wordArray)
};

function sum(arr){
  return reduce(arr, 0, function(a, b){
    return a + b;
  })
}

function every(array, func){
  for (var i = 0; i < array.length; i++){
    if(!func(array[i])){
      return false;
    }
  }
  return true;

}

function any(arr, func){
  if (func !== undefined){
    for (var i = 0; i < arr.length; i++){
      if(func(arr[i]) === true){return true;}
    }
  } else{
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === true){return true;}
    }
  }
  return false;
}

function once(func){
  var counter = 0;
  return function(){
    if(counter === 0){
      counter++;
      return func();
    }
  };
}

var wrapper = function(innerFunc, wrapperFunc){
  return function(){return wrapperFunc(innerFunc)};
};