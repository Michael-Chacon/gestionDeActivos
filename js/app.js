import "/App/webComponents/main/main.js";
import "/App/webComponents/menu.js";
import "/App/webComponents/footer.js";
import "/App/webComponents/categoriaActivo/categoriaActivo.js";
import "/App/webComponents/activos/activos.js";
import "/App/webComponents/marcas/marcas.js";
import "/App/webComponents/personas/personas.js";
import "/App/webComponents/proveedores/proveedores.js";
import "/App/webComponents/estados/estado.js";
import "/App/webComponents/tipoPersonas/tipoPersonas.js";
import "/App/webComponents/tipoMovActivo/tipoMovActivo.js";
import "/App/webComponents/tipoActivo/tipoActivo.js";
import { postData } from "../../../Api/ApiActivos.js";
import { updateData } from "../../../Api/ApiActivos.js";

export function guardarDatos(formulario, endpoint) {
  const getDataForm = new FormData(formulario);
  const data = Object.fromEntries(getDataForm);
  postData(data, endpoint);
}

export function actualizarDatos(formulario, endpoint, id) {
  const getDataForm = new FormData(formulario);
  const data = Object.fromEntries(getDataForm);
  updateData(data, endpoint, id);
}
