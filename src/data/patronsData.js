const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a patron by id
export const getPatron = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const editPatron = (id, patron) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patron)
    })
};

export const createPatron = (patron) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patron),
  }).then((res) => res.json());
};
