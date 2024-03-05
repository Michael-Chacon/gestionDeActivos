const URL_BASE = "http://localhost:3000";

const headers = new Headers({
  "Content-Type": "application/json",
});

async function getData(endpoint) {
  try {
    const response = await fetch(`${URL_BASE}/${endpoint}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else if (response.status === 404) {
      console.log("El servidor no pudo encontrar el contenido solicitado");
    } else {
      console.log(
        "El servidor ha encontrado una situación que no sabe cómo manejarla"
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function postData(data, endpoint) {
  try {
    fetch(`${URL_BASE}/${endpoint}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}

function updateData(data, endpoint, id) {
  try {
    fetch(`${URL_BASE}/${endpoint}/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}

async function getOneData(id, endpoint) {
  try {
    const response = await fetch(`${URL_BASE}/${endpoint}/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else if (response.status === 404) {
      console.log("El servidor no pudo encontrar el contenido solicitado");
    } else {
      console.log(
        "El servidor ha encontrado una situación que no sabe cómo manejarla"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
