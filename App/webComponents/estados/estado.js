import {
  getData,
  deleteData,
  getOneData,
  updateData,
} from "../../../Api/ApiActivos.js";
import { guardarDatos } from "../../../js/app.js";

export class AddStatus extends HTMLElement {
  constructor() {
    super();
    this.endpoint = this.getAttribute("endPoint");
    this.render();
    this.datosFormulario();
  }

  render() {
    this.innerHTML = /*html*/ `
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <section class="form">
    <section id="notificacion">
    </section>
    <form action="#" id="formulario">
      <label for="name">Agregar uno nuevo</label>
      <input
        type="text"
        name="name"
        class="tarea"
        id="name"
        required
      />
      <div class="botones">
        <span class="btn cancelar">Cancelar</span>
        <button class="btn guardar" type="submit" value="Agregar" >Agrdegar</button>
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
      const notificacion = document.createElement("SECTION");
      const mensaje = document.createElement("P");
      if (input.value === "") {
        notificacion.classList.add("notificacionF");
        mensaje.textContent = "El input está vacío";
      } else {
        guardarDatos(formulario, this.endpoint);
        notificacion.classList.add("notificacion");
        mensaje.textContent = "Estado registrado con éxito";
        input.value = "";
      }
      notificacion.appendChild(mensaje);
      seccionNotificacion.appendChild(notificacion);
      console.log("New");
      setTimeout(() => {
        seccionNotificacion.removeChild(notificacion);
      }, 3000);
    });
    const btnCancelar = document.querySelector(".cancelar");
    btnCancelar.addEventListener("click", (e) => {
      input.value = "";
    });
  }
}

export class EditStatus extends HTMLElement {
  constructor() {
    super();
    this.endpoint = this.getAttribute("endPoint");
    this.render();
    this.showStatus();
    this.buscador();
  }

  render() {
    this.innerHTML = `
    
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <section id="notificacion">
    </section>
    <section class="header-estado">
      <form action="#" class="formulario-header">
      <input type="text" name="name" class="busqueda" placeholder="Buscar por id  o nombre" required>
      <button type="submit" class="buscar-item"><i class='bx bx-search'></i>Buscar</button>
      </form>
    </section>   
    <section class="error"></section>
    <section class="input-item">
    <form action="#" class="actulizar-item">
      <label for="estado">
        Nombre:
      </label>
        <input type="text" id="estado"  name="status" required>
        <input type="text" id="ide"  name="ide"  hidden>
        <br>  
      <button type="submit" class="btn-actualizar">Actualizar</button>
    </form>
  </section> 
  <h2 class="titulo"></h2>
  <section class="main-estado"></section>
    `;
  }
  buscador() {
    var formularioHeader = document.querySelector(".formulario-header");
    const btnBuscar = document.querySelector(".buscar-item");
    const input = document.querySelector("#estado");
    const ide = document.querySelector("#ide");
    btnBuscar.addEventListener("click", async (e) => {
      const textoABuscar = document.querySelector(".busqueda").value;
      if (textoABuscar.trim() === "") {
        alert("El input está vacío");
      } else {
        e.preventDefault();
        e.stopPropagation();
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
        if (result.length === 1) {
          input.value = result[0].name;
          ide.value = result[0].id;
          vacio.innerHTML = "";
        } else {
          vacio.innerHTML = "No se encontraron resultados para su busqueda";
          setTimeout(() => {
            vacio.innerHTML = "";
          }, 4000);
        }
        formularioHeader.reset();
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
    titulo.innerHTML = `Registros`;
    const datos = await getData(this.endpoint);
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

export class DeleteData extends HTMLElement {
  constructor() {
    super();
    this.endpoint = this.getAttribute("endPoint");
    this.render();
    this.eliminar();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <section id="notificacion">
    </section>
    <section class="header-estado">
    <form action="#" class="formulario-header">
    <input type="text" name="name" class="busqueda" placeholder="Buscar por id  o nombre" required>
    <button type="submit" class="buscar-item"><i class='bx bx-search'></i>Buscar</button>
    </form>
  </section>   
  <section class="error"></section>
  <section class="main-estado"></section>
    `;
  }

