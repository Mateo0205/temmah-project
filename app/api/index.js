const endpoint = "";
const flight = [];

export const getFlight = () => {
  return fetch(endpoint)
  .then((response) => response.json());
};
console.log("reponse");
export const getFlightById = (id) => {
  return fetch(`${endpoint}/${id}`).then((response) => response.json());
};

export const createFlight = (data) => {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const updateFlight = (id, data) => {
  return fetch(`${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const deleteFlight = (id) => {
  return fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default flight;
