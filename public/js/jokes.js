// create 2 get (post?) requests, one for selecting one by id, and the other for selecting all dad jokes (redirect both to /jokes?)

const allDadJokes = async () => {
    const response = await fetch('/api/jokes', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({dad_joke})
    });
    const jokes = await response.json();

    return jokes;
}

document.addEventListener('DOMContentLoaded', async () => {
    let jokes = [];
    try {
        jokes = await allDadJokes();
    }
    catch(err) {
        console.log(err);
    }
});

