function Calculator(){
	this.total = [0];
	// so instead of putting something on the prototype you can put it straight on calculator itself, so you could do it like this...

	this.push = function(num){

		this.total.push(num)
	}


}

Calculator.protoype = {
	value: function(){
		return this.total[this.total.length - 1]
	},

	add: function(x){
		this.total.push(x);
		this.plus();
	},

	push: function(){
		this.total.push(x);
	},

	plus: function(y){
		return this.total.push(this.total.pop()  + this.total.pop())
	}

}

// I think my confusion here is why I'm getting a "TypeError: Object #<Calculator> has no method 'push'"
// error. Isn't this.total an array?

// it is an array but this is looking for a 'push' method on Calculator itself not just an Array? Does that make sense?

// yes definitely. 

// how would i go about making this?