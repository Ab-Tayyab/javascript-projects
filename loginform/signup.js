document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form')

    // password hide and unhide 
    const showPasswordCheckbox = document.getElementById('signupPasswordCheckbox');
    const signupPassword = document.querySelector('.signup-fPassword');
    const signupRePassword = document.querySelector('.signup-rPassword');
    showPasswordCheckbox.checked = false;
    signupPassword.type = 'password';
    signupRePassword.type = 'password'

    showPasswordCheckbox.addEventListener('change', () => {
        if (showPasswordCheckbox.checked) {
            signupPassword.type = 'text';
        } else {
            signupPassword.type = 'password';
        }

        if (showPasswordCheckbox.checked) {
            signupRePassword.type = 'text';
        } else {
            signupRePassword.type = 'password';
        }
    });

    // form validation 
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const signupFirstName = document.querySelector('.signupForm-fName').value;
        const signupLastName = document.querySelector('.signupForm-lName').value;
        const signupEmail = document.querySelector('.signupForm-email').value;
        const signupFirstPassword = document.querySelector('.signup-fPassword').value;
        const signupReEnterPassword = document.querySelector('.signup-rPassword').value;

        // if field is empty then show error 
        clearErrors();
        let valid = true;

        if (!signupFirstName) {
            document.querySelector('.fName-error').textContent = " Please Enter First Name.";
            valid = false;
        }
        if (!signupLastName) {
            document.querySelector('.lName-error').textContent = " Please Enter last Name.";
            valid = false;
        }
        if (!validateEmail(signupEmail)) {
            document.querySelector('.email-error').textContent = " Please Enter valid Email.";
            valid = false;
        }
        if (!validatePassword(signupFirstPassword)) {
            document.querySelector('.fPassword-error').textContent = " Please Enter Valid Password.";
            valid = false;
        }
        if (!signupReEnterPassword) {
            document.querySelector('.rPassword-error').textContent = " Please Enter Valid Password.";
            valid = false;
        }

        if (signupFirstPassword !== signupReEnterPassword) {
            document.querySelector('.rPassword-error').textContent = "Password Do Not Match.";
            valid = false;
        }

        // if data valid then save in local storage 

        if (valid) {
            const userData = { signupFirstName, signupLastName, signupEmail, signupFirstPassword, signupReEnterPassword }
            localStorage.setItem(signupEmail, JSON.stringify(userData));
            console.log('User registered:', userData);
            signupForm.reset();
            alert("Form Submitted");

        }

        // function for clear all error message 
        function clearErrors() {
            document.querySelectorAll('.error-msg').forEach(error => error.textContent = '');
        }

        // function for email validation 

        function validateEmail(signupEmail) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(signupEmail);
        }
        // function for password validation 

        function validatePassword(signupFirstPassword) {
            const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
            return regex.test(signupFirstPassword);
        }
    })

})