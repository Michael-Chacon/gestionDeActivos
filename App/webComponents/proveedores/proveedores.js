import { getData, updateData, deleteData } from "../../../Api/ApiActivos.js";
import { guardarDatos } from "../../../js/app.js";

export class AddProveedor extends HTMLElement {
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

        <form action="#" id="formulario" class="inactive">
            <div class="inputs">
            <label>Nombre: </label>
            <input
                type="text"
                name="name"
                id="name"
                class="form-input name"
                required
            />
            </div>
            <div class="inputs">
            <label for="email">Email:</label>
            <input
                type="email"
                name="email"
                id="eamil"
                class="form-input email"
                required
            />
            </div>
            <input type="text" id="ide"  name="id" hidden />
            <button type="submit" class="btn-registrarF">Actualizar</button>
            
        </form>
        <div class="padreNotificacion">
            </div>
        </section>
          `;
  }

  buscar() {
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

      if (result.length === 1) {
        const name = document.querySelector(".name");
        const email = document.querySelector(".email");
        const idHidden = document.querySelector("#ide");
        
        name.value = result[0].name;
        email.value = result[0].email;
        idHidden.value = result[0].id;
        // Actulizar datos
        const formulario = document.querySelector("#formulario");
        formulario.style.display = 'block'
        // formulario.style.display = 'block'
        formulario.classList.add("active")
        formulario.addEventListener("submit", (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const datos = new FormData(formulario);
          const datosFormato = Object.fromEntries(datos);
          let idP = datosFormato.id;
          const objeto = {
            name: datosFormato.name,
            email: datosFormato.email,
          };
          updateData(objeto, "suppliers", idP);
          formulario.reset();
          p.classList.add("notificacionF");
          p.innerHTML = "Actualización exitosa";
          formulario.style.display = 'none'
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
        formulario.style.display = 'none'
      }
      console.log(result);
    });
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

customElements.define("agregar-proveedor", AddProveedor);
customElements.define("editar-proveedor", EditProveedor);
customElements.define("eliminar-proveedor", DeleteProveedor);
