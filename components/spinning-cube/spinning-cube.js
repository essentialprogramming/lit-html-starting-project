import { LitElement, html, css } from 'lit-element';
import { cubeStyles } from './styles.js';

class SpinningCube extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      cubeStyles
    ];
  }

  render() {
    console.log(this.margin);

    return html`
      <div class="cubeSpinnerContainer">
        <div class="shadow-wrapper">
          <div class="shadow"></div>
        </div>
        <div class="cubeFaces">
          <div class="cubeFace cubeFaceFront">
            <slot name="front-face" />
          </div>
          <div class="cubeFace cubeFaceBack">
            <slot name="back-face" />
          </div>
          <div class="cubeFace cubeFaceTop">
            <slot name="top-face" />
          </div>
          <div class="cubeFace cubeFaceBottom">
            <slot name="bottom-face" />
          </div>
          <div class="cubeFace cubeFaceRight">
            <slot name="right-face" />
          </div>
          <div class="cubeFace cubeFaceLeft">
            <slot name="left-face" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('spinning-cube', SpinningCube);