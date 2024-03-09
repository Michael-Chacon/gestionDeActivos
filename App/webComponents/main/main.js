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
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Personas
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Proveedor
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Marcas
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Estados
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Categoria Activos
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Tipo Persona
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Estados
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Tipo Movimiento Activo
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="bx bxs-inbox icon"></i> Tipo activo
          <i class="bx bx-chevron-right icon-right"></i
        ></a>
        <ul class="side-dropdown">
          <li><a href="#">Agregar</a></li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Eliminar</a></li>
          <li><a href="#">Buscar</a></li>
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
    <main>
     
    </main>
    <!-- MAIN -->
  </section>
        `;
  }
}

customElements.define("main-component", MainComponent);
