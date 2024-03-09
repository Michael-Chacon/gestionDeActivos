import { guardarDatos } from "../../../js/app.js";
export class Proveedor extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.registrar();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/proveedores/proveedor.css">
        <section class="formulario">
      <form action="#" id="formulario">
        <div class="inputs">
          <laber>Nombre: </laber>
          <input type="text" name="name" id="name" class="form-input" required/>
        </div>
        <div class="inputs">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" class="form-input" required/>
        </div>
        <button type="submit" class="btn-registrarF">Registrar</button>
        <div class="padreNotificacion">
        </div>
      </form>
    </section>
        `;
  }

  registrar() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      guardarDatos(formulario, "suppliers");
      const inputName = document.querySelector("#name");
      const inputEmail = document.querySelector("#email");
      inputName.value = "";
      inputEmail.value = "";

      const notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");
      p.classList.add("notificacionF");
      p.innerHTML = "Registrado con éxito";
      notificacion.appendChild(p);
      setTimeout(() => {
        notificacion.removeChild(p);
      }, 3000);
    });
  }
}

customElements.define("agregar-proveedor", Proveedor);
