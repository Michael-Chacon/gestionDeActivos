class MenuNavegacion extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <style rel="stylesheet">
        @import "../../css/style.css";
    </style>
    <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
    <header>
    <img
      class="logoCampus"
      src="../../storage/imgs/logoCampus.png"
      alt="No se puede cargar la imagen"
    />
    <i class="bx bx-menu menu" id="btnMenu"></i>
  </header>
    <div class="menuLateral">
    <nav class="nav">
    <!-- <div class="admin">
        <i class='bx bx-home-circle'></i>
        <h2 class="tituloMenu" id="tituloMenu">Menú</h2>
    </div> -->

    <ul class="opciones">
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bxs-objects-horizontal-right"></i>
          <p>Activos</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bxl-medium-square"></i>
          <p>Marcas</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bxs-face"></i>
          <p>Persona</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bxs-face"></i>
          <p>Proveedor</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bx-outline"></i>
          <p>Estado</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bx-shape-polygon"></i>
          <p>tipoPersona</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bx-move"></i>
          <p>tipoMovAct</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bxs-circle"></i>
          <p>tipoActivo</p>
        </a>
      </li>
    </ul>

    <!-- <ul>
        <li>
            <a href="#">
                <i class='bx bxs-add-to-queue'></i>
                <p>Agregar</p>
            </a>
        </li>
        
        <li>
            <a href="#">
                <i class='bx bxs-edit-alt'></i>
                <p>Editar</p>
            </a>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-eraser'></i>
                <p>Eliminar</p>
            </a>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-search' ></i>
                <p>Buscar</p>
            </a>
        </li>         
    </ul> -->
  </nav>
  <main class="main">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        debitis perferendis placeat, voluptatum consequuntur ullam repudiandae
        nulla iure velit quia dolor ipsa temporibus accusantium quae
        voluptatibus doloribus nostrum obcaecati ut!
      </main>
  </div>
        `;

    let padre = this.querySelector(".opciones");
    const mainContent = document.querySelector(".main");
    padre.addEventListener("click", (e) => {
      switch (e.target.innerHTML) {
        case "Activos":
          console.log("Activos");
          mainContent.innerHTML = "<tabla-activos></tabla-activos>";
          break;
        case "Marcas":
          mainContent.innerHTML = "Marcas";
          break;
        case "Persona":
          mainContent.innerHTML = "Persona";
          break;
        case "Proveedor":
          mainContent.innerHTML = "Proveedor";
          break;
        case "Estado":
          mainContent.innerHTML = "Estado";
          break;
        case "tipoPersona":
          mainContent.innerHTML = "tipoPersona";
          break;
        case "tipoMovAct":
          mainContent.innerHTML = "tipoMovAct";
          break;
        case "tipoActivo":
          mainContent.innerHTML = "tipoActivo";
          break;
      }
      e.stopImmediatePropagation();
      e.preventDefault();
    });
  }
}
customElements.define("menu-navegacion", MenuNavegacion);
