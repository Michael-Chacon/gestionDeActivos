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
    <a href="#" class="brand"><i class="bx bxs-smile icon"></i> AdminSite</a>
    <ul class="side-menu">
      <!-- <li>
        <a href="#" class="active"
          ><i class="bx bxs-dashboard icon"></i> Dashboard</a>
      </li> -->
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Activos
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
        ><i class="bx bxs-inbox icon"></i> Estados
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
        ><i class="bx bxs-inbox icon"></i> Marcas
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
        ><i class="bx bxs-inbox icon"></i> Área
        <i class="bx bx-chevron-right icon-right"></i
      ></a>
      <ul class="side-dropdown">
        <li><a href="#" class="area agregar">Agregar</a></li>
        <li><a href="#" class="area editar">Editar</a></li>
        <li><a href="#" class="area eliminar">Eliminar</a></li>
        <li><a href="#" class="area buscar">Buscar</a></li>
      </ul>
    </li>
    <li>
      <a href="#"
        ><i class="bx bxs-inbox icon"></i> Categoria Activos
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
        ><i class="bx bxs-inbox icon"></i> Tipo Persona
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
        ><i class="bx bxs-inbox icon"></i> Tipo Movimiento Activo
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
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Personas
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
          ><i class="bx bxs-inbox icon"></i> Proveedor
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
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
    </main>
    <!-- MAIN -->
  </section>
        `;
    const padre = document.querySelector(".side-menu");
    padre.addEventListener("click", (e) => {
      const opciones = e.target.classList[0];
      const subOpcion = e.target.classList[1];
      console.log(`Opcion = ${opciones}`);
      console.log(`Subopcion = ${subOpcion}`);
      const main = document.querySelector(".main");
      if (e.target.classList[0] === "estado") {
        main.innerHTML = `<${subOpcion}-generico endPoint="status"></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "tipo-persona") {
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "persona") {
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "proveedor") {
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
        main.innerHTML = `<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`;
      } else if (e.target.classList[0] === "marca") {
        main.innerHTML = `<${subOpcion}-generico endPoint="brands"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "area") {
        main.innerHTML = `<${subOpcion}-generico endPoint="areas"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "tipo-persona") {
        main.innerHTML = `<${subOpcion}-generico endPoint="typePeople"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "tipo-movimiento-activo") {
        main.innerHTML = `<${subOpcion}-generico endPoint="typeMovAssets"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "tipo-activo") {
        main.innerHTML = `<${subOpcion}-generico endPoint="tipyAssets"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "categoria-activo") {
        main.innerHTML = `<${subOpcion}-generico endPoint="categoryAssets"></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      } else if (e.target.classList[0] === "activos") {
        main.innerHTML = `<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`;
        console.log(`<${subOpcion}-${opciones}></${subOpcion}-${opciones}>`);
      }
    });
  }
}

customElements.define("main-component", MainComponent);
