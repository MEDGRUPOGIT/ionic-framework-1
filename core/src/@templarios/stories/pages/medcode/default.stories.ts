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

            <ion-label slot="title" token="p16b">MEDCODE</ion-label>

          <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xs">
            <ion-icon slot="icon-only" class="med-icon" name="med-qrcode"></ion-icon>
          </ion-button>
        </med-navbar>
      </med-header>

      <ion-content class="medcode">
        <div class="medcode__content">
          <ion-label class="medcode__text" ds-color="neutral-10" token="p18x">Para ler uma marca, clique aqui:</ion-label>
          <ion-button class="medcode__button" fill="clear" mode="ios" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-qrcode"></ion-icon>
          </ion-button>
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
