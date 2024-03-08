import { getData } from "../../../Api/ApiActivos.js";
import { deleteData } from "../../../Api/ApiActivos.js";
import { getOneData } from "../../../Api/ApiActivos.js";
import { guardarDatos } from "../../../js/app.js";
import { actualizarDatos } from "../../../js/app.js";

class ComponenTipoMovActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    this.datosFormulario();
    this.actualizarEstado();
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
    const btnGuardar = document.querySelector(".guardar");
    console.log(formulario);
    btnGuardar.addEventListener("click", async (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      if(btnGuardar.value === "Registrar tarea"){
        guardarDatos(formulario, "typeMovAssets");
        console.log("New")
      }else if (btnGuardar.value === "Actualizar"){
        const id = btnGuardar.id
        actualizarDatos(formulario, "typeMovAssets", id)
        btnGuardar.value = "Registrar tarea"
        console.log("Update")
      }
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
    const datos = await getData("typeMovAssets");
    datos.forEach((dato) => {
      datosDiv.innerHTML += `
      <div class="card-estado">
      <p class="titulo-estado">${dato.name}</p>
      <p><small class="item-estado">Id: </small>${dato.id}</p>
      <div class="opciones-estado">
        <button class="editar" id="${dato.id}"><i class='bx bx-edit-alt'></i>Editar</button>
        <button class="eliminar" id="${dato.id}"><i class="bx bx-trash"></i>Eliminar</button>
      </div>
    </div>
      `;
    });
  }

  detectarClick() {
    const areaPrincipal = document.querySelector(".main-estado");
    areaPrincipal.addEventListener("click", (e) => {
      if (e.target.classList.contains("eliminar")) {
        const pregunta = confirm(
          "¿Está seguro de que quiere borrar este estado?"
        );
        if (pregunta) {
          const id = e.target.id;
          deleteData(id, "typeMovAssets");
          setTimeout(async () => {
            await this.renderUpdatedData();
          }, 100);
        }
      }
    });
  }

  actualizarEstado() {
    const areaPrincipal = document.querySelector(".main-estado");
    areaPrincipal.addEventListener("click", async (e) => {
      if (e.target.classList.contains("editar")) {
        const id = e.target.id;
        const estado = await getOneData(id, "typeMovAssets");
        const dialog = document.querySelector("dialog");
        const btnGuardar = document.querySelector(".guardar");
        btnGuardar.value = "Actualizar";
        btnGuardar.id = estado.id
        const input = document.querySelector("#name");
        input.value = estado.name;
        dialog.showModal();
      }
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
      const input = document.querySelector("#name");
      input.value = "";
      dialog.close();
    });
  }
}

customElements.define('tabla-tipo-mov-activo', ComponenTipoMovActivo)