const endpoint = process.env.REACT_APP_API_ENDPOINT;

export async function listImages() {
  const path = `${endpoint}/images`;
  return fetch(path, { method: 'GET' }).then((response) => {
    return response.json().then((jsonResponse) => {
      return jsonResponse.images;
    });
  });
};

export async function addImage(url) {
  const path = `${endpoint}/images`;
  const body = { url: url }
  return fetch(path, { method: 'POST', body: JSON.stringify(body) }).then((response) => {
    return response.json().then((jsonResponse) => {
      return jsonResponse;
    });
  });
};

export async function deleteImage(id) {
  const path = `${endpoint}/images`;
  const body = { id: id }
  return fetch(path, { method: 'DELETE', body: JSON.stringify(body) });
};
