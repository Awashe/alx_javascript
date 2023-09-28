// Retrieve the form element
const form = document.getElementById('submitForm');

// Add an event listener to listen for the "submit" event
form.addEventListener('submit', handleFormSubmit);

// Define the handleFormSubmit function
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Retrieve the values entered in the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Perform validation by checking if all required fields are filled
  if (name === '' || email === '') {
    // Display an error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please fill in all required fields';
    errorMessage.classList.add('error');
    form.appendChild(errorMessage);
  } else {
    // Display a success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.classList.add('success');
    form.appendChild(successMessage);
  }
}