fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

const request = new XMLHttpRequest();
request.open("POST", "https://jsonplaceholder.typicode.com/todos");
request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

const body = JSON.stringify({
  userId: 3,
  title: "Fix my bugs again",
  completed: false,
});

request.onload = () => {
  if (request.readyState == 4 && request.status == 201) {
    console.log(JSON.parse(request.responseText));
  } else {
    console.log(`Error: ${request.status}`);
  }
};

request.send(body);
