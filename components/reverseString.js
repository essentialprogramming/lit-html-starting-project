import { LitElement, html } from 'lit-element';

class Reverse extends LitElement {

  render() {
    let valueOld = "";
    const updateValue = (e) => {
      valueOld = e.target.value;
    }
    
    const getValue = () => {
      console.log(valueOld);
    }

      return html`
        <div>
          <input value="${valueOld}" @change="${updateValue}">
          <button @click="${() => getValue()}">
            Fetch message
          </button>
        </div>
      `;


  }

}

customElements.define('reverse-word', Reverse);
