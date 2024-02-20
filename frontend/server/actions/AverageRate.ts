
export const getAverageRate = async function (id: number): Promise<string | void> {
  const data = {
    'id': id//0
  };

  return fetch('http://localhost:8000/api/getting-average', {
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
        return data.msg3;
    })
    .catch((err) => {
        console.log("ERROR: " + err);
    })
};


export const updateAverageRate = async function (id: number, newRating: number, preRating: number, isFirstRating: boolean): Promise<string | void> {
  const data = {
    'id': id,
    'newRating': newRating,
    'preRating': preRating,
    'isFirstRating': isFirstRating
  };

  return fetch('http://localhost:8000/api/updating-rate', {
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
        return data.msg2;
    })
    .catch((err) => {
        console.log("ERROR: " + err);
    })
};

