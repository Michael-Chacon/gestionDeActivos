import {
  getData,
  updateData,
  getOneData,
  deleteData,
} from "../../../Api/ApiActivos.js";
import { llenarSelect, guardarDatos } from "../../../js/app.js";

export class AddActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.llenarCompos();
    this.guardar();
  }
  render() {
    this.innerHTML = /* html */ `
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
      <div class="bolth-grid">
        <div class="inputs">
          <label for="locationId">Ubicación:</label>
          <select name="locationId" id="locationId" required>
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
    const ubicacionSelect = document.querySelector("#locationId");
    llenarSelect("locations", ubicacionSelect);
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
    this.innerHTML = /* html */ `
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
      <div class="bolth-grid">
      <div class="inputs">
        <label for="locationId">Ubicación:</label>
        <select name="locationId" id="locationId" required>
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
        arrayIds.push(result[0].locationId);
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
          const marcaSelect = document.querySelector("#brandId");
          const categoriaSelect = document.querySelector("#categoryAssetId");
          const tipoSelect = document.querySelector("#tipyAssetId");
          const proveedorSelect = document.querySelector("#supplierId");
          const estadoSelect = document.querySelector("#statuId");
          const ubicacionSelect = document.querySelector("#locationId");
          // llenarSelect("locations", ubicacionSelect);

          this.limpiarSelects(ubicacionSelect);
          this.limpiarSelects(marcaSelect);
          this.limpiarSelects(categoriaSelect);
          this.limpiarSelects(tipoSelect);
          this.limpiarSelects(proveedorSelect);
          this.limpiarSelects(estadoSelect);
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
    const ubicacionSelect = document.querySelector("#locationId");
    this.limpiarSelects(ubicacionSelect);
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
    llenarSelect("locations", ubicacionSelect, ids[5]);
  }

  limpiarSelects(padre) {
    while (padre.firstChild) {
      padre.removeChild(padre.firstChild);
    }
  }
}

export class DeleteActivo extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.eliminar();
  }
  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="App/webComponents/activos/activos.css">
    <section class="formulario">
    <section class="header-estado">
      <form action="#" class="formulario-header">
        <input
          type="search"
          name="name"
          class="busqueda"
          id="busqueda"
          placeholder="Buscar por el id  o nombre del estado"
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
      <table border>
        <thead>
        <tr>
          <th>Id</th>
          <th>Núm. serial</th>
          <th>Estado</th>
          <th>Ubicación</th>
          <th>Tipo</th>
          <th></th>
        </tr>
        </thead>
        <tbody id="tabla">
        </tbody>
      </table>
    </section>
  </section>
    `;
  }

  async eliminar() {
    const btnBuscar = document.querySelector(".buscar-item");
    btnBuscar.addEventListener("click", async (e) => {
      const busqueda = document.querySelector("#busqueda").value;
      const proveedores = await getData("assets");
      let result = proveedores.filter(
        (item) =>
          item.serialNumber.startsWith(busqueda) || item.id.startsWith(busqueda)
      );
      var notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");
      console.log(result);

      if (result.length === 1) {
        console.log("here");

        const tabla = document.querySelector("#tabla");

        const tipo = await getOneData(result[0].tipyAssetId, "tipyAssets");
        const estado = await getOneData(result[0].statuId, "status");
        const ubicacion = await getOneData(result[0].locationId, "locations");
        console.log(estado.name);
        tabla.innerHTML = ` <tr>
        <td>${result[0].id}</td>
        <td>${result[0].serialNumber}</td>
        <td class="estado-activo">${estado.name}</td>
        <td>${ubicacion.name}</td>
        <td>${tipo.name}</td>
        <td><button class="eliminar-activo" id="${result[0].id}">Eliminar</button></td>
      </tr>`;

        // Eliminar
        tabla.addEventListener("click", (e) => {
          if (e.target.classList.contains("eliminar-activo")) {
            const idActivo = e.target.id;
            const confirmacion = confirm(
              "¿Seguro que desea eliminar el activo?"
            );
            if (confirmacion) {
              deleteData(idActivo, "assets");
              p.classList.add("notificacionF");
              p.innerHTML = "Eliminado con éxito";
              notificacion.appendChild(p);
              setTimeout(() => {
                notificacion.removeChild(p);
              }, 3000);
              tabla.innerHTML = "";
            }
          }
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
}

export class SearchActivo extends HTMLElement {
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
          placeholder="Buscar por el id  o serial"
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
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Núm. serial</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tabla">
        </tbody>
      </table>
    </section>
  </section>`;
  }
  
  async buscar() {
    const btnBuscar = document.querySelector(".buscar-item");
    btnBuscar.addEventListener("click", async (e) => {
      const busqueda = document.querySelector("#busqueda").value;
      const proveedores = await getData("assets");
      let result = proveedores.filter(
        (item) =>
          item.serialNumber.startsWith(busqueda) || item.id.startsWith(busqueda)
      );
      var notificacion = document.querySelector(".padreNotificacion");
      const p = document.createElement("P");

      const tabla = document.querySelector("#tabla");
      if (result.length === 1) {
        console.log("here");

        const tipo = await getOneData(result[0].tipyAssetId, "tipyAssets");
        const estado = await getOneData(result[0].statuId, "status");
        console.log(estado.name);
        tabla.innerHTML = ` 
        <tr>
          <td>${result[0].id}</td>
          <td>${result[0].serialNumber}</td>
          <td class="estado-activo">${estado.name}</td>
          <td>${tipo.name}</td>
          <td><button class="ver-detalle" id="${result[0].id}">Ver detalle</button></td>
        </tr>`;

        // Eliminar
        tabla.addEventListener("click", (e) => {
          if (e.target.classList.contains("ver-detalle")) {
            const idActivo = e.target.id;
            console.log(idActivo + "funciona el click");
          }
        });
      } else {
        tabla.innerHTML = "";
        p.classList.add("notificacionFail");
        p.innerHTML = "Lo que buscas no existe";
        notificacion.appendChild(p);
        setTimeout(() => {
          notificacion.removeChild(p);
        }, 3000);
      }
    });
  }

  // buscar() {
  //   const eliminaractivo ver-detalle";
  // }
}

customElements.define("agregar-activos", AddActivo);
customElements.define("editar-activos", EditActivo);
customElements.define("eliminar-activos", DeleteActivo);
customElements.define("buscar-activos", SearchActivo);
