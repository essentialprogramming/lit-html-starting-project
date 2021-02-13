// LitElement and html are the basic required imports
import {LitElement, html} from 'lit-element';

class MyElement  extends LitElement {

    constructor() {
        super();
        this.addEventListener('stuff-loaded', (e) => {
            this.shadowRoot.getElementById('message').innerHTML = e.detail;
        });
        this.loadStuff();
    }

    // Fake fetching something from an API
    loadStuff() {
        setInterval(() => {
            let loaded = new CustomEvent('stuff-loaded', {
                detail: 'Loading complete.'
            });
            this.dispatchEvent(loaded);
        }, 3000);
    }

    render() {
        return html` <p id="message">Loading</p> `;
    }
}
customElements.define('dom-manipulation-anti-pattern', MyElement);