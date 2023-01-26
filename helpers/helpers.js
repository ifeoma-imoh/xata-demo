const handleRequest = (action, values) => {
  fetch(`/api/${action}Review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(() => window.location.reload())
    .catch((error) => {
      console.log(error);
      alert("an error occurred, try again");
    });
};

module.exports = handleRequest;
