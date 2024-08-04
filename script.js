//your JS code here. If required.
document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const ageInput = document.getElementById('age').value;
  const nameInput = document.getElementById('name').value;

  // Validation to ensure inputs are not empty
  if (ageInput === '' || nameInput === '') {
    alert('Please fill out both fields.');
    return;
  }

  const age = parseInt(ageInput);
  const name = nameInput;

  // Promise to handle age validation
  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle promise resolution or rejection
  agePromise
    .then(message => alert(message))
    .catch(message => alert(message));
});
