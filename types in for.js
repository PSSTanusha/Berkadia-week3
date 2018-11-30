//Basic for loop can be used for different purposes
for (let i = 0; i < 10; i++) { 
    console.log("for loop");
}

// for each can only be used on Arrays, Maps, and Sets.
const arr = ['cat', 'dog', 'fish'];
arr.forEach(element => {
    console.log(element);
  });


  //for in is used for object
  const obj = {  
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }
  //Here we can also use strings and array as both of them are objects in javascript
  for (let elem in obj) {  
    console.log( obj[elem] )
  }

  let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}