//filter() method creates a new array with all elements that pass the test implemented by the provided function.
function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("filter() : " + passed );



//map() method creates a new array with the results of calling a provided function on every element in this array.
var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("map() : " + roots );  



//reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("reduce() : " + total ); 


output:
C:\Users\tanus\.vscode\extensions>node array_methods.js
filter() : 12,130,44
map() : 1,2,3
reduce() : 6
