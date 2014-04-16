var Mammal = function(name){
  // var this = Object.create(Mammal.prototype)
  this.name = name;
  this.offspring = [];
  //return this (implicit)
};

Mammal.prototype = {
  sayHello: function(){
    return "My name is " + this.name + ", I'm a " this.type;
  },
  haveBaby: function(){
    var baby = this.constructor("Baby " + this.name);
    this.offspring.push(baby);
    return baby;
  }
}

function Cat(name, color){
  // var this = Object.create(Cat.prototype)
  Mammal.call(this, name);
  this.color = color;
}
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype = {
  haveBaby: function(color){
  var catBaby = Mammal.prototype.haveBaby.call(this);
  catBaby.color = color;
  return catBaby;
  }
}