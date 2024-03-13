const URL_BASE = "http://localhost:3000";

const headers = new Headers({
  "Content-Type": "application/json",
});

/**
 * Obtiene datos de un endpoint específico.
 * @param {string} endpoint - El endpoint al que se enviará la solicitud.
 * @param {string} [embed=""] - Parámetro opcional para incrustar datos adicionales.
 * @returns {Promise<any>} Una promesa que se resolverá con los datos obtenidos del endpoint.
 */

export async function getData(endpoint, embed = "") {
  try {
    const response = await fetch(`${URL_BASE}/${endpoint}${embed}`);
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

/**
 * Realiza una solicitud POST a un punto final específico.
 * @param {Object} data - Los datos que se enviarán en la solicitud POST.
 * @param {string} endpoint - El punto final al que se enviarán los datos.
 * @returns {Promise<Response>} Una promesa que se resuelve con la respuesta de la solicitud POST.
 */
export function postData(data, endpoint) {
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

/**
 * Actualiza los datos en el servidor utilizando el método PUT.
 * @param {Object} data - Los datos que se van a actualizar.
 * @param {string} endpoint - El punto final (endpoint) al que se enviarán los datos.
 * @param {string} id - El identificador único del elemento que se va a actualizar.
 * @returns {Promise} Una promesa que se resuelve cuando la solicitud de actualización se completa.
 */
export function updateData(data, endpoint, id) {
  console.log(id);
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

/**
 * Obtiene un único conjunto de datos del servidor.
 * @param {string} id - El identificador del conjunto de datos que se desea obtener.
 * @param {string} endpoint - El punto final (endpoint) al que se realizará la solicitud.
 * @returns {Promise<object>} Un objeto que representa los datos obtenidos del servidor.
 * @throws {Error} Si ocurre algún error durante la solicitud.
 */
export async function getOneData(id, endpoint) {
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

/**
 * Elimina datos de un endpoint mediante una solicitud DELETE.
 * @param {string} id - El ID del dato que se va a eliminar.
 * @param {string} endpoint - El endpoint al que se va a realizar la solicitud DELETE.
 * @returns {Promise} Una promesa que se resuelve cuando se completa la solicitud DELETE.
 */
export function deleteData(id, endpoint) {
  try {
    fetch(`${URL_BASE}/${endpoint}/${id}`, {
      method: "DELETE",
      headers: headers,
    });
  } catch (error) {
    console.log(error);
  }
}
