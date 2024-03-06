import "/App/webComponents/menu.js";
import "/App/webComponents/footer.js";
import "/App/webComponents/activos/tabla.js"

let nav = document.querySelector(".nav");
let menu = document.querySelector("#tituloMenu");
document.querySelector("#btnMenu").addEventListener("click", function () {
  nav.classList.toggle("active");
  menu.classList.toggle("hidden");
});
