
// create a post request to be handled in the add-joke handlebar (redirect to /jokes page once request/response are successful)

const { response } = require("express");

async function createJoke(event) {
  event.preventDefault();
  //  Get info that we need
  const body = document.querySelector("#Textarea").value.trim();

  if (body) {
    const response = await fetch("/api", {

      async function createJoke(event) {
      event.preventDefault();
      alert('create')
  //  Get info that we need
  const dad_joke = document.querySelector("#dad_joke").value.trim();

      if(dad_joke) {
        const response = await fetch("/api/jokes", {

          method: "POST",
          body: JSON.stringify({
            dad_joke: dad_joke,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
  if(response.ok){
        document.location.replace("/jokes");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.create-form')
  .addEventListener('submit', createJoke)