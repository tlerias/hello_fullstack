function Calculator(){
	this.total = [0];
}

Calculator.protoype = {
	value: function(){
		return this.total[this.total.length - 1]
	},

	add: function(x){
		this.total.push(x);
		this.plus();
	},

	plus: function(y){
		return this.total.push(this.total.pop()  + this.total.pop())
	}

}
