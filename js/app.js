import "/App/webComponents/menu.js";
import "/App/webComponents/footer.js";
import "/App/webComponents/activos/tabla.js"
import "/App/webComponents/marcas/tabla.js"
import "/App/webComponents/personas/tabla.js"
import "/App/webComponents/proveedores/tabla.js"
import "/App/webComponents/estados/tabla.js"
import "/App/webComponents/tipoPersonas/tabla.js"
import "/App/webComponents/tipoMovActivo/tabla.js"
import "/App/webComponents/tipoActivo/tabla.js"

let nav = document.querySelector(".nav");
let menu = document.querySelector("#tituloMenu");
document.querySelector("#btnMenu").addEventListener("click", function () {
  nav.classList.toggle("active");
  menu.classList.toggle("hidden");
});
