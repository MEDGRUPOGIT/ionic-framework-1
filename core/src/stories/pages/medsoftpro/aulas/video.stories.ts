import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Pages/MedsoftPro/Aulas',
  decorators: [withDesign],
};

const Template = ({ dsColor }) => {
  return html`

    <script type="text/javascript">
      function a() {
        var element = document.getElementById("logo");
        element.classList.toggle("cp-menu--open");
      }
    </script>

    <style>
      .desktop {
        display: flex;
      }

      .wrapper-right {
        width: 100%;
        height: 100vh;
      }

      .content {
        display: flex;
        height: calc(100% - 80px);
      }

      .col-left {
        padding: 0 24px 24px 24px;
        width: 400px;
        height: 100%;
        overflow: auto;
      }

      .col-right {
        padding: 0 24px;
        width: 100%;
        overflow-x: hidden;
        position: relative;
      }

      .header {
        display: flex;
        width: 100%;
        padding: 24px;
        justify-content: space-between;
      }

      .header-left {
        display: flex;
      }

      .header-right {
        display: flex;
      }

      .header-right__notify {
        position: relative;
        margin-left: 48px;
      }

      .header-right__badge {
        position: absolute;
        z-index: 1;
        right: 16px;
        --med-color-feedback-contrast: hsl(var(--med-color-neutral-10)) !important;
      }

      .col-left__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0;
      }

      .col-left__header-text {
        margin-bottom: 8px;
      }

      .cp-accordion-list__item {
        margin-bottom: 16px;
      }

      .col-right__video {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }

      .col-right__player {
        height: calc(100% - 85px);
        padding-bottom: 16px;
      }

      .col-right__player-thumb {
        width: 100%;
        height: 100%;
      }

      .week-date__container {
        margin: 16px 0;
        display: flex;
        align-items: center;
      }

      .week {
        margin-right: 16px;
      }

      .chart:last-child {
        margin-top: 16px;
        margin-bottom 24px;
      }
    </style>

    <ion-app>
      <div class="desktop">

        <div class="wrapper-left">

          <med-nav .dsColor=${dsColor}>
            <med-nav-item .dsColor=${dsColor} icon="med-play" text="Aulas" active></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-apostila" text="Materiais"></med-nav-item>
            <med-nav-item .dsColor=${dsColor} icon="med-concursos" text="Questões"></med-nav-item>

            <med-nav-accordion></med-nav-accordion>
          </med-nav>

        </div>

        <div class="wrapper-right">

          <div class="header">
            <div class="header-left">
              <ion-button ds-name="tertiary">
                <ion-icon class="med-icon" slot="icon-only" name="med-esquerda"></ion-icon>
              </ion-button>
              <med-type token="h24x">Videoaulas de M. Nicolich</med-type>
            </div>

            <div class="header-right">
              <ion-button ds-name="tertiary">
                2022 MEDCURSO
                <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
              </ion-button>
              <div class="header-right__notify">
                <ion-badge class="header-right__badge" ds-color="fb-warning" ds-size="xs">231</ion-badge>
                <ion-button ds-name="tertiary">
                  <ion-icon class="med-icon" slot="icon-only" name="med-notificacao"></ion-icon>
                </ion-button>
              </div>
            </div>
          </div>

          <div class="content">
            <div class="col-left">
              <div class="col-left__header">
                <div>
                  <med-type class="col-left__header-text" token="p16b">NEF 1</med-type>
                  <med-type token="p12x" ds-color="neutral-8">Arritimias Cardíacas, Morte Súbita</med-type>
                </div>
                <med-piechart ds-color="aula" text="NEF 1" value="0.5"</med-piechart>
              </div>

              <accordion-group class="cp-accordion-list" single-open="false">
                <accordion-item class="cp-accordion-list__item" color="aula" background>
                  <div class="cp-accordion-list__header" slot="header">
                    <med-video-thumbnail class="cp-accordion-list__thumbnail"ds-color="aula" value="50" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
                    <div class="cp-accordion-list__middle">
                      <med-type token="p14">Cardiologia</med-type>
                      <div class="cp-time-stamp">
                        <ion-icon class="med-icon med-icon--xs cp-time-stamp__icon" name="med-retafinal"></ion-icon>
                        <med-type token="p12x" ds-color="aula">00:42:25</med-type>
                      </div>
                    </div>
                    <div class="cp-accordion-list__end">
                      <ion-button ds-name="tertiary" ds-size="xxs">
                        <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
                      </ion-button>
                      <med-download-button ds-color="aula"></med-download-button>
                    </div>
                  </div>
                  <div class="cp-accordion-list__content" slot="content">
                    <med-video-list-item ds-color="aula"></med-video-list-item>
                    <med-video-list-item ds-color="aula"></med-video-list-item>
                  </div>
                </accordion-item>

                <accordion-item class="cp-accordion-list__item" color="aula" background>
                  <div class="cp-accordion-list__header" slot="header">
                    <med-video-thumbnail class="cp-accordion-list__thumbnail"ds-color="aula" value="50" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
                    <div class="cp-accordion-list__middle">
                      <med-type token="p14">Cardiologia</med-type>
                      <div class="cp-time-stamp">
                        <ion-icon class="med-icon med-icon--xs cp-time-stamp__icon" name="med-retafinal"></ion-icon>
                        <med-type token="p12x" ds-color="aula">00:42:25</med-type>
                      </div>
                    </div>
                    <div class="cp-accordion-list__end">
                      <ion-button ds-name="tertiary" ds-size="xxs">
                        <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
                      </ion-button>
                      <med-download-button ds-color="aula"></med-download-button>
                    </div>
                  </div>
                  <div class="cp-accordion-list__content" slot="content">
                    <med-video-list-item ds-color="aula"></med-video-list-item>
                    <med-video-list-item ds-color="aula"></med-video-list-item>
                  </div>
                </accordion-item>

                <accordion-item class="cp-accordion-list__item" color="aula" background>
                  <div class="cp-accordion-list__header" slot="header">
                    <med-video-thumbnail class="cp-accordion-list__thumbnail"ds-color="aula" value="50" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
                    <div class="cp-accordion-list__middle">
                      <med-type token="p14">Cardiologia</med-type>
                      <div class="cp-time-stamp">
                        <ion-icon class="med-icon med-icon--xs cp-time-stamp__icon" name="med-retafinal"></ion-icon>
                        <med-type token="p12x" ds-color="aula">00:42:25</med-type>
                      </div>
                    </div>
                    <div class="cp-accordion-list__end">
                      <ion-button ds-name="tertiary" ds-size="xxs">
                        <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
                      </ion-button>
                      <med-download-button ds-color="aula"></med-download-button>
                    </div>
                  </div>
                  <div class="cp-accordion-list__content" slot="content">
                    <med-video-list-item ds-color="aula"></med-video-list-item>
                    <med-video-list-item ds-color="aula"></med-video-list-item>
                  </div>
                </accordion-item>
              </accordion-group>

            </div>

            <div class="col-right">
              <div class="col-right__player">
                <med-video-thumbnail class="col-right__player-thumb" ds-color="aula" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
              </div>

              <med-base class="col-right__video cp-video-caption-feedback" radius="s00">
                <med-type class="cp-video-caption-feedback__start" token="p14" slot="start" ds-color="neutral-9">Ventilação Mecânica; Cardiointensivismo; Sepse; Neurointensivismo; Cuidados Paliativos</med-type>
                <med-rate-aula class="cp-video-caption-feedback__end" slot="end" ></med-rate-aula>
              </med-base>
            </div>
          </div>

        </div>
      </div>
    </ion-app>
  `;
};

export const VideosProfessores = Template.bind({});
VideosProfessores.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
VideosProfessores.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
