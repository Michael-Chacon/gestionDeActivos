class TablaMarcas extends HTMLElement {
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
            <link rel="stylesheet" href="App/webComponents/activos/tabla.css">
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
                        <th>Nombre</th>
                        <th class="opciones" colspan="2">Opciones</th>
                    </tr>
                </thead>
            
                <tbody>
                    <tr>
                        <td>5654</td>
                        <td>Samsung</td>
                        <td><button class="editar">Editar</button></td>
                        <td><button class="eliminar">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </body>`
    }
}
customElements.define('tabla-marcas', TablaMarcas)