const host =
  "https://react-cv-417bb-default-rtdb.europe-west1.firebasedatabase.app/";

async function request(method, url, data) {
  const options = {
    method: method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    const result = await response.json();
  
    return result;
  } catch (error) {
    throw new Error(error);
  }

 
}

export const get = request.bind(null, "GET");

export const post = request.bind(null, "POST");

export const put = request.bind(null, "PUT");

export const del = request.bind(null, "DELETE");
