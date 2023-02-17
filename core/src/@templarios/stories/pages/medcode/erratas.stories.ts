import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Medcode',
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

          <ion-label slot="title" token="p16b">MED GIN  01</ion-label>

          <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xs">
            <ion-icon slot="icon-only" class="med-icon" name="med-qrcode"></ion-icon>
          </ion-button>
        </med-navbar>

        <div class="subheader" slot="toolbar">
          <div class="subheader__content">
            <ion-label ds-color="neutral-10" token="p16b">Atualizações e Erratas</ion-label>
          </div>
        </div>
      </med-header>

      <ion-content class="erratas">
        <div class="erratas__content">
          <ion-icon class="med-icon erratas__icon" name="med-acerto"></ion-icon>
          <ion-label class="erratas__text" ds-color="neutral-10" token="p18x">NÃO EXISTEM ATUALIZAÇÕES E ERRATAS PARA ESTA APOSTILA.</ion-label>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Erratas = Template.bind({});
Erratas.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
