function Calculator() {
	this.total = [0];
};

Calculator.prototype = {
	value: function(){
		return this.total[this.total.length - 1];
	},

	add: function(x){
		this.push(x);
		this.plus();
	},

	plus: function(){
		this.total.push(this.pop()  + this.pop());
	},

	minus: function(){
		var val1 = this.pop();
		var val2 = this.pop();

		this.total.push(val2 - val1);
	},

	divide: function(){
		var val1 = this.pop();
		var val2 = this.pop();

		this.total.push(val2 / val1);
	},

	times: function(){
		this.total.push(this.pop() * this.pop())
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
