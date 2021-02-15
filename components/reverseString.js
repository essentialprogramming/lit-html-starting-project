import { LitElement, html } from 'lit-element';

class Reverse extends LitElement {
  static get properties() {
      return {
          newValue: { type: String },
          valueOld: { type: String }
      };
  }
  constructor() {

    super();

    this.valueOld = "";
    
    this.newValue = "";
   
  }

  updateValue(e) {
    this.valueOld = e.target.value;
  }

   getValue() {
      this.newValue = this.valueOld;
       console.log(this.valueOld + 'test1');
      this.valueOld = "";
      console.log(this.valueOld + 'test');
   }

  render() {

      return html`
        <div>
          <input value="${this.valueOld}" @change="${this.updateValue}">
          <button @click="${this.getValue}">
            Fetch message
          </button>
          <span id="span"> THis is the word: ${this.newValue}</span>
        </div>
      `;


  }

}

customElements.define('reverse-word', Reverse);
