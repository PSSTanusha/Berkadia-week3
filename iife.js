
var val = (function(){
     var a = 0;  // in the scope of this function
     return function(x){
         a += x;
         return a;
     };
})();

console.log(val(10)); //10
console.log(val(11)); 