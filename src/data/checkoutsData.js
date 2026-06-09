const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const editCheckout = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
    })
}