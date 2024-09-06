import * as components from './components/index';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render(){
        if (this.shadowRoot){ //Condition of validation of the shadowRoot.
            this.shadowRoot.innerHTML = `<h1>Hello World</h1>`;
        }
    }
}
customElements.define('app-container', AppContainer);