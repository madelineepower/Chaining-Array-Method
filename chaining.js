console.log("hi");
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chaining = integers
.sort(function(x, y){
  return x - y
}).reverse().filter(function(num){
  return num <= 19
}).map(function(num){
  return (num * 1.5) - 1
}).reduce(function(x, y){
  return x + y;
});

console.log("Sum of the resulting numbers", chaining);
