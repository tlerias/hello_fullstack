function Calculator(){
	// i would make a separate array and a separate total for now
	total = [0];
	totalSum = 0;
	// so instead of putting something on the prototype you can put it straight on calculator itself, so you could do it like this...
}

Calculator.protoype = {
	value: function(){
		return this.total[this.total.length - 1];
	},

	add: function(x){
		this.push(x);
		this.plus();
	},

	plus: function(){
		return this.total.push(this.total.pop()  + this.total.pop());
	},

	push: function(num){

		this.total.push(num);

	},
	pop: function(){
		var value = this.total.pop();
		if (typeof(value) == 'undefined') {
			throw "calculator is empty";
		}
		return value;

	}
}


	// check out this link http://www.meta-calculator.com/learning-lab/reverse-polish-notation-calculator.php this should be a better visual on rpns
