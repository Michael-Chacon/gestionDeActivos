import { getData } from "../../../Api/ApiActivos.js";
import { updateData } from "../../../Api/ApiActivos.js";
import { deleteData } from "../../../Api/ApiActivos.js";
import { guardarDatos, llenarSelect } from "../../../js/app.js";
export class AddProveedor extends HTMLElement {
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

export class EditProveedor extends HTMLElement {
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

export class DeleteProveedor extends HTMLElement {
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
      const proveedores = await getData("suppliers");
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
            <p class="titulo-estado">${result[0].name}</p>
            <p><small class="item-estado">${result[0].email}</small></p>
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
              deleteData(id, "suppliers");
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

customElements.define("agregar-persona", AddProveedor);
customElements.define("editar-persona", EditProveedor);
customElements.define("eliminar-persona", DeleteProveedor);
