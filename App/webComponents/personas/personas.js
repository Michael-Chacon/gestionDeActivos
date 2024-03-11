import {
  getData,
  updateData,
  deleteData,
  getOneData,
} from "../../../Api/ApiActivos.js";
import { guardarDatos, llenarSelect } from "../../../js/app.js";

export class AddPeople extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.registrar();
    this.llenarCompo();
  }

  render() {
    this.innerHTML = /*html*/ `
    <link rel="stylesheet" href="App/webComponents/proveedores/proveedor.css">
        <section class="formulario">
      <form action="#" id="formulario">
        <div class="inputs">
            <label>Id: </label>
            <input type="text" name="id" id="id" class="form-input" required/>
        </div>
        <div class="inputs">
          <label>Nombre: </label>
          <input type="text" name="name" id="name" class="form-input" required/>
        </div>
        <div class="inputs">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" class="form-input" required/>
        </div>
        <div class="inputs">
          <label for="tipoPersona">Tipo persona:</label>
          <select name="typoPersonId" id="tipoPersona" class="form-input" required>
            <option></option>
          </select>
        </div>
        <button type="submit" class="btn-registrarF">Registrar</button>
        <div class="padreNotificacion">
        </div>
      </form>
    </section>
        `;
  }
  llenarCompo() {
    const tipoPersona = document.querySelector("#tipoPersona");
    llenarSelect("typePeople", tipoPersona);
  }

  registrar() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      guardarDatos(formulario, "people");
      formulario.reset();

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

export class EditPeople extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.buscar();
  }

  render() {
    this.innerHTML = /*html*/ `
    <link rel="stylesheet" href="App/webComponents/proveedores/proveedor.css">
      <section class="formulario">
        <section class="header-estado">
            <form action="#" class="formulario-header">
            <input
                type="text"
                name="name"
                class="busqueda"
                placeholder="Buscar por el id  o nombre "
                required
            />
            <button type="button" class="buscar-item">
                <i class="bx bx-search"></i>Buscar
            </button>
            </form>
        </section>

        <form action="#" id="formulario">
            <div class="inputs">
                <label>Id:<small> Solo lectura</small> </label>
                <input type="text" name="id" id="id" class="form-input" required readonly/>
            </div>
            <div class="inputs">
            <label>Nombre: </label>
            <input type="text" name="name" id="name" class="form-input" required/>
            </div>
            <div class="inputs">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" class="form-input" required/>
            </div>
            <div class="inputs">
            <label for="tipoPersona">Tipo persona:</label>
            <select name="typoPersonId" id="tipoPersona" class="form-input" required>
            </select>
            </div>
            <button type="submit" class="btn-registrarF">Registrar</button>
            <div class="padreNotificacion">
            </div>
        </form>
        </section>
          `;
  }

  buscar() {
    const btnBuscar = document.querySelector(".buscar-item");
    btnBuscar.addEventListener("click", async (e) => {
      const busqueda = document.querySelector(".busqueda").value;
      console.log(busqueda);
      const proveedores = await getData("people");
      let result = proveedores.filter(
        (item) =>
          item.name.toLowerCase().startsWith(busqueda.toLowerCase()) ||
          item.id.toLowerCase().startsWith(busqueda.toLowerCase())
      );

      const notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");

      if (result.length === 1) {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");

        const id = document.querySelector("#id");
        name.value = result[0].name;
        email.value = result[0].email;
        id.value = result[0].id;
        this.llenarCompo(result[0].typoPersonId);
        // Actulizar datos
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const datos = new FormData(formulario);
          const datosFormato = Object.fromEntries(datos);
          const { id, ...objeto } = datosFormato;
          updateData(objeto, "people", id);
          formulario.reset();
          const tipoPersona = document.querySelector("#tipoPersona");
          this.limpiarSelects(tipoPersona);
          p.classList.add("notificacionF");
          p.innerHTML = "Actualización exitosa";
          notificacion.appendChild(p);
          setTimeout(() => {
            notificacion.removeChild(p);
          }, 3000);
        });
      } else {
        p.classList.add("notificacionFail");
        p.innerHTML = "Lo que buscas no existe";
        notificacion.appendChild(p);
        setTimeout(() => {
          notificacion.removeChild(p);
        }, 3000);
      }
      console.log(result);
    });
  }

  llenarCompo(id) {
    const tipoPersona = document.querySelector("#tipoPersona");
    llenarSelect("typePeople", tipoPersona, id);
  }

  limpiarSelects(padre) {
    while (padre.firstChild) {
      padre.removeChild(padre.firstChild);
    }
  }
}

