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
          -webkit-box-flex: 1;
          flex: 1 1 50%;
          display: -webkit-box;
          display: flex;
          margin: 250px 0;
          -webkit-box-pack: center;
          justify-content: center;
        }

        @media (min-width: 992px) {
          :host {
            --face-size: 300px;
          }
        }

        ::slotted(img) {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .cubeSpinnerContainer {
          perspective: var(--perspective, 800px);
          perspective-origin: var(--perspective-origin-x, 50%) var(--perspective-origin-y, 100px);
        }

        .shadow-wrapper {
          position: relative;
          width: var(--face-size);
          transform-style: preserve-3d;
        }

        .shadow {
          position: absolute;
          width: var(--face-size);
          height: var(--face-size);
          top: 0;
          opacity: .98;
          box-shadow: 0 0 calc(var(--face-size) / 3.33) #000;
          -webkit-transform: rotateX(90deg) translateY(calc(var(--face-size) / 3.33));
          transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          -webkit-transform-origin: bottom center;
          transform-origin: bottom center;
        }

        .cubeFaces, 
        .shadow-wrapper {
          -webkit-animation: spin 45s linear infinite;
          animation: spin 45s linear infinite;
        }

        .cubeFaces {
          position: relative;
          width: var(--face-size);
          height: var(--face-size);
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
        }

        .cubeFace {
          outline: 1px solid #02203c;
          outline-offset: -1px;
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: .75;
          box-shadow: inset 0 0 calc(var(--face-size) / 3.33) #02203c;
        }

        .cubeFaceFront {
          -webkit-transform: translateZ(calc(var(--face-size) / 2));
          transform: translateZ(calc(var(--face-size) / 2));
          background-color: #3e526a;
        }

        .cubeFaceBack {
          -webkit-transform: translateZ(calc(0px - var(--face-size) / 2)) rotateY(180deg);
          transform: translateZ(calc(0px - var(--face-size) / 2)) rotateY(180deg);
          background-color: #3e526a;
          background-color: var(--make);
          
        }

        .cubeFaceTop {
          -webkit-transform: rotateX(-90deg) translateY(calc(0px - var(--face-size) / 2));
          transform: rotateX(-90deg) translateY(calc(0px - var(--face-size) / 2));
          -webkit-transform-origin: top center;
          transform-origin: top center;
          background-color: #02203c;
        }

        .cubeFaceBottom {
          -webkit-transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          transform: rotateX(90deg) translateY(calc(var(--face-size) / 2));
          -webkit-transform-origin: bottom center;
          transform-origin: bottom center;
          background-color: #02203c;
        }

        .cubeFaceLeft {
          -webkit-transform: rotateY(270deg) translateX(calc(0px - var(--face-size) / 2));
          transform: rotateY(270deg) translateX(calc(0px - var(--face-size) / 2));
          -webkit-transform-origin: center left;
          transform-origin: center left;
          background-color: #3e526a;
        }

        .cubeFaceRight {
          -webkit-transform: rotateY(-270deg) translateX(calc(var(--face-size) / 2));
          transform: rotateY(-270deg) translateX(calc(var(--face-size) / 2));
          -webkit-transform-origin: top right;
          transform-origin: top right;
          background-color: #3e526a;
        }
      `;
