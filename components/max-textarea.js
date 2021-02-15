import { LitElement, html } from 'lit-element';

class MaxTextarea extends LitElement {

  static get properties() {
    return {
        inputValue: { type: Number },
        totalInput: { type: Number },
        leftCharacters: { type: Number }
    };
  }

  constructor() {
      super();

      this.inputValue = 0;
      this.leftCharacters = 200;
      this.totalInput = 200;
      // We mock updating the count property every 2sec, looping from 0 to 10.
      
  }

  updateValue(e) {
    this.inputValue = e.target.value;
    this.totalInput = this.leftCharacters - this.inputValue.length;
    console.log(this.inputValue.length); 
    console.log(this.totalInput);
  }

  render() {
      return html`
        <div>
          <textarea maxlength="${this.leftCharacters}" @keyup="${this.updateValue}"></textarea>
          <p>Characters lefts: ${this.totalInput}</p>
        </div>
      `;
  }
  
}

customElements.define('max-textarea', MaxTextarea);
