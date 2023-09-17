const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  myObject.incr = function (){
    this.value++;
  }
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  
  // Remove the name property of the incr function
  Object.defineProperty(myObject.incr, 'name', { 
    value: '',
    writable: false,
    configurable: false
  });