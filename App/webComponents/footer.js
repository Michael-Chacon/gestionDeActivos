class FooterPrincipal extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = ``;
  }
}
customElements.define("footer-principal", FooterPrincipal);