  eliminar() {
    const btnBuscar = document.querySelector(".buscar-item");
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

      console.log(result);
      const datosDiv = this.querySelector(".main-estado");
      datosDiv.innerHTML = "";
      if (result.length === 1) {
        datosDiv.innerHTML += `
          <div class="card-estado">
          <p class="titulo-estado">${result[0].name}</p>
          <p><small class="item-estado">Id: </small>${result[0].id}</p>
          <div class="opciones-estado">
            <button class="eliminar" id="${result[0].id}"><i class="bx bx-trash"></i>Eliminar</button>
          </div>
        </div>
          `;

        // const datosDiv = document.querySelector(".main-estado");
        datosDiv.addEventListener("click", (e) => {
          if (e.target.classList.contains("eliminar")) {
            const pregunta = confirm(
              "¿Está seguro de que quiere borrar este estado?"
            );
            if (pregunta) {
              const id = e.target.id;
              deleteData(id, this.endpoint);
              datosDiv.innerHTML = "";
              const seccionNotificacion =
                document.querySelector("#notificacion");
              const notificacion = document.createElement("SECTION");
              notificacion.classList.add("notificacion");
              const mensaje = document.createElement("P");
              mensaje.textContent = "Eliminado con éxito";
              notificacion.appendChild(mensaje);
              seccionNotificacion.appendChild(notificacion);
              console.log("New");
              setTimeout(() => {
                seccionNotificacion.removeChild(notificacion);
              }, 3000);
            }
          }
        });
      } else {
        datosDiv.innerHTML += `
        <div class="card-estado">
        <p class="titulo-estado">No se encontraron resultados</p>
      </div>
        `;
      }
    });
  }
}

export class SearchData extends HTMLElement {
  constructor() {
    super();
    this.endpoint = this.getAttribute("endPoint");
    this.render();
    this.mostrar();
    this.buscar();
  }
  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/estados/buscar.css">
    <div class="container-busqueda">
    <section class="header-busqueda">
      <form action="#" class="formulario-header">
        <input
          type="text"
          name="name"
          class="busqueda"
          placeholder="Buscar por el id  o nombre"
          required
        />
        <button type="button" class="buscar-item">
          <i class="bx bx-search"></i>Buscar
        </button>
      </form>
    </section>
  </div>
  <section class="error"></section>
  <section class="main-contenido">
  </section>
    `;
  }

  buscar() {
    var formularioHeader = document.querySelector(".formulario-header");
    const btnBuscar = document.querySelector(".buscar-item");
    btnBuscar.addEventListener("click", async (e) => {
      const textoABuscar = document.querySelector(".busqueda").value;
      if (textoABuscar.trim() === "") {
        alert("El input está vacío");
      } else {
        e.preventDefault();
        e.stopPropagation();
        const estados = await getData(this.endpoint);
        const busqueda = textoABuscar.trim();
        let result = estados.filter(
          (estado) =>
            estado.name.toLowerCase().startsWith(busqueda.toLowerCase()) ||
            estado.id.toLowerCase().startsWith(busqueda.toLowerCase())
        );
        const vacio = document.querySelector(".error");
        const datosDiv = this.querySelector(".main-contenido");
        if (result.length === 1) {
          datosDiv.innerHTML = "";
          datosDiv.innerHTML += `
          <div class="card">
            <p class="titulo-contenido">${result[0].name}</p>
            <p><small class="item">Id: </small>${result[0].id}</p>
          </div>
          `;
          vacio.innerHTML = "";
        } else {
          vacio.innerHTML = "No se encontraron resultados para su busqueda";
          datosDiv.innerHTML = "";
          this.mostrar();
          setTimeout(() => {
            vacio.innerHTML = "";
          }, 4000);
        }
        formularioHeader.reset();
      }
    });
  }

  async mostrar() {
    const datosDiv = this.querySelector(".main-contenido");
    // datosDiv.innerHTML = "";
    const datos = await getData(this.endpoint);
    if (datos.length != 0) {
      datos.forEach((dato) => {
        datosDiv.innerHTML += `
      <div class="card">
        <p class="titulo-contenido">${dato.name}</p>
        <p><small class="item">Id: </small>${dato.id}</p>
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

// customElements.define("tabla-estados", TablaEstados);
customElements.define("agregar-generico", AddStatus);
customElements.define("editar-generico", EditStatus);
customElements.define("eliminar-generico", DeleteData);
customElements.define("buscar-generico", SearchData);
