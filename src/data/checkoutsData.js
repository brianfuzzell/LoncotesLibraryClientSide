const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const editCheckout = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
};

export const createCheckout = (checkout) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(checkout),
  }).then((res) => res.json());
};

export const getOverdueCheckouts = () => {
  return fetch(`${_apiUrl}/overdue`).then((r) => r.json());
}
