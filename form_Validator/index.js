const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//Email Validation

function isValidEmail(email){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email.value); 
  } 

//Adding event listener to the button
form.addEventListener('submit', function(e){
    
    e.preventDefault();
    console.log(username.value);

    if(username.value === ''){
       showError(username, 'Username is required');
      
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    }
    else if(!isValidEmail(email)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Password Confirmation  is required');
    }
    else{
        showSuccess(password2);
    }
});
