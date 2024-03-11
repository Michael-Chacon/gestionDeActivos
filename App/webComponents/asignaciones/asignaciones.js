import {
  getData,
  getOneData,
  updateData,
  postData,
} from "../../../Api/ApiActivos.js";

export class CreateAsignacion extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.mostrar();
    this.detectarClick();
  }
  render() {
    this.innerHTML = /* html */ `
    <link rel="stylesheet" href="App/webComponents/activos/activos.css">

    <section class="formulario">
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
            <th>Tipo persona</th>
            <th>Habilitar</th>
          </tr>
        </thead>
        <tbody id="tabla">
        </tbody>
      </table>
    </section>
  </section>
    
    `;
  }

  async mostrar() {
    const tabla = document.querySelector("#tabla");
    tabla.innerHTML = "";
    const persona = await getData("people");
    const sinPermisos = persona.filter((item) => item.enabled === "no");
    sinPermisos.forEach(async (result) => {
      const tipoPersona = await getOneData(result.typoPersonId, "typePeople");
      tabla.innerHTML += ` 
        <tr>
          <td>${result.id}</td>
          <td>${result.name}</td>
          <td>${tipoPersona.name}</td>
          <td> <button class="hacer-asignacion" id="${result.id}">
          Habilitar asignaciones
        </button></td>
        </tr>`;
    });
  }

  detectarClick() {
    const areaEvento = document.querySelector(".main-content");
    areaEvento.addEventListener("click", async (e) => {
      if (e.target.classList.contains("hacer-asignacion")) {
        let pregunta = confirm(
          "¿Está seguro que quiere habilitar a esta persona para recibir activos de CampusLands?"
        );
        if (pregunta) {
          const idPersona = e.target.id;
          //Obtener la persona y cambiar enabled a SI
          const datos = await getOneData(idPersona, "people");
          datos.enabled = "si";
          const padreNotificacion =
            document.querySelector(".padreNotificacion");
          updateData(datos, "people", idPersona);

          // Crear asignación

          // Obtener la fecha actual
          var fechaActual = new Date();
          var dia = fechaActual.getDate();
          var mes = fechaActual.getMonth() + 1;
          var año = fechaActual.getFullYear();
          var fechaFormateada = dia + "/" + mes + "/" + año;

          let obt = {
            date: fechaFormateada,
            responsibleId: idPersona,
          };
          postData(obt, "assignments");
          const p = document.createElement("P");
          p.classList.add("notificacionF");
          p.textContent = "Habilitación realizada con éxito";
          padreNotificacion.appendChild(p);
          setTimeout(() => {
            padreNotificacion.removeChild(p);
          }, 3000);
          setTimeout(() => {
            this.mostrar();
          }, 10);
        } else {
          console.log("Denegado");
        }
      }
    });
  }
}

export class AssignAsset extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.buscar();
  }
  render() {
    this.innerHTML = `
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
      <section class="main-content">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Tipo persona</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="tabla">
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
          (item.name.toLowerCase().startsWith(busqueda.toLowerCase()) ||
            item.id.startsWith(busqueda)) &&
          item.enabled === "si"
      );
      console.log(result);
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
          <td class="estado-activo">${result[0].email}</td>
          <td>${tipoPersona.name}</td>
          <td><button class="ver-detalle" id="${result[0].id}">Hacer asignación</button></td>
        </tr>`;

        // Eliminar
        tabla.addEventListener("click", (e) => {
          if (e.target.classList.contains("ver-detalle")) {
            const idPersona = e.target.id;
            const MAIN = document.querySelector(".main");
            MAIN.innerHTML = `<asigar-un-activo idPersona='${idPersona}'></asigar-un-activo>`;
          }
        });
      } else {
        tabla.innerHTML = "";
        p.classList.add("notificacionFail");
        p.innerHTML =
          "La persona a la que busca no existe o no está habilitada para recibir activos ";
        notificacion.appendChild(p);
        tabla.innerHTML = "";
        setTimeout(() => {
          notificacion.removeChild(p);
        }, 4000);
      }
    });
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
