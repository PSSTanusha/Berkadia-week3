var out=setTimeout(fun1,9000);
function fun1()
{
    console.log("Reached Timeout");
    //set interval stops execution after the timeout
    clearInterval(interval);
}


var interval=setInterval(fun2,1000);
function fun2()
{
    console.log("will be called until it reaches timeout");
}

setImmediate(()=>{
     console.log("will be called immmediately after execution");
});


output:
C:\Users\tanus\.vscode\extensions>node time.js
will be called immmediately after execution
will be called until it reaches timeout
will be called until it reaches timeout
will be called until it reaches timeout
will be called until it reaches timeout
will be called until it reaches timeout
will be called until it reaches timeout
will be called until it reaches timeout
will be called until it reaches timeout
Reached Timeout
