import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

    static get properties() {
        return {
            whales: {type: Number}
        }
    }

    constructor() {
        super();
        this.whales = 0;
        this.addEventListener('click', async (e) => {
            this.whales++;
            await this.updateComplete;
            this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
            console.log(this.shadowRoot.querySelector('.count').textContent);
        });
    }

    static get styles() {
        return [css`h4 { color: orange;} `];
    }

    render() {
        const {whales} = this;
        return html`
          <style>
            :host {
              display: block;
            }
            :host([hidden]) {
              display: none;
            }
            .count {
              color: green;
            }
            .content {
              padding: 8px;
            }
          </style>
          <div class="content">
            <slot></slot>
          </div>
          <div class="count">
            whales: ${'🐳'.repeat(whales)}
          </div>
        `;
    }

    update(changedProps) {
        super.update(changedProps);
        console.log('updated!', changedProps);
    }

    get updateComplete() {
        return (async () => {
            return await super.updateComplete;
        })();
    };
}

customElements.define('whales-example', MyElement);