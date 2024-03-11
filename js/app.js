import "/App/webComponents/main/main.js";
import "/App/webComponents/activos/activos.js";
import "/App/webComponents/personas/personas.js";
import "/App/webComponents/proveedores/proveedores.js";
import "/App/webComponents/estados/estado.js";
import { postData, updateData, getData } from "../../../Api/ApiActivos.js";

export function guardarDatos(formulario, endpoint) {
  const getDataForm = new FormData(formulario);
  const data = Object.fromEntries(getDataForm);
  console.log(data);
  postData(data, endpoint);
}

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

export function actualizarDatos(formulario, endpoint, id) {
  const getDataForm = new FormData(formulario);
  const data = Object.fromEntries(getDataForm);
  updateData(data, endpoint, id);
}
