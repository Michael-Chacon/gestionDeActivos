export class MainComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <style rel="stylesheet">
        @import "App/webComponents/main/menu.css";
    </style>
    <script src="menu.js" type="module" defer></script>
    <section id="sidebar">
    <a href="#" class="brand"><i class='bx bxs-dashboard icon'></i>Campus</a>
    <ul class="side-menu">
      <!-- <li>
        <a href="#" class="active"
          ><i class="bx bxs-dashboard icon"></i> Dashboard</a>
      </li> -->
      <li>
        <a href="#"
          ><i class='bx bx-list-ul icon'></i> Activos
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#" class="activos agregar">Agregar</a></li>
          <li><a href="#" class="activos editar">Editar</a></li>
          <li><a href="#" class="activos eliminar">Eliminar</a></li>
          <li><a href="#" class="activos buscar">Buscar</a></li>
        </ul>
      </li>
      <li>
      <a href="#"
        ><i class='bx bxs-user-check icon'></i> Asignación
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
        <li><a href="#" class="asignacion crear">Crear Asignación</a></li>
        <li><a href="#" class="asignacion asignar">Asignar activos</a></li>
        <li><a href="#" class="asignacion retornar">Retornar Activo</a></li>
      </ul>
    </li>
      <li>
      <a href="#"
        ><i class='bx bxs-face icon'></i> Personas
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
        <li><a href="#" class="persona agregar">Agregar</a></li>
        <li><a href="#" class="persona editar">Editar</a></li>
        <li><a href="#" class="persona eliminar">Eliminar</a></li>
        <li><a href="#" class="persona buscar">Buscar</a></li>
      </ul>
    </li>
      <li>
      <a href="#"
        ><i class='bx bx-stats icon'></i> Estados
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
        <li><a href="#" class="estado agregar">Agregar</a></li>
        <li><a href="#" class="estado editar">Editar</a></li>
        <li><a href="#" class="estado eliminar">Eliminar</a></li>
        <li><a href="#" class="estado buscar">Buscar</a></li>
      </ul>
    </li>
    <li>
      <a href="#"
        ><i class='bx bxs-label icon'></i> Marcas
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
        <li><a href="#" class="marca agregar">Agregar</a></li>
        <li><a href="#" class="marca editar">Editar</a></li>
        <li><a href="#" class="marca eliminar">Eliminar</a></li>
        <li><a href="#" class="marca buscar">Buscar</a></li>
      </ul>
    </li>
    <li>
      <a href="#"
        ><i class='bx bxs-map icon'></i> Ubicación
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
        <li><a href="#" class="ubicacion agregar">Agregar</a></li>
        <li><a href="#" class="ubicacion editar">Editar</a></li>
        <li><a href="#" class="ubicacion eliminar">Eliminar</a></li>
        <li><a href="#" class="ubicacion buscar">Buscar</a></li>
      </ul>
    </li>
    <li>
      <a href="#"
        ><i class='bx bxs-category icon'></i> Categoria Activos
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
      <li><a href="#" class="categoria-activo agregar">Agregar</a></li>
      <li><a href="#" class="categoria-activo editar">Editar</a></li>
      <li><a href="#" class="categoria-activo eliminar">Eliminar</a></li>
      <li><a href="#" class="categoria-activo buscar">Buscar</a></li>
      </ul>
    </li>
    <li>
      <a href="#"
        ><i class='bx bx-male-female icon'></i> Tipo Persona
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
      <li><a href="#" class="tipo-persona agregar">Agregar</a></li>
      <li><a href="#" class="tipo-persona editar">Editar</a></li>
      <li><a href="#" class="tipo-persona eliminar">Eliminar</a></li>
      <li><a href="#" class="tipo-persona buscar">Buscar</a></li>
    </ul>
    </li>
    <li>
      <a href="#"
        ><i class='bx bx-move icon'></i> Tipo Movimiento Activo
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
      <li><a href="#" class="tipo-movimiento-activo agregar">Agregar</a></li>
      <li><a href="#" class="tipo-movimiento-activo editar">Editar</a></li>
      <li><a href="#" class="tipo-movimiento-activo eliminar">Eliminar</a></li>
      <li><a href="#" class="tipo-movimiento-activo buscar">Buscar</a></li>
      </ul>
    </li>
    <li>
    <a href="#"
      ><i class='bx bxs-cart icon'></i> Proveedor
      <i class="bx bx-chevron-right icon-right"></i
    ></a>
    <ul class="side-dropdown">
    <li><a href="#" class="proveedor agregar">Agregar</a></li>
    <li><a href="#" class="proveedor editar">Editar</a></li>
    <li><a href="#" class="proveedor eliminar">Eliminar</a></li>
    <li><a href="#" class="proveedor buscar">Buscar</a></li>
    </ul>
  </li>
    <li>
        <a href="#"
          ><i class='bx bx-devices icon' ></i> Tipo activo
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
        <li><a href="#" class="tipo-activo agregar">Agregar</a></li>
        <li><a href="#" class="tipo-activo editar">Editar</a></li>
        <li><a href="#" class="tipo-activo eliminar">Eliminar</a></li>
        <li><a href="#" class="tipo-activo buscar">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Tipo activo
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
        <li><a href="#" class="tipo-activo agregar">Agregar</a></li>
        <li><a href="#" class="tipo-activo editar">Editar</a></li>
        <li><a href="#" class="tipo-activo eliminar">Eliminar</a></li>
        <li><a href="#" class="tipo-activo buscar">Buscar</a></li>
        </ul>
      </li>
    </ul>
  </section>
  <section id="content">
    <!-- NAVBAR -->
    <nav>
      <i class="bx bx-menu toggle-sidebar"></i>
      <form action="#"></form>

      <span class="divider"></span>
      <div class="profile">
        <img
          src="storage/imgs/logoCampus.png"
          alt=""
        />
        <ul class="profile-link">
          <li>
            <a href="#"><i class="bx bxs-user-circle icon"></i> Profile</a>
          </li>
          <li>
            <a href="#"><i class="bx bxs-cog"></i> Settings</a>
          </li>
          <li>
            <a href="#"><i class="bx bxs-log-out-circle"></i> Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- NAVBAR -->

    <!-- MAIN -->
    <main class="main">
      <h2 class="paginaInicial">Bienvenido al gestor de activos de CampusLands</h2>
      <p class="contenidoPaginaInicial">A continuación selecciona una de las opciones de nuestro menú</p>
    </main>
    <!-- MAIN -->
  </section>
        `;
    const padre = document.querySelector(".side-menu");
    padre.addEventListener("click", (e) => {
      const opciones = e.target.classList[0];
      const subOpcion = e.target.classList[1];
      const main = document.querySelector(".main");
      if (e.target.classList[0] === "estado") {
        main.innerHTML = `<${subOpcion}-generico endPoint="status"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "persona") {
        main.innerHTML = `<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "proveedor") {
        main.innerHTML = `<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "marca") {
        main.innerHTML = `<${subOpcion}-generico endPoint="brands"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "ubicacion") {
        main.innerHTML = `<${subOpcion}-generico endPoint="locations"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "tipo-persona") {
        main.innerHTML = `<${subOpcion}-generico endPoint="typePeople"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "tipo-movimiento-activo") {
        main.innerHTML = `<${subOpcion}-generico endPoint="typeMovAssets"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "tipo-activo") {
        main.innerHTML = `<${subOpcion}-generico endPoint="tipyAssets"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "categoria-activo") {
        main.innerHTML = `<${subOpcion}-generico endPoint="categoryAssets"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "activos") {
        main.innerHTML = `<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "asignacion") {
        main.innerHTML = `<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`;
      }
    });
  }
  // <li><a href="#" class="asignacion crear">Crear Asignación</a></li>
}

customElements.define("main-component", MainComponent);
