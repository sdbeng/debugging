//Write a function here to display "Hello World" on the console
function sayHello(){
    console.log("Hello World")
  }
  sayHello()
  //Write another function here that will print "Hello World" to the console every 3 seconds
  function doSomething(){
    setInterval(sayHello, 3000)
  }
  doSomething()