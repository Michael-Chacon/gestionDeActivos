import {
  getData,
  getOneData,
  updateData,
  postData,
} from "../../../Api/ApiActivos.js";

export class MakeAsignacion extends HTMLElement {
  constructor() {
    super();
    this.idPersona = this.getAttribute("idPersona");
    this.render();
    this.asignar();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/asignaciones/asignaciones.css">

    <section class="card">
    <img src="../../../storage/imgs/perfil.jpg" class="perfil" alt="" />
    <article class="info-personal">
      <p class="nombre">Anthony Hopkins</p>
      <span class="email">SeniorSoftware@gmail.com</span>
      <br />
      <span class="title-asignacion">Id:</span>
      <span class="id">11012548</span>
      <br />
      <span class="title-asignacion">Tipo Persona:</span>
      <span class="tipoPersona">Natural</span>
    </article>
    <article class="asignacion">
      <h3>Folio Asiganción</h3>
      <span class="title-asignacion">Id folio asignación</span>
      <span class="idAsignacion">jdlfaldf44</span>
      <br />
      <span class="title-asignacion">Creacion de asignación:</span>
      <span class="fecha">11/03/2024</span>
    </article>
  </section>

  <section class="card-form">
    <form action="#" id="formulario">
        <div class="group-form">
        <label for="">Activos no asignados:</label>
        <select name="assetId" id="assetId" required>
            <option value=""></option>
        </select>
        </div>
        <div class="group-form">
        <label type="comment">Comentario de asignación</label>
        <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="4"
            required
        ></textarea>
        </div>
        <input type="text" name="date" class="fechaAs" hidden />
        <input type="text" name="assignmentId" class="asignacionId" hidden />
        <p class="showNotificacion"></p>
        <button type="submit" class="gurdar-asiganacion">Guardar</button>
    </form>
    </section>
    `;
  }

  async asignar() {
    const nombre = document.querySelector(".nombre");
    const email = document.querySelector(".email");
    const idp = document.querySelector(".id");
    const tipoPerson = document.querySelector(".tipoPersona");
    const fecha = document.querySelector(".fecha");
    const idAsignacion = document.querySelector(".idAsignacion");

    const datosPersona = await getOneData(this.idPersona, "people");

    const tipoPersona = await getOneData(
      datosPersona.typoPersonId,
      "typePeople"
    );

    const datosAsigacion = await getData("assignments");
    const datosAsigacionPersona = datosAsigacion.filter(
      (asignacion) => asignacion.responsibleId === this.idPersona
    );

    const asignacionId = document.querySelector(".asignacionId");
    const fechaAsignacion = document.querySelector(".fechaAs");
    asignacionId.value = datosAsigacionPersona[0].id;

    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var año = fechaActual.getFullYear();
    var fechaFormateada = dia + "/" + mes + "/" + año;
    fechaAsignacion.value = fechaFormateada;

    nombre.textContent = datosPersona.name;
    email.textContent = datosPersona.email;
    idp.textContent = datosPersona.id;
    tipoPerson.textContent = tipoPersona.name;

    idAsignacion.textContent = datosAsigacionPersona[0].id;
    fecha.textContent = datosAsigacionPersona[0].date;

    // obtener activos
    const selectorActivo = document.querySelector("#assetId");
    const activos = await getData("assets");
    const noAsignados = activos.filter((activo) => activo.statuId === "c7a6");

    // llenar select
    noAsignados.forEach(async (activo) => {
      const tipoActivo = await getOneData(activo.tipyAssetId, "tipyAssets");
      const opcion = document.createElement("OPTION");
      opcion.value = activo.id;
      opcion.textContent = `${activo.id} - ${activo.serialNumber} - ${tipoActivo.name}`;
      selectorActivo.appendChild(opcion);
    });
    // obtener los datos de la asignación
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      let datosSinFormato = new FormData(formulario);
      let formateado = Object.fromEntries(datosSinFormato);
      // Guardar detalle de asignación
      postData(formateado, "detailMovements");
      let { assetId } = formateado;
      // Actualizar el estado del activo
      const obtenerActivo = await getOneData(assetId, "assets");
      obtenerActivo.statuId = "8175";
      updateData(obtenerActivo, "assets", assetId);
      formulario.reset();
      let showNotificacion = document.querySelector(".showNotificacion");
      showNotificacion.innerHTML = "Asignación realizada con éxito";
      setTimeout(() => {
        showNotificacion.innerHTML = ""
      }, 3500)
    });
  }
}

customElements.define("asigar-un-activo", MakeAsignacion);
