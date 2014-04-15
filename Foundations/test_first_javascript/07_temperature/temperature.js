function f2c(tempF){
	return (tempF - 32) * (5/9)
}

function c2f(tempC){
	return (tempC * (9/5)) + 32
}

function Temperature(temp){
  var tempF = temp;
	this.fahrenheit = function(temp){
		t = temp;
	},
  this.setFahrenheit = function(temp){
		f = temp;
		}
	}

}

