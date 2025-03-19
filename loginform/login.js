document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  // password hide and show function 

  const showPasswordCheckbox = document.getElementById('loginPasswordChekcbox');
  const loginPassword = document.querySelector('.login-password');
  showPasswordCheckbox.checked = false;
  loginPassword.type = 'password';

  showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
      loginPassword.type = 'text';
    } else {
      loginPassword.type = 'password';
    }
  });

  // form validation 

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('.login-email').value;
    const password = loginPassword.value;

    // Get data from local storage
    const retrievedData = localStorage.getItem(email);

    clearErrors();
    // Validate data
    if (retrievedData) {
      const userData = JSON.parse(retrievedData);
      if (userData.signupFirstPassword === password) {
        alert("Login successfully.");
      } else {
        document.querySelector('.login-password-error').textContent = "Wrong Password";
      }
    } else {
      document.querySelector('.login-email-error').textContent = "Email not found";
    }

    // Clear error messages
    function clearErrors() {
      document.querySelectorAll('.login-error-msg').forEach(error => {
        error.textContent = "";
      });
    }

    form.reset();
  });
});
