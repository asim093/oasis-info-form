
let signUpUsername;
let signUpPassword;

document.getElementById('signUpButton').addEventListener('click', function () {
    
    signUpUsername = document.getElementById('signupUsername').value;
    signUpPassword = document.getElementById('signupPassword').value;


   
    showSignUpSuccess();
});

document.getElementById('signInButton').addEventListener('click', function () {
   
    const signInUsername = document.getElementById('signInUsername').value;
    const signInPassword = document.getElementById('signInPassword').value;

    
    if (signInUsername === signUpUsername && signInPassword === signUpPassword) {
        showSignInSuccess();
    } else {
        showInvalidCredentials();
    }
});

function showSignUpSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Sign Up Successful!',
        text: 'You have successfully signed up!',
        confirmButtonText: 'OK'
    }).then(() => {
        toggleForms(); 
    });
}

function showSignInSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Sign In Successful!',
        text: 'You have successfully signed in!',
        confirmButtonText: 'OK'
    });
}

function showInvalidCredentials() {
    Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Please check your username and password and try again.',
        confirmButtonText: 'OK'
    });
}

function toggleForms() {
    var signUpForm = document.querySelector('.signup');
    var signInForm = document.querySelector('.signin');

    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
}
