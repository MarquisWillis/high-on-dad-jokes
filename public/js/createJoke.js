const { response } = require("express");

async function createJoke(event) {
  event.preventDefault();
  //  Get info that we need
  const body = document.querySelector("#Textarea").value.trim();

  if (body) {
    const response = await fetch("/api", {
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
  }else{
 alert(response.statusText);
    }
  }

document
  .querySelector('.create-form')
  .addEventListener('submit', createJoke)