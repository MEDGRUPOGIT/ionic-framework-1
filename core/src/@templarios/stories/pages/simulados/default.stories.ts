import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Simulados',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label class="header__title" slot="title" token="p16xb">Simulados</ion-label>
        </med-navbar>

        <med-toolbar class="subheader" slot="toolbar">
          <ion-label class="subheader__title" ds-color="neutral-10" token="p16xb">2022</ion-label>
        </med-toolbar>
      </med-header>

      <main class="simulados">
        <div class="simulados__container">
          <div class="simulados__grid">
            <med-tiles titulo="R01 SIM 01" label="Geral 01">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 02" label="Geral 02">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 03" label="Geral 03">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 04" label="Geral 04">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 05" label="Geral 05">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 06" label="Geral 06">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 07" label="Geral 07">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
          </div>
        </div>

        <div class="simulados__container">
          <ion-label class="simulados__ano" ds-color="neutral-10" token="p16xb">2021</ion-label>
          <div class="simulados__grid">
            <med-tiles titulo="R01 SIM 01" label="Geral 01">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 02" label="Geral 02">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 03" label="Geral 03">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 04" label="Geral 04">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 05" label="Geral 05">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 06" label="Geral 06">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 07" label="Geral 07">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="SIM EXTRA" label="QUESTÕES COVID">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
          </div>
        </div>

        <div class="simulados__container">
          <ion-label class="simulados__ano" ds-color="neutral-10" token="p16xb">2020</ion-label>
          <div class="simulados__grid">
            <med-tiles titulo="R01 SIM 01" label="Geral 01">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 02" label="Geral 02">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 03" label="Geral 03">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 04" label="Geral 04">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 05" label="Geral 05">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 06" label="Geral 06">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
            <med-tiles titulo="R01 SIM 07" label="Geral 07">
              <ion-badge ds-size="xs">Estude</ion-button>
            </med-tiles>
          </div>
        </div>
      </main>
    </div>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
