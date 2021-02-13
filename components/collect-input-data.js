import {LitElement, html, customElement, property} from 'lit-element';

@customElement('collect-input-data')
export class MyElement extends LitElement {


    onSave() {
        console.log(this.inputElement.value);
    }

    get inputElement() {
        return this.shadowRoot.getElementById('name');
    }

    render() {
        return html`
           <input id="name">
           <button @click="${this.onSave}">Save</button>
        `;
    }
}