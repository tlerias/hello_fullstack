var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;
var applyAndEmpty = function(num, queue) { 
  while (queue.length > 0) { 
  var size = queue.length; 
  for (var i = 0; i < size; i++) { 
    num = queue.shift()(num); 
  } 
  return num; 
}; 
alert(applyAndEmpty(start, puzzlers));