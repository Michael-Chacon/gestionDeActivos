import { getData } from "../../../Api/ApiActivos.js";
import { updateData } from "../../../Api/ApiActivos.js";
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

export class EditActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.buscar();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/activos/activos.css">
    <section class="formulario">
    <section class="header-estado">
      <form action="#" class="formulario-header">
        <input
          type="text"
          name="name"
          class="busqueda"
          id="busqueda"
          placeholder="Buscar por el id  o Nro. serial "
          required
        />
        <button type="button"  class="buscar-item">
          <i class="bx bx-search"></i>Buscar
        </button>
      </form>
    </section>
    <form action="#" id="formulario">
      <div class="padreNotificacion">
      </div>
      <input type="text" name="ide" id="ide" hidden>
      <div class="inputs">
        <label for="serialNumber" >Nro serial:<small> solo lectura</small> </label>
        <input
          type="number"
          name="serialNumber"
          id="serialNumber"
          class="form-input"
          required
          readonly
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

  buscar() {
    const btnBuscar = document.querySelector(".buscar-item");
    var formulario = document.querySelector("#formulario");
    btnBuscar.addEventListener("click", async (e) => {
      const busqueda = document.querySelector("#busqueda").value;
      const proveedores = await getData("assets");
      let result = proveedores.filter(
        (item) =>
          item.serialNumber.startsWith(busqueda) || item.id.startsWith(busqueda)
      );
      const notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");
      formulario.reset();
      if (result.length === 1) {
        let arrayIds = [];
        arrayIds.push(result[0].brandId);
        arrayIds.push(result[0].categoryAssetId);
        arrayIds.push(result[0].tipyAssetId);
        arrayIds.push(result[0].supplierId);
        arrayIds.push(result[0].statuId);
        this.llenarCompos(arrayIds);

        // Agarrar los campos
        const serialNumber = document.querySelector("#serialNumber");
        const formNumber = document.querySelector("#formNumber");
        const transactionCod = document.querySelector("#transactionCod");
        const unitValue = document.querySelector("#unitValue");
        const ide = document.querySelector("#ide");
        serialNumber.value = result[0].serialNumber;
        formNumber.value = result[0].formNumber;
        transactionCod.value = result[0].transactionCod;
        unitValue.value = result[0].unitValue;
        ide.value = result[0].id;

        //guardar los datos
        formulario.addEventListener("submit", (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          const datos = new FormData(formulario);
          const objetoDatos = Object.fromEntries(datos);
          const { ide, ...otros } = objetoDatos;
          updateData(otros, "assets", ide);
          formulario.reset();
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
    });
  }

  llenarCompos(ids) {
    const marcaSelect = document.querySelector("#brandId");
    const categoriaSelect = document.querySelector("#categoryAssetId");
    const tipoSelect = document.querySelector("#tipyAssetId");
    const proveedorSelect = document.querySelector("#supplierId");
    const estadoSelect = document.querySelector("#statuId");

    this.limpiarSelects(marcaSelect);
    this.limpiarSelects(categoriaSelect);
    this.limpiarSelects(tipoSelect);
    this.limpiarSelects(proveedorSelect);
    this.limpiarSelects(estadoSelect);

    llenarSelect("brands", marcaSelect, ids[0]);
    llenarSelect("categoryAssets", categoriaSelect, ids[1]);
    llenarSelect("tipyAssets", tipoSelect, ids[2]);
    llenarSelect("suppliers", proveedorSelect, ids[3]);
    llenarSelect("status", estadoSelect, ids[4]);
  }

  limpiarSelects(padre) {
    while (padre.firstChild) {
      padre.removeChild(padre.firstChild);
    }
  }
}
customElements.define("agregar-activos", AddActivo);
customElements.define("editar-activos", EditActivo);
