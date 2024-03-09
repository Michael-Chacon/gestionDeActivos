import { getData } from "../../../Api/ApiActivos.js";
import { deleteData } from "../../../Api/ApiActivos.js";
import { getOneData } from "../../../Api/ApiActivos.js";
import { updateData } from "../../../Api/ApiActivos.js";
import { guardarDatos } from "../../../js/app.js";
import { actualizarDatos } from "../../../js/app.js";

export class AddStatus extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.datosFormulario();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <section class="form">
    <section id="notificacion">
    </section>
    <form action="#" id="formulario">
      <label for="name">Agregar un nuevo estado</label>
      <input
        type="text"
        name="name"
        class="tarea"
        id="name"
        required
        placeholder="Nombre del estado"
      />
      <div class="botones">
        <span class="btn cancelar">Cancelar</span>
        <input class="btn guardar" type="submit" value="Registrar tarea" ></input>
      </div>
    </form>
  </section>
    `;
  }
  datosFormulario() {
    const input = document.querySelector("#name");
    const formulario = document.querySelector("#formulario");
    const btnGuardar = document.querySelector(".guardar");
    const seccionNotificacion = document.querySelector("#notificacion");
    btnGuardar.addEventListener("click", async (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      guardarDatos(formulario, "status");

      const notificacion = document.createElement("SECTION");
      notificacion.classList.add("notificacion");
      const mensaje = document.createElement("P");
      mensaje.textContent = "Estado registrado con éxito";
      notificacion.appendChild(mensaje);
      seccionNotificacion.appendChild(notificacion);
      console.log("New");
      setTimeout(() => {
        seccionNotificacion.removeChild(notificacion);
      }, 3000);
      input.value = "";
    });
  }
}

class EditStatus extends HTMLElement {
  constructor() {
    super();
    this.endpoint = this.getAttribute("endPoint");
    this.render();
    this.showStatus();
    this.buscador();
  }

  render() {
    this.innerHTML = `
    ${this.endpoint}
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <section id="notificacion">
    </section>
    <section class="header-estado">
      <form action="#" class="formulario-header">
      <input type="text" name="name" class="busqueda" placeholder="Buscar por el id  o nombre del estado" required>
      <button type="submit" class="buscar-item"><i class='bx bx-search'></i>Buscar</button>
      </form>
    </section>   
    <section class="error"></section>
    <section class="input-item">
    <form action="#" class="actulizar-item">
      <label for="estado">
        Nombre estado:
      </label>
        <input type="text" id="estado"  name="status" required>
        <input type="text" id="ide"  name="ide"  hidden>
        <br>  
      <button type="submit" class="btn-actualizar">Actulizar</button>
    </form>
  </section> 
  <h2 class="titulo"></h2>
  <section class="main-estado"></section>
    `;
  }
  buscador() {
    console.log(this.endpoint);
    const btnBuscar = document.querySelector(".buscar-item");
    const input = document.querySelector("#estado");
    const ide = document.querySelector("#ide");
    btnBuscar.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const textoABuscar = document.querySelector(".busqueda").value;
      console.log(textoABuscar);
      const estados = await getData(this.endpoint);
      console.log(estados);
      const busqueda = textoABuscar.trim();
      let result = estados.filter(
        (estado) =>
          estado.name.toLowerCase().startsWith(busqueda.toLowerCase()) ||
          estado.id.toLowerCase().startsWith(busqueda.toLowerCase())
      );
      const vacio = document.querySelector(".error");

      input.value = "";
      console.log(result);
      if (result.length === 1) {
        input.value = result[0].name;
        ide.value = result[0].id;
        vacio.innerHTML = "";
      } else {
        vacio.innerHTML = "No se encontraron resultados para su busqueda";
      }
    });

    const getForm = document.querySelector(".actulizar-item");
    getForm.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const datos = new FormData(getForm);
      const objetoDatos = Object.fromEntries(datos);
      console.log(objetoDatos.ide);
      const objeto = {
        name: objetoDatos.status,
      };
      updateData(objeto, this.endpoint, objetoDatos.ide);
      const inputEstado = document.querySelector("#estado");
      inputEstado.value = "";
      const idBusqueda = document.querySelector("#ide");
      idBusqueda.value = "";
      const seccionNotificacion = document.querySelector("#notificacion");
      const notificacion = document.createElement("SECTION");
      notificacion.classList.add("notificacion");
      const mensaje = document.createElement("P");
      mensaje.textContent = "Actualizado con éxito";
      notificacion.appendChild(mensaje);
      seccionNotificacion.appendChild(notificacion);
      console.log("New");
      setTimeout(() => {
        seccionNotificacion.removeChild(notificacion);
      }, 3000);
      setTimeout(async () => {
        await this.showStatus();
      }, 100);
    });
  }

  async showStatus() {
    const datosDiv = this.querySelector(".main-estado");
    const titulo = document.querySelector(".titulo");
    datosDiv.innerHTML = "";
    titulo.innerHTML = `${this.endpoint} registrados`;
    const datos = await getData("status");
    if (datos.length != 0) {
      datos.forEach((dato) => {
        datosDiv.innerHTML += `
      <div class="card-estado">
      <p class="titulo-estado">${dato.name}</p>
      <p><small class="item-estado">Id: </small>${dato.id}</p>
    </div>
      `;
      });
    } else {
      datosDiv.innerHTML += `
    <div class="card-estado">
    <p class="titulo-estado">No hay estados registrados</p>
  </div>
    `;
    }
  }
}

class TablaEstados extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.detectarClick();
    this.datosFormulario();
    this.actualizarEstado();
    this.modal();
    this.buscador();
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
    <section class="header-estado">
    <div>
    <button class="mostrar-modal"><i class="bx bx-plus"></i> Registrar estado</button>
    </div>
    <form action="#" class="formulario-header">
    <input type="text" name="name" class="busqueda" placeholder="Buscar...">
    </form>
    <p>Status <i class='bx bx-pulse'></i></p>
  </section>
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

  buscador() {
    const buscador = document.querySelector(".busqueda");
    const datosDiv = this.querySelector(".main-estado");
    buscador.addEventListener("input", async (e) => {
      const estados = await getData("status");
      datosDiv.innerHTML = "";
      const busqueda = e.target.value.trim();
      const result = estados.filter((estado) =>
        estado.name.toLowerCase().startsWith(busqueda.toLowerCase())
      );
      if (result.length != 0) {
        result.forEach((dato) => {
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
      } else {
        datosDiv.innerHTML += `
        <div class="card-estado">
        <p class="titulo-estado">Estado no encontrado</p>
      </div>
        `;
      }
    });
  }

  // datosFormulario() {
  //   const input = document.querySelector("#name");
  //   const formulario = document.querySelector("#formulario");
  //   const btnGuardar = document.querySelector(".guardar");
  //   btnGuardar.addEventListener("click", async (e) => {
  //     e.stopImmediatePropagation();
  //     e.preventDefault();
  //     if (btnGuardar.value === "Registrar tarea") {
  //       guardarDatos(formulario, "status");
  //       console.log("New");
  //     } else if (btnGuardar.value === "Actualizar") {
  //       const id = btnGuardar.id;
  //       actualizarDatos(formulario, "status", id);
  //       btnGuardar.value = "Registrar tarea";
  //       console.log("Update");
  //     }
  //     const dialog = document.querySelector("dialog");
  //     dialog.close();
  //     input.value = "";
  //     setTimeout(async () => {
  //       await this.renderUpdatedData();
  //     }, 100);
  //   });
  // }

  async renderUpdatedData() {
    const datosDiv = this.querySelector(".main-estado");
    datosDiv.innerHTML = "";
    const datos = await getData("status");
    if (datos.length != 0) {
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
    } else {
      datosDiv.innerHTML += `
    <div class="card-estado">
    <p class="titulo-estado">No hay estados registrados</p>
  </div>
    `;
    }
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
          deleteData(id, "status");
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
        const estado = await getOneData(id, "status");
        const dialog = document.querySelector("dialog");
        const btnGuardar = document.querySelector(".guardar");
        btnGuardar.value = "Actualizar";
        btnGuardar.id = estado.id;
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

// customElements.define("tabla-estados", TablaEstados);
customElements.define("agregar-estado", AddStatus);
customElements.define("editar-estado", EditStatus);
