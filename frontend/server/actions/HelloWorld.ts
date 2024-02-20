// Make sure to follow REST methods: PUT, GET, POST, DELETE

export const getHelloWorld = async function (id: number): Promise<string | void> {
  const data = {
    'id': id
  };

  return fetch('http://localhost:8000/api/hello-world', {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // credentials: 'same-origin',
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then(data => {
        return data.myId;
    })
    .catch((err) => {
        console.log("ERROR: " + err);
    })
};
