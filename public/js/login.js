const loginFormHandler = async function (e) {
    e.preventDefault();

    const emailInput = document.querySelector('#email').ariaValueMax.trim();
    const passwordInput = document.querySelector('#password').ariaValueMax.trim();

    if(emailInput&&passwordInput){
        const response = await fetch('/login',{
            method: 'POST',
            body: JSON.stringify({emailInput, passwordInput}),
            headers: {'Content-Type': 'application/json'},

        });

        if(response.ok){
            document.location.replace('/jokes');
        } else{
alert(response.statusText);
        }
    }
};

const signupForm = async (event) => {
event.preventDefault();

const name = docuemnt.querySelector(`#name`).value.trim();
const email = document.querySelector(`#email`).value.trim();
const password = document.querySelector(`#password`).value.trim();

if (name && email && password){
    const response = await fetch(`/login`,{
        method: 'POST',
        body: JSON.stringify({name,email,password}),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/jokes');
    }else{
        alert(response.statusTEXT);
    }
}

};

document
    .querySelector('form.form.login-form')
    .addEventListener('submit', loginFormHandler);

document 
    .querySelector('form.form.signup-form')
    .addEventListener('submit', signupForm);