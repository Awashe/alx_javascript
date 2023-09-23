function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
  
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    displayFullName();
  }
  
  welcome('Holberton', 'School'); // Output: "Welcome Holberton School!"
  alert(fullName); // ReferenceError: fullName is not defined