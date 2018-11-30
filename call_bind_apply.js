var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
  
  person.hello("world");  // output: "James Smith says hello world"
  person.hello.call({ name: "Jim Smith" }, "world");


  var person1 = {  
    name1: "James Smith",
    hello1: function(thing1) {
      console.log(this.name1 + " says hello " + thing1);
    }
  }  
  person1.hello1("world");  
  var helloFunc = person1.hello1.bind({ name1: "Jim Smith" });
  helloFunc("world");


  function personContainer() {
    var person2 = {  
       name2: "James Smith",
       hello2: function() {
         console.log(this.name2 + " says hello " + arguments[1]);
       }
    }
    person2.hello2.apply(person2, arguments);
  }
  personContainer("world", "mars");


output:
C:\Users\tanus\.vscode\extensions>node call_bind_apply.js
James Smith says hello world
Jim Smith says hello world
James Smith says hello world
Jim Smith says hello world
James Smith says hello mars
