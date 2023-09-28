// Retrieve the form and input container element
const form = document.getElementById('dynamicForm');
const inputContainer = document.getElementById('inputContainer');

// Add event listener for form submission
form.addEventListener('submit', function(evt) {
  // Prevent the default form submission behavior
  evt.preventDefault();

  // Call the validateForm function to check if all fields are filled
  const isValid = validateForm(form);

  // Display error message if form is invalid
  const errorElem = document.getElementById('error');
  if (!isValid) {
    errorElem.textContent = 'Please fill in all fields.';
  } else {
    errorElem.textContent = '';
    // Allow form submission
    form.submit();
  }
});

// Add event listener for dropdown menu change
const numFieldsSelect = document.getElementById('numFields');
numFieldsSelect.addEventListener('change', function() {
  // Call the generateInputFields function to create dynamic input fields
  const numFields = numFieldsSelect.value;
  generateInputFields(numFields);
});

// Function to generate dynamic input fields
function generateInputFields(numFields) {
  // Clear the input container
  inputContainer.innerHTML = '';

  // Create the desired number of input fields
  for (let i = 1; i <= numFields; i++) {
    const inputElem = document.createElement('input');
    inputElem.type = 'text';
    inputElem.name = `field${i}`;
    inputElem.placeholder = `Field ${i}`;
    inputContainer.appendChild(inputElem);
  }
}

// Function to validate form before submission
function validateForm(form) {
  let isValid = true;

  // Check if all input fields are filled
  const inputElems = inputContainer.getElementsByTagName('input');
  for (let i = 0; i < inputElems.length; i++) {
    if (inputElems[i].value.trim() === '') {
      isValid = false;
      break;
    }
  }

  return isValid;
}
