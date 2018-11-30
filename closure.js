function makeAdder(x) {
    return function(y) {
        //Here we are using the outer function parameter i.e x
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12