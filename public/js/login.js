const loginFormHandler = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',       
            }
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
}

// add signup form handler
const signupFormHandler = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',       
            }
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);