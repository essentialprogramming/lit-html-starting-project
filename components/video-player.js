import {LitElement, html, css} from 'lit-element';
import NativePlayer from "./video-player/adapters/NativePlayer.js";
import DashPlayer from "./video-player/adapters/DashPlayer.js";
import Factory from "./video-player/PlayerFactory.js";
import PlayButton from "./video-player/controls/Play.js";
import TimeControl from "./video-player/controls/Time.js";
import Utils from "./video-player/common/Utils.js";

class VideoPlayer extends LitElement {


    constructor() {
        super();
        this.factory = new Factory()

        this.addEventListener('rendered', async (e) => {
            try {
                await this.updateComplete;
                const videoElement = this.shadowRoot.getElementById("videoPlayer");
                const controlsContainer = this.shadowRoot.getElementById("controlsContainer");
                const timeContainer = this.shadowRoot.getElementById("timeContainer");
                this.factory.registerPlayer(new DashPlayer({
                    'videoElement': videoElement,
                    'src': 'http://cdn.dashjs.org/latest/dash.all.min.js',
                    'autoplay': false
                }));

                this.factory.registerPlayer(new NativePlayer({
                    'videoElement': videoElement,
                    "autoplay": false
                }));

                let urlMpdExtern = "http://www.bok.net/dash/tears_of_steel/cleartext/stream.mpd"
                let urlThumbNail = "http://dash.edgesuite.net/akamai/bbb_30fps/bbb_with_multiple_tiled_thumbnails.mpd"
                let urlMultiPeriod = "https://dash.akamaized.net/dash264/TestCases/5a/nomor/1.mpd"
                let urlMp4 = "http://159.65.124.175:8082/api/video/stream/mp4/Tom&Jerry";

                this.factory.getPlayer(urlMpdExtern).then(function (player) {
                        const playControl = new PlayButton(player);
                        const timeControl = new TimeControl(player);

                        controlsContainer.appendChild(playControl.getElement());
                        timeContainer.appendChild(timeControl.getElement());
                    },
                    function (reason) {
                        alert(reason);
                    }
                );
            } catch (err) {
                console.error(err);
            }
        });


        setTimeout(() => {
            this.dispatchEvent(new CustomEvent('rendered'));
        }, 1);

    }

    static get styles() {
        return css`
           video {
            width: 100%;
           }

           /* Space out content a bit */
           body {
              padding-top: 20px;
              padding-bottom: 20px;
           }

          .header,
          .marketing,
          .footer {
            padding-right: 15px;
            padding-left: 15px;
           }

         /* Custom page header */
         .header {
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e5e5;
         }
         /* Make the masthead heading the same height as the navigation */
         .header h3 {
            margin-top: 0;
            margin-bottom: 0;
            line-height: 40px;
         }

         /* Custom page footer */
         .footer {
            padding-top: 19px;
            color: #777;
            border-top: 1px solid #e5e5e5;
          }

          /* Customize container */
          @media (min-width: 768px) {
            .container {
              max-width: 730px;
             }
          }
          .container-narrow > hr {
             margin: 30px 0;
          }

          /* Responsive: Portrait tablets and up */
           @media screen and (min-width: 768px) {
          /* Remove the padding we set earlier */
             .header,
             .marketing,
             .footer {
                  padding-right: 0;
                  padding-left: 0;
             }
            /* Space out the masthead */
           .header {
                 margin-bottom: 30px;
            }
   }
        `;
    }

    render() {

        return html`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="container">
      <h1 class="text-muted">HTML5 Video Player</h1>
      <h3 class="text-muted" id="videoUrl"/>

      <div class="row">
        <div class="col-lg-12">
            <video controls id="videoPlayer"/>
        </div>
      </div>
      <div class="row h1">
        <div class="col-lg-3" id="controlsContainer">
        </div>
        <div class="col-lg-6"></div>
        <div class="col-lg-3 text-right" id="timeContainer"></div>
      </div>
   </div>`;
    }

}

customElements.define('video-player', VideoPlayer);