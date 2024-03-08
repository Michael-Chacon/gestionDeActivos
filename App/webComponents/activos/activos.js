// import { getData } from "../../../Api/ApiActivos.js";
// import { deleteData } from "../../../Api/ApiActivos.js";
// import { getOneData } from "../../../Api/ApiActivos.js";
// import { guardarDatos } from "../../../js/app.js";
// import { actualizarDatos } from "../../../js/app.js";

class TablaActivos extends HTMLElement {
    constructor () {
        super();
        this.render();
        // this.detectarClick();
        // this.datosFormulario();
        // this.actualizarEstado();
        this.modal();
    }

    render() {
        this.innerHTML = `
        <dialog >
    <section class="form">
        <form action="#" id="formulario">
            <label for="tarea">Activos</label>
                <label for="transactionCod">Código de transacción</label>
                <input
                    type="text"
                    name="transactionCod"
                    class="transactionCod"
                    id="transactionCod"
                />
                
                <label for="formNumber">Número de formulario</label>
                <input
                    type="text"
                    name="formNumber"
                    class="formNumber"
                    id="formNumber"
                />



                <div class="DivisionSelect">
                    <label for="brandId">Marca</label>
                    <select name="brandId" id="brandId" class="brandId">
                        <option value="Diego Martínez" selected>Diego Martínez</option>
                        <option value="Laura Fernández">Laura Fernández</option>
                        <option value="Ana Pérez">Ana Pérez</option>
                    </select>

                    <label for="categoryAssetId">Categoría</label>
                    <select name="categoryAssetId" id="categoryAssetId" class="categoryAssetId">
                        <option value="Diego Martínez" selected>Diego Martínez</option>
                        <option value="Laura Fernández">Laura Fernández</option>
                        <option value="Ana Pérez">Ana Pérez</option>
                    </select>
                    
                    <label for="tipyAssetId">Tipo</label>
                    <select name="tipyAssetId" id="tipyAssetId" class="tipyAssetId">
                        <option value="Diego Martínez" selected>Diego Martínez</option>
                        <option value="Laura Fernández">Laura Fernández</option>
                        <option value="Ana Pérez">Ana Pérez</option>
                    </select>
                </div>
                
                <label for="formNumber">Valor Unitario</label>
                <input
                    type="text"
                    name="unitValue"
                    class="unitValue"
                    id="unitValue"
                />

                <label for="supplierId">Proveedor</label>
                <select name="supplierId" id="supplierId" class="supplierId">
                    <option value="Diego Martínez" selected>Diego Martínez</option>
                    <option value="Laura Fernández">Laura Fernández</option>
                    <option value="Ana Pérez">Ana Pérez</option>
                </select>
                
                <label for="serialNumber">Serial</label>
                <input
                    type="text"
                    name="serialNumber"
                    class="serialNumber"
                    id="serialNumber"
                />
                
                <label for="serialNumber">Empresa Responsable</label>
                <input
                    type="text"
                    name="companyId"
                    class="companyId"
                    id="companyId"
                />
                
                <label for="statuId">Status</label>
                <select name="statuId" id="statuId" class="statuId">
                    <option value="Diego Martínez" selected>Diego Martínez</option>
                    <option value="Laura Fernández">Laura Fernández</option>
                    <option value="Ana Pérez">Ana Pérez</option>
                </select>
                
            </form>
    </section>
</dialog>

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="App/webComponents/activos/activos.css">
        </head>

        <header class="contenedor">
            <button>Agregar</button>
            <div >
                <input class="entradaBuscar" type="text" placeholder="Ingrese su búsqueda">
                <button class = "btnBuscar">Buscar</button>
            </div>
        </header>

        
      <link rel="stylesheet" href="App/webComponents/estados/estado.css">
      <button class="mostrar-modal"><i class="bx bx-plus"></i> Registrar estado</button>

        <body class = "contenedorPadre">
            <table>
                <thead>
                    <tr>
                        <th >id</th>
                        <th>Código Transacción</th>
                        <th>Formulario</th>
                        <th>Marca</th>
                        <th>Categoría</th>
                        <th>Tipo</th>
                        <th>Valor unitario</th>
                        <th>Proveedor</th>
                        <th>Serial</th>
                        <th>Empresa Responsable</th>
                        <th>Estado</th>
                        <th class="opciones" colspan="2">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>324</td>
                        <td>966217120</td>
                        <td>LG</td>
                        <td>Computo</td>
                        <td>dsfdsfas</td>
                        <td>2000000</td>
                        <td>Sodimac Colombia Sa</td>
                        <td>984611-1</td>
                        <td>CampusLands</td>
                        <td>Activo</td>
                        <td><button class="editar">Editar</button></td>
                        <td><button class="eliminar">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </body>`
    }
    
      modal() {
        const dialog = document.querySelector("dialog");
        const btnMostrarModal = document.querySelector(".mostrar-modal");
        btnMostrarModal.addEventListener("click", () => {
          dialog.showModal();
        });
        const btnCerrarModal = document.querySelector(".cancelar");
        btnCerrarModal.addEventListener("click", () => {
          const input = document.querySelector("#name");
          input.value = "";
          dialog.close();
        });
      }
}
customElements.define('tabla-activos', TablaActivos)