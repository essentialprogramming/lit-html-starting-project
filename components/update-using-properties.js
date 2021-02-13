import { LitElement, html } from 'lit-element';

/**
 * Use this pattern instead.
 */
class UpdateProperties extends LitElement {
    static get properties(){
        return {
            message: {type: String}
        };
    }
    constructor() {
        super();
        this.message = 'Loading';
        this.addEventListener('stuff-loaded', (e) => { this.message = e.detail } );
        this.loadStuff();
    }

    loadStuff() {
        setInterval(() => {
            let loaded = new CustomEvent('stuff-loaded', {
                detail: 'Loading complete.'
            });
            this.dispatchEvent(loaded);
        }, 3000);
    }

    render() {
        return html` <p>${this.message}</p> `;
    }
}

customElements.define('update-using-properties', UpdateProperties);
