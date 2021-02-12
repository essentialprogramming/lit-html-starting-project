import {LitElement, html, customElement, property} from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    greeting = 'Hello';

    @property({attribute: false})
    data = {name: 'Aryana'};

    @property({type: Array})
    items = ["bananas", "apples", "oranges"];

    render() {
        return html`
      <p>${this.greeting} ${this.data.name}, you have ${this.items.length} items.</p>
    `;
    }
}