function Mammal(name){
  this.name = name;
  this.offspring = [];

}

Mammal.prototype = {
  sayHello: function(){
    return "My name is " + this.name + ", I'm a Mammal";
  },
  haveBaby: function(){
    var babyName = "Baby " + this.name;
    var baby = new Mammal(babyName);
    this.offspring.push(baby);
    return baby;
  }
}

function Cat(name, color){
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