//Declare a variable calld "counter" and set it to 0
let counter = 0
//Write a function that increments the variable "counter" by 1 every time it is called
function increment(){
  console.log(counter++)
}
//Schedule the execution log the function every 3 seconds
setInterval(increment, 3000)

// check final instructions