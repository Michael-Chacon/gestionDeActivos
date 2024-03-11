import { getData, getOneData } from "../../../Api/ApiActivos.js";

export class CreateAsignacion extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.buscar();
    this.mostrar();
  }
  render() {
    this.innerHTML = /* html */ `
    <link rel="stylesheet" href="App/webComponents/activos/activos.css">

    <section class="formulario">
    <section class="header-estado">
      <form action="#" class="formulario-header">
        <input
          type="search"
          name="name"
          class="busqueda"
          id="busqueda"
          placeholder="Buscar por el id  o nombre"
          required
        />
        <button type="button" class="buscar-item">
          <i class="bx bx-search"></i>Buscar
        </button>
      </form>
    </section>
    <div class="padreNotificacion">
    </div>
    <br>
    <small>Lista de personas que actualmente no tienen habilitada la opción para recibir asignaciones de activos.</small>
    <section class="main-content">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <!-- <th>Email</th> -->
            <th>Tipo persona</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tabla">
          <tr>
            <td>3rd2</td>
            <td>Duván Camilo Arenas Arenas</td>
            <!-- <td>DuvanArenas@gmail.com</td> -->
            <td>Natural</td>
            <td>
              <button class="eliminar-activo" id="id">
                Habilitar asignaciones
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
    
    `;
  }
  async buscar() {
    const btnBuscar = document.querySelector(".buscar-item");
    btnBuscar.addEventListener("click", async (e) => {
      const busqueda = document.querySelector("#busqueda").value;
      const proveedores = await getData("people");
      let result = proveedores.filter(
        (item) =>
          item.name.toLowerCase().startsWith(busqueda.toLowerCase()) ||
          (item.id.startsWith(busqueda.toLowerCase()) && item.enabled === "no")
      );
      var notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");

      const tabla = document.querySelector("#tabla");
      if (result.length === 1) {
        tabla.innerHTML = "";
        console.log("here");
        const tipoPersona = await getOneData(
          result[0].typoPersonId,
          "typePeople"
        );
        tabla.innerHTML += ` 
        <tr>
          <td>${result[0].id}</td>
          <td>${result[0].name}</td>
          <td>${tipoPersona.name}</td>
          <td> <button class="eliminar-activo" id="id">
          Habilitar asignaciones
        </button></td>
        </tr>`;

        // Eliminar
        tabla.addEventListener("click", (e) => {
          if (e.target.classList.contains("ver-detalle")) {
            const idActivo = e.target.id;
            console.log(idActivo + "funciona el click");
          }
        });
      } else {
        tabla.innerHTML = "";
        p.classList.add("notificacionFail");
        p.innerHTML = "Lo que buscas no existe";
        notificacion.appendChild(p);
        tabla.innerHTML = "";
        this.mostrar();
        setTimeout(() => {
          notificacion.removeChild(p);
        }, 3000);
      }
    });
  }

  async mostrar() {
    const tabla = document.querySelector("#tabla");
    const proveedores = await getData("people");
    const sinPermisos = proveedores.filter((item) => item.enabled === "no");
    sinPermisos.forEach(async (result) => {
      const tipoPersona = await getOneData(result.typoPersonId, "typePeople");
      tabla.innerHTML += ` 
        <tr>
          <td>${result.id}</td>
          <td>${result.name}</td>
          <td>${tipoPersona.name}</td>
          <td> <button class="eliminar-activo" id="id">
          Habilitar asignaciones
        </button></td>
        </tr>`;
    });
  }
}

export class AssignAsset extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = "Hola desde asignar asignacion";
  }
}

export class ReturnActive extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = "Hola desde retornar asignacion";
  }
}

customElements.define("crear-asignacion", CreateAsignacion);
customElements.define("asignar-asignacion", AssignAsset);
customElements.define("retornar-asignacion", ReturnActive);
