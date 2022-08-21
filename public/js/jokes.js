// create 2 get requests, one for selecting one by id, and the other for selecting all dad jokes (redirect both to /jokes?)

async function allDadJokes() {
  const response = await fetch(`/api/dad_jokes`, {
    method: "POST",
    body: JSON.stringify({ dad_jokes }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/jokes");
  } else {
    alert("Failed to load jokes");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  let jokes = [];
  try {
    jokes = await allDadJokes();
  } catch (e) {
    console.log("Error!");
    console.log(e);
  }
});
