class TablaEstados extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/estados/estado.css">
    <section class="main-estado">
    <div class="card-estado">
      <p class="titulo-estado">Dado de baja por daño</p>
      <p><small class="item-estado">Id: </small>dd02</p>
      <div class="opciones-estado">
        <button class="editar"><i class='bx bx-edit-alt'></i>Editar</button>
        <button class="eliminar"><i class="bx bx-trash"></i>Eliminar</button>
      </div>
    </div>
    <div class="card-estado">
    <p class="titulo-estado">Dado de baja por daño</p>
    <p><small class="item-estado">Id: </small>dd02</p>
    <div class="opciones-estado">
      <button class="editar"><i class='bx bx-edit-alt'></i>Editar</button>
      <button class="eliminar"><i class="bx bx-trash"></i>Eliminar</button>
    </div>
  </div>
  </section>`;
  }
}

customElements.define("tabla-estados", TablaEstados);
