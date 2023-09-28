// Retrieve the form and email input element
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');

// Add event listener for form submission
form.addEventListener('submit', function(evt) {
  // Prevent the default form submission behavior
  evt.preventDefault();

  // Call the validateEmail function to check email format
  const email = emailInput.value;
  const isValid = validateEmail(email);

  // Display error message if email is invalid
  const errorElem = document.getElementById('error');
  if (!isValid) {
    errorElem.textContent = 'Please enter a valid email address.';
  } else {
    errorElem.textContent = '';
    // Allow form submission
    form.submit();
  }
});

// Function to validate email format
function validateEmail(email) {
  // Simple email format check using regular expression
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}