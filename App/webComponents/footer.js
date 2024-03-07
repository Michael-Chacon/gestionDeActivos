class FooterPrincipal extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = `
    <footer>
      <p>© Copyright - Todos los derechos reservados Duván Arenas - Alexis Chacón</p>
    </footer>`;
  }
}
customElements.define("footer-principal", FooterPrincipal);
