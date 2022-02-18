import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Pages/MedsoftPro/Aulas',
  decorators: [withDesign],
};

const Template = ({ dsColor, value }) => {
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

      .col-left__med-aula-professor {
        margin-bottom: 16px;
      }

      .col-right__professor {
        align-items: center;
        margin-bottom: 16px;
      }

      .col-right__professor-result {
        margin-right: 24px;
      }

      .col-right__professor-text {
        margin-left: 16px;
        margin-right: auto;
      }

      .col-right__professor-nome {
        margin: 8px 0;
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
              <med-type token="h24x">Aulas</med-type>
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

              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="2" videos="5" value="0.2" active="true"></med-aula-professor>
              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="7" videos="15" value="0.58"></med-aula-professor>
              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="1" videos="8" value="0.82"></med-aula-professor>
              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="65" videos="232" value="0.44"></med-aula-professor>
              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="65" videos="232" value="0.44"></med-aula-professor>
              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="65" videos="232" value="0.44"></med-aula-professor>
              <med-aula-professor class="col-left__med-aula-professor" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="65" videos="232" value="0.44"></med-aula-professor>
            </div>

            <div class="col-right">
              <med-base class="col-right__professor">
                <med-avatar slot="start" letter="A" ds-color="aula" ds-size="lg"></med-avatar>
                <div class="col-right__professor-text" slot="start">
                  <med-type token="p14">Professor</med-type>
                  <med-type class="col-right__professor-nome" token="p16xb">Nome Professor</med-type>
                  <med-type token="p12" ds-color="neutral-8">20% Concluído</med-type>
                </div>

                <med-rate-result class="col-right__professor-result" slot="end" excelente="2321" bom="123" regular="12" ruim="1"></med-rate-result>
                <med-type slot="end" token="p14" ds-color="neutral-8">100 Vídeos</med-type>
                <ion-button slot="end" ds-name="tertiary">
                  <ion-icon class="med-icon" name="med-direita" slot="icon-only"></ion-icon>
                </ion-button>
              </med-base>

              <med-base class="col-right__professor">
                <med-avatar slot="start" letter="A" ds-color="aula" ds-size="lg"></med-avatar>
                <div class="col-right__professor-text" slot="start">
                  <med-type token="p14">Professor</med-type>
                  <med-type class="col-right__professor-nome" token="p16xb">Nome Professor</med-type>
                  <med-type token="p12" ds-color="neutral-8">20% Concluído</med-type>
                </div>

                <med-rate-result class="col-right__professor-result" slot="end" excelente="2321" bom="123" regular="12" ruim="1"></med-rate-result>
                <med-type slot="end" token="p14" ds-color="neutral-8">100 Vídeos</med-type>
                <ion-button slot="end" ds-name="tertiary">
                  <ion-icon class="med-icon" name="med-direita" slot="icon-only"></ion-icon>
                </ion-button>
              </med-base>

              <med-base class="col-right__professor">
                <med-avatar slot="start" letter="A" ds-color="aula" ds-size="lg"></med-avatar>
                <div class="col-right__professor-text" slot="start">
                  <med-type token="p14">Professor</med-type>
                  <med-type class="col-right__professor-nome" token="p16xb">Nome Professor</med-type>
                  <med-type token="p12" ds-color="neutral-8">20% Concluído</med-type>
                </div>

                <med-rate-result class="col-right__professor-result" slot="end" excelente="2321" bom="123" regular="12" ruim="1"></med-rate-result>
                <med-type slot="end" token="p14" ds-color="neutral-8">100 Vídeos</med-type>
                <ion-button slot="end" ds-name="tertiary">
                  <ion-icon class="med-icon" name="med-direita" slot="icon-only"></ion-icon>
                </ion-button>
              </med-base>

              <med-base class="col-right__professor">
                <med-avatar slot="start" letter="A" ds-color="aula" ds-size="lg"></med-avatar>
                <div class="col-right__professor-text" slot="start">
                  <med-type token="p14">Professor</med-type>
                  <med-type class="col-right__professor-nome" token="p16xb">Nome Professor</med-type>
                  <med-type token="p12" ds-color="neutral-8">20% Concluído</med-type>
                </div>

                <med-rate-result class="col-right__professor-result" slot="end" excelente="2321" bom="123" regular="12" ruim="1"></med-rate-result>
                <med-type slot="end" token="p14" ds-color="neutral-8">100 Vídeos</med-type>
                <ion-button slot="end" ds-name="tertiary">
                  <ion-icon class="med-icon" name="med-direita" slot="icon-only"></ion-icon>
                </ion-button>
              </med-base>

              <med-base class="col-right__professor">
                <med-avatar slot="start" letter="A" ds-color="aula" ds-size="lg"></med-avatar>
                <div class="col-right__professor-text" slot="start">
                  <med-type token="p14">Professor</med-type>
                  <med-type class="col-right__professor-nome" token="p16xb">Nome Professor</med-type>
                  <med-type token="p12" ds-color="neutral-8">20% Concluído</med-type>
                </div>

                <med-rate-result class="col-right__professor-result" slot="end" excelente="2321" bom="123" regular="12" ruim="1"></med-rate-result>
                <med-type slot="end" token="p14" ds-color="neutral-8">100 Vídeos</med-type>
                <ion-button slot="end" ds-name="tertiary">
                  <ion-icon class="med-icon" name="med-direita" slot="icon-only"></ion-icon>
                </ion-button>
              </med-base>

              <med-base class="col-right__professor">
                <med-avatar slot="start" letter="A" ds-color="aula" ds-size="lg"></med-avatar>
                <div class="col-right__professor-text" slot="start">
                  <med-type token="p14">Professor</med-type>
                  <med-type class="col-right__professor-nome" token="p16xb">Nome Professor</med-type>
                  <med-type token="p12" ds-color="neutral-8">20% Concluído</med-type>
                </div>

                <med-rate-result class="col-right__professor-result" slot="end" excelente="2321" bom="123" regular="12" ruim="1"></med-rate-result>
                <med-type slot="end" token="p14" ds-color="neutral-8">100 Vídeos</med-type>
                <ion-button slot="end" ds-name="tertiary">
                  <ion-icon class="med-icon" name="med-direita" slot="icon-only"></ion-icon>
                </ion-button>
              </med-base>

            </div>
          </div>

        </div>
      </div>
    </ion-app>
  `;
};

export const AulasProfessores = Template.bind({});
AulasProfessores.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
AulasProfessores.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.',
    table: {
      type:  { summary: 'Number' },
      defaultValue: { summary: '0' },
    },
  },
};
