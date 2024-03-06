class TablaActivos extends HTMLElement {
    constructor () {
        super();
    }
    render() {
        this.innerHTML = ``
    }
}
customElements.define('tabla-activos', TablaActivos)