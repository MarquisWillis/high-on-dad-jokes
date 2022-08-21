// create a post request to be handled in the add-joke handlebar (redirect to /jokes page once request/response are successful)

const newFormHandler = async (event) => {
    event.preventDefault();

    const dadJoke = document.querySelector('#dad_joke').value.trim();

    if (dadJoke) {
        const response = await fetch('/api/dad_jokes', {
            method: 'POST',
            body: JSON.stringify({ dad_joke: dadJoke }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/jokes');
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector('.create-form')
    .addEventListener('submit', newFormHandler);