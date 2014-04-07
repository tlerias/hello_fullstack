function Calculator(){
	this.total = 0;
}

Calculator.prototype = {
	value: function() {
		 return this.total
	},
	
	add: function(num){
		 this.total += num
	},

	subtract: function(num){
		 this.total -= num
	}
}

