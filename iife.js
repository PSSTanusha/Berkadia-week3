
var val = (function(){
     var a = 0;  // in the scope of this function
     return function(x){
         a += x;
         return a;
     };
})();

console.log(val(10)); 
console.log(val(11)); 


output:
C:\Users\tanus\.vscode\extensions>node iife.js
10
21
