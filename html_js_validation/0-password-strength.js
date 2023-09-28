// Retrieve the form and password input element
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');

// Add event listener for form submission
form.addEventListener('submit', function(evt) {
  // Prevent the default form submission behavior
  evt.preventDefault();

  // Call the validatePassword function to check password strength
  const password = passwordInput.value;
  const isValid = validatePassword(password);

  // Display error message if password is invalid
  const errorElem = document.getElementById('error');
  if (!isValid) {
    errorElem.textContent = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
  } else {
    errorElem.textContent = '';
    // Allow form submission
    form.submit();
  }
});

// Function to validate password strength
function validatePassword(password) {
  // Check length
  if (password.length < 8) {
    return false;
  }

  // Check uppercase letters
  if (!password.match(/[A-Z]/)) {
    return false;
  }

  // Check lowercase letters
  if (!password.match(/[a-z]/)) {
    return false;
  }

  // Check numeric digits
  if (!password.match(/[0-9]/)) {
    return false;
  }

  // Check special characters
  if (!password.match(/[!@#$%^&*]/)) {
    return false;
  }

  // Password meets all criteria
  return true;
} 
