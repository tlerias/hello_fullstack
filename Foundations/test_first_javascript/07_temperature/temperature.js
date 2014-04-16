function f2c(tempF){
	return (tempF - 32) * (5/9)
}

function c2f(tempC){
	return (tempC * (9/5)) + 32
}

function Temperature(temp){
  var f = temp;
  var c;
  this.fahrenheit = function(){
    if (f === undefined){
       return f = c2f(c);
    }
    return f;
  };
  this.celcius = function(){
    if (c === undefined){
       return c = f2c(f);
    }
    return c;
  };

  this.setFahrenheit = function(fahrenheitDegrees){
    f = fahrenheitDegrees
  }
  this.setCelcius = function(celciusDegrees){
    c = celciusDegrees;
  }

}

