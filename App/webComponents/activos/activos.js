class TablaActivos extends HTMLElement {
    constructor () {
        super();
        this.render()
    }

    render() {
        this.innerHTML = `
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

        <body>
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
}
customElements.define('tabla-activos', TablaActivos)