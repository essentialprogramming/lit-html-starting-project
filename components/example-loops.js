import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
    static get properties() {
        return {
            myString: { type: String },
            myArray: { type: Array }
        };
    }
    constructor() {
        super();
        this.myString = "Let's iterate ";
        this.myArray = ['an','array','of','test','data'];
    }
    render() {
        return html`
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
    `;
    }
}

customElements.define('example-loops', MyElement);