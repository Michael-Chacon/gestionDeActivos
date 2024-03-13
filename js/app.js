import "/App/webComponents/main/main.js";
import "/App/webComponents/activos/activos.js";
import "/App/webComponents/personas/personas.js";
import "/App/webComponents/proveedores/proveedores.js";
import "/App/webComponents/estados/estado.js";
import "/App/webComponents/asignaciones/asignaciones.js";
import "/App/webComponents/asignaciones/asignarActivo.js";
import { postData, updateData, getData } from "../../../Api/ApiActivos.js";

/**
 * Guarda los datos de un formulario en un servidor utilizando una petición POST.
 * @param {HTMLFormElement} formulario - El formulario del cual se obtienen los datos.
 * @param {string} endpoint - La URL a la cual se enviarán los datos.
 * @returns {Promise<void>} Una promesa que se resuelve cuando se completa la operación de guardado.
 */
export function guardarDatos(formulario, endpoint) {
  const getDataForm = new FormData(formulario);
  const data = Object.fromEntries(getDataForm);
  console.log(data);
  postData(data, endpoint);
}

/**
 * Llena un elemento select con datos obtenidos de un endpoint.
 * @param {string} endpoint - La URL del endpoint para obtener los datos.
 * @param {HTMLElement} padre - El elemento padre donde se agregarán las opciones del select.
 * @param {number|null} id - (Opcional) El ID de la opción que se debe seleccionar inicialmente. Si es null, ninguna opción se seleccionará inicialmente.
 * @returns {Promise<void>} Una promesa que se resuelve una vez que se han agregado las opciones al select.
 */
export async function llenarSelect(endpoint, padre, id = null) {
  const datos = await getData(endpoint);
  if (id == null) {
    datos.forEach((item) => {
      const opcion = document.createElement("option");
      opcion.value = item.id;
      opcion.textContent = item.name;
      padre.appendChild(opcion);
    });
  } else {
    datos.forEach((item) => {
      const opcion = document.createElement("option");
      if (item.id === id) {
        opcion.selected = true;
      }
      opcion.value = item.id;
      opcion.textContent = item.name;
      padre.appendChild(opcion);
    });
  }
}

/**
 * Actualiza los datos utilizando los valores de un formulario y realiza una solicitud a un endpoint específico.
 * @param {HTMLFormElement} formulario - El formulario del cual se extraen los datos.
 * @param {string} endpoint - La URL del endpoint al que se enviarán los datos.
 * @param {string} id - El identificador único asociado a los datos que se están actualizando.
 */
export function actualizarDatos(formulario, endpoint, id) {
  const getDataForm = new FormData(formulario);
  const data = Object.fromEntries(getDataForm);
  updateData(data, endpoint, id);
}
