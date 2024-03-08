import { getData } from "../../../Api/ApiActivos.js";
import { guardarDatos } from "../../../js/app.js";

class TablaEstados extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.datosFormulario();
    this.modal();
  }

  render() {
    this.innerHTML = `
    <dialog >
      <section class="form">
        <form action="#" id="formulario">
          <label for="tarea">Tarea</label>
          <input
            type="text"
            name="name"
            class="tarea"
            id="name"
          />
          <div class="botones">
            <span class="btn cancelar">Cancelar</span>
            <input class="btn guardar" type="submit" value="Registrar tarea"></input>
          </div>
        </form>
      </section>
    </dialog>
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <button class="mostrar-modal"><i class="bx bx-plus"></i> Registrar estado</button>
    <section class="main-estado">
      <div class="card-estado">
        <p class="titulo-estado">En reparación y/oGarantia</p>
        <p><small class="item-estado">Id: </small>dd02</p>
        <div class="opciones-estado">
          <button class="editar"><i class='bx bx-edit-alt'></i>Editar</button>
          <button class="eliminar"><i class="bx bx-trash"></i>Eliminar</button>
        </div>
      </div>
    </section>`;
  }

  datosFormulario() {
    const input = document.querySelector("#name");
    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", async (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      guardarDatos(formulario, "status");
      const dialog = document.querySelector("dialog");
      dialog.close();
      input.value = "";
      setTimeout(async () => {
        await this.renderUpdatedData();
      }, 100);
    });
  }

  async renderUpdatedData() {
    const datosDiv = this.querySelector(".main-estado");
    datosDiv.innerHTML = "";
    const datos = await getData("status");
    datos.forEach((dato) => {
      datosDiv.innerHTML += `
      <div class="card-estado">
      <p class="titulo-estado">${dato.name}</p>
      <p><small class="item-estado">Id: </small>${dato.id}</p>
      <div class="opciones-estado">
        <button class="editar"><i class='bx bx-edit-alt'></i>Editar</button>
        <button class="eliminar"><i class="bx bx-trash"></i>Eliminar</button>
      </div>
    </div>
      `;
    });
  }

  connectedCallback() {
    this.renderUpdatedData(); // Renderizar los datos al cargar el componente
  }

  modal() {
    const dialog = document.querySelector("dialog");

    const btnMostrarModal = document.querySelector(".mostrar-modal");
    btnMostrarModal.addEventListener("click", () => {
      dialog.showModal();
    });
    const btnCerrarModal = document.querySelector(".cancelar");
    btnCerrarModal.addEventListener("click", () => {
      dialog.close();
    });
  }
}

customElements.define("tabla-estados", TablaEstados);
