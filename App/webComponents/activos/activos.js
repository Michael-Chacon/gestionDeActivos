import { llenarSelect } from "../../../js/app.js";
import { guardarDatos } from "../../../js/app.js";
export class AddActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.llenarCompos();
    this.guardar();
  }
  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/activos/activos.css">
    <section class="formulario">
    <form action="#" id="formulario">
      <div class="padreNotificacion">
      </div>
      <div class="inputs">
        <label for="serialNumber">Nro serial: </label>
        <input
          type="number"
          name="serialNumber"
          id="serialNumber"
          class="form-input"
          required
        />
      </div>
      <div class="inputs">
        <label for="formNumber">Nro formulario: </label>
        <input
          type="number"
          name="formNumber"
          id="formNumber"
          class="form-input"
          required
        />
      </div>

      <div class="inputs">
        <label for="transactionCod">Código transaccion: </label>
        <input
          type="text"
          name="transactionCod"
          id="transactionCod"
          class="form-input"
          required
        />
      </div>
      <div class="inputs">
        <label for="unitValue">Valor Unitario:</label>
        <input
          type="text"
          name="unitValue"
          id="unitValue"
          class="form-input"
          required
        />
      </div>
      <div class="bolth-grid">
        <div class="inputs">
          <label for="companyId">Empresa responsable:</label>
          <select name="companyId" id="companyId" required>
            <option value="CampusLandas">CampusLandas</option>
          </select>
        </div>
        <div class="inputs">
          <label for="brandId">Marca:</label>
          <select name="brandId" id="brandId" required>
            <option value=""></option>
          </select>
        </div>
      </div>
      <div class="bolth-grid">
        <div class="inputs">
          <label for="categoryAssetId">Categoria:</label>
          <select name="categoryAssetId" id="categoryAssetId" required>
            <option value=""></option>
          </select>
        </div>
        <div class="inputs">
          <label for="tipyAssetId">Tipo:</label>
          <select name="tipyAssetId" id="tipyAssetId" required>
            <option value=""></option>
          </select>
        </div>
      </div>
      <div class="bolth-grid">
        <div class="inputs">
          <label for="supplierId">Proveedor:</label>
          <select name="supplierId" id="supplierId" required>
            <option value=""></option>
          </select>
        </div>
        <div class="inputs">
          <label for="statuId">Estado:</label>
          <select name="statuId" id="statuId" required>
            <option value=""></option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn-registrarF">Registrar</button>
    </form>
  </section>
        `;
  }

  llenarCompos() {
    const marcaSelect = document.querySelector("#brandId");
    const categoriaSelect = document.querySelector("#categoryAssetId");
    const tipoSelect = document.querySelector("#tipyAssetId");
    const proveedorSelect = document.querySelector("#supplierId");
    const estadoSelect = document.querySelector("#statuId");
    llenarSelect("status", estadoSelect);
    llenarSelect("brands", marcaSelect);
    llenarSelect("tipyAssets", tipoSelect);
    llenarSelect("categoryAssets", categoriaSelect);
    llenarSelect("suppliers", proveedorSelect);
  }

  guardar() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      guardarDatos(formulario, "assets");
      formulario.reset();
      const notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");
      p.classList.add("notificacionF");
      p.textContent = "Registrado con éxito";
      notificacion.appendChild(p);
      setTimeout(() => {
        notificacion.removeChild(p);
      }, 3000);
    });
  }
}
customElements.define("agregar-activos", AddActivo);
