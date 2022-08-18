const loginFormHandler = async function (e) {
    e.preventDefault();

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    const response = await fetch('/')
}