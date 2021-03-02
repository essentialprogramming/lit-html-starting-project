import { css } from 'lit-element';

export const cubeStyles = css`

        @keyframes spin {
          0% {
              -webkit-transform: rotateY(0);
              transform: rotateY(0);
          }
          to {
              -webkit-transform: rotateY(1turn);
              transform: rotateY(1turn);
          }
        }

        :host {
        --face-size: 200px;
        --base-color: #3e526a;
        --outline-color: #02203c;

          display: -webkit-box;
          display: flex;
          flex: 1 1 50%;
          justify-content: center;
          margin: 250px 0;
          -webkit-box-flex: 1;
          -webkit-box-pack: center;
        }

        @media (min-width: 992px) {
          :host {
            --face-size: 300px;
          }
        }

        ::slotted(img) {
          height: 100%;
          object-fit: contain;
          width: 100%;
        }

        .cubeSpinnerContainer {
          perspective: var(--perspective, 800px);
          perspective-origin: var(--perspective-origin-x, 50%) var(--perspective-origin-y, 100px);
        }

        .shadow-wrapper {
          position: relative;
          transform-style: preserve-3d;
          width: var(--face-size);
        }

        .shadow {
          box-shadow: 0 0 calc(var(--face-size) / 3.33) #000;
          height: var(--face-size);
          opacity: .98;
          position: absolute;
          top: 0;
          transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          -webkit-transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          transform-origin: bottom center;
          -webkit-transform-origin: bottom center;
          width: var(--face-size);
        }

        .cubeFaces, 
        .shadow-wrapper {
          animation: spin 45s linear infinite;
          -webkit-animation: spin 45s linear infinite;
        }

        .cubeFaces {
          height: var(--face-size);
          position: relative;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          width: var(--face-size);
        }

        .cubeFace {
          background-color: var(--base-color);
          box-shadow: inset 0 0 calc(var(--face-size) / 3.33) #02203c;
          height: 100%;
          opacity: .75;
          outline: 1px solid var(--outline-color);
          outline-offset: -1px;
          position: absolute;
          width: 100%;
        }

        .cubeFaceFront {
          transform: translateZ(calc(var(--face-size) / 2));
          -webkit-transform: translateZ(calc(var(--face-size) / 2));
        }

        .cubeFaceBack {
          transform: translateZ(calc(0px - var(--face-size) / 2)) rotateY(180deg);
          -webkit-transform: translateZ(calc(0px - var(--face-size) / 2)) rotateY(180deg);
        }

        .cubeFaceTop {
          transform: rotateX(-90deg) translateY(calc(0px - var(--face-size) / 2));
          -webkit-transform: rotateX(-90deg) translateY(calc(0px - var(--face-size) / 2));
          transform-origin: top center;
          -webkit-transform-origin: top center;
        }

        .cubeFaceBottom {
          transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          -webkit-transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          transform-origin: bottom center;
          -webkit-transform-origin: bottom center;
        }

        .cubeFaceLeft {
          transform: rotateY(270deg) translateX(calc(0px - var(--face-size) / 2));
          -webkit-transform: rotateY(270deg) translateX(calc(0px - var(--face-size) / 2));
          transform-origin: center left;
          -webkit-transform-origin: center left;
        }

        .cubeFaceRight {
          transform: rotateY(-270deg) translateX(calc(var(--face-size) / 2));
          -webkit-transform: rotateY(-270deg) translateX(calc(var(--face-size) / 2));
          transform-origin: top right;
          -webkit-transform-origin: top right;
        }
      `;
