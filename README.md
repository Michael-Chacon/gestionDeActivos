# Proyecto Filtro JavaScript

### Integrantes:

- Michael Alexis Chacón Marín
- Duván Camilo Arenas Rodríguez

El presente proyecto consiste en una página web para asignar Activos en el departamento de inventarios de Campuslands. Se puede agregar, editar, eliminar y buscar Activos; Personas; Proveedores; Estados; Marcas; Ubicación; Categoría de activos; Tipo persona; Tipo movimiento del activo; y Tipo de Activo; Así mismo, en el módulo de asignación se puede crear, asignar y retornarlos.

#### Servicios Api creados:

- getData(endpoint, embed = ""):

  Se define una función llamada `getData` que realiza solicitudes a un archivo JSON utilizando `fetch()`. Toma una `endpoint` y una cadena opcional `embed` como parámetros. Si la solicitud es exitosa (código de estado 200), devuelve los datos en formato JSON. Si el código de estado es 404, imprime un mensaje indicando que el contenido no se encontró. Para otros códigos de estado, imprime un mensaje genérico de error.

- postData(data, endpoint):

  Se define una función llamada `postData` que envía datos al servidor utilizando el método POST. Toma dos parámetros: `data`, que son los datos a enviar, y `endpoint`, que es la ruta de destino en el servidor. Utiliza `fetch()` para hacer la solicitud, especificando el método POST y convirtiendo los datos en formato JSON para enviarlos.

- updateData(data, endpoint, id):

   El código JavaScript define una función llamada `updateData` que actualiza datos en el servidor utilizando el método PUT. Toma tres parámetros: `data` (los datos a actualizar), `endpoint` (la ruta de destino en el servidor) y `id` (el identificador único del recurso a actualizar). La función utiliza `fetch()` para enviar una solicitud al servidor, especificando el método PUT y convirtiendo los datos en formato JSON.

- getOneData(id, endpoint):

  La función `getOneData` en JavaScript permite obtener un único conjunto de datos del servidor mediante una solicitud GET. Toma dos parámetros: `id` (el identificador único del conjunto de datos) y `endpoint` (la ruta de la solicitud). Dentro de un bloque `try`, la función realiza la solicitud al servidor y maneja diferentes casos de respuesta: si el estado es 200, convierte los datos JSON y los devuelve; si es 404, imprime un mensaje indicando que el contenido no fue encontrado; de lo contrario, imprime un mensaje genérico de error.

- deleteData(id, endpoint):

  La función `deleteData` en JavaScript permite eliminar datos del servidor utilizando el método DELETE. Toma dos parámetros: `id` (el identificador único del recurso a eliminar) y `endpoint` (la ruta de la solicitud). Dentro de un bloque `try`, la función realiza la solicitud al servidor, especificando el método DELETE y los encabezados necesarios. Sin embargo, no maneja los errores de manera adecuada ni captura la respuesta del servidor.