export class DeletePeople extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.eliminar();
  }
  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/proveedores/proveedor.css">
        <section class="formulario">
        <section class="header-estado">
          <form action="#" class="formulario-header">
            <input
              type="search"
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
        <div class="padreNotificacion">
      </div>
        <section class="main-content">
        </section>
      </section>
        `;
  }
  eliminar() {
    const btnBuscar = document.querySelector(".buscar-item");
    btnBuscar.addEventListener("click", async (e) => {
      const busqueda = document.querySelector(".busqueda").value;
      console.log(busqueda);
      const proveedores = await getData("people");
      let result = proveedores.filter(
        (item) =>
          item.name.toLowerCase().startsWith(busqueda.toLowerCase()) ||
          item.id.toLowerCase().startsWith(busqueda.toLowerCase())
      );

      const notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");

      const areaPrincipal = document.querySelector(".main-content");
      if (result.length === 1) {
        areaPrincipal.innerHTML = `
            <div class="card">
            <p class="item-estado"><small>id: </small>${result[0].id}</p>
            <p class="titulo-estado">${result[0].name}</p>
            <p>${result[0].email}</p>
            <div class="opciones-estado">
              <button class="eliminarp" id="${result[0].id}"><i class="bx bx-trash"></i>Eliminar</button>
            </div>
          </div>
            `;
        areaPrincipal.addEventListener("click", (e) => {
          if (e.target.classList.contains("eliminarp")) {
            const pregunta = confirm(
              "¿Está seguro de que quiere borrar este estado?"
            );
            if (pregunta) {
              const id = e.target.id;
              deleteData(id, "people");
              e.target.id = "";
              areaPrincipal.innerHTML = "";
              p.classList.add("notificacionF");
              p.innerHTML = "Eliminado con éxito";
              notificacion.appendChild(p);
              setTimeout(() => {
                notificacion.removeChild(p);
              }, 3000);
            }
          }
        });
      } else {
        p.classList.add("notificacionFail");
        p.innerHTML = "Lo que buscas no existe";
        areaPrincipal.innerHTML = "";
        notificacion.appendChild(p);
        setTimeout(() => {
          notificacion.removeChild(p);
        }, 5000);
      }
      console.log(result);
    });
  }
}

export class SearchPeople extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.mostrar();
    this.buscar();
  }
  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/activos/activos.css">
    <section class="formulario">
      <section class="header-estado">
        <form action="#" class="formulario-header">
          <input
            type="text"
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
        (item) => item.name.startsWith(busqueda) || item.id.startsWith(busqueda)
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
          <td class="estado-activo">${result[0].email}</td>
          <td>${tipoPersona.name}</td>
          <td><button class="ver-detalle" id="${result[0].id}">Ver perfil</button></td>
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
    proveedores.forEach(async (result) => {
      const tipoPersona = await getOneData(result.typoPersonId, "typePeople");
      tabla.innerHTML += ` 
        <tr>
          <td>${result.id}</td>
          <td>${result.name}</td>
          <td class="estado-activo">${result.email}</td>
          <td>${tipoPersona.name}</td>
          <td><button class="ver-detalle" id="${result.id}">Ver perfil</button></td>
        </tr>`;
    });
  }
}

customElements.define("agregar-persona", AddPeople);
customElements.define("editar-persona", EditPeople);
customElements.define("eliminar-persona", DeletePeople);
customElements.define("buscar-persona", SearchPeople);
