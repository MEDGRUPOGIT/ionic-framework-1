import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Simulados',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <med-header>
        <med-navbar slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label slot="title" token="p16b">SIMULADOS</ion-label>
        </med-navbar>
      </med-header>

      <ion-content class="simulados">
        <div class="simulados__content">
          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2022</ion-label>
          <div class="grid">
            <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2021</ion-label>
          <div class="grid">
            <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2020</ion-label>
          <div class="grid">
            <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
            <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07">
              <ion-badge ds-size="xs" ds-color="fb-attention">Estude</ion-badge>
            </med-tiles>
          </div>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
