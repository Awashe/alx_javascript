const myObject = {
    type: "object",
    value: 12,
  };
  
  function incr() {
    myObject.value++;
  }
  
  // Do not call the incr function here
  
  console.log(myObject);
  
  // Call the incr function here
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);