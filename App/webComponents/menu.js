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
    <header class = "header">
    <img
      class="logoCampus"
      src="../../storage/imgs/logoCampus.png"
      alt="No se puede cargar la imagen"
    />
    <i class="bx bx-menu menu" id="btnMenu"></i>
  </header>
    <div class="menuLateral">
    <nav class="nav">
      <ul class="opciones">
      <li>
        <a class="contenidoLista" href="#">
          <i class="bx bxs-objects-horizontal-right"></i>
          <p>Activos</p>
        </a>
      </li>
      <li>
        <a class="contenidoLista" href="#">
          <i class='bx bxs-category'></i>
          <p>Categoria Activos</p>
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
          <i class='bx bxs-category-alt' ></i>
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
        case "Categoria Activos":
            console.log("categoriaActivos");
            mainContent.innerHTML = "<tabla-categoria-activo></tabla-categoria-activo>";
            break;
        case "Marcas":
          mainContent.innerHTML = "<tabla-marcas></tabla-marcas>";
          break;
        case "Persona":
          mainContent.innerHTML = "<tabla-personas></tabla-personas>";
          break;
        case "Proveedor":
          mainContent.innerHTML = "<tabla-proveedores></tabla-proveedores>";
          break;
        case "Estado":
          mainContent.innerHTML = "<tabla-estados></tabla-estados>";
          break;
        case "tipoPersona":
          mainContent.innerHTML = "<tabla-tipo-persona></tabla-tipo-persona>";
          break;
        case "tipoMovAct":
          mainContent.innerHTML =
            "<tabla-tipo-mov-activo></tabla-tipo-mov-activo>";
          break;
        case "tipoActivo":
          mainContent.innerHTML = "<tipo-activo></tipo-activo>";
          break;
      }
      e.stopImmediatePropagation();
      e.preventDefault();
    });
  }
}
customElements.define("menu-navegacion", MenuNavegacion);
