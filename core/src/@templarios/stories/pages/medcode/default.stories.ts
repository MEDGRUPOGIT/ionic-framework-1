import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Medcode',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container">
      <header class="header">
        <div class="header__left">
        <ion-back-button class="header__back-button" mode="ios" text="" ds-size="sm">
          <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
        </ion-back-button>
        </div>
        <div class="header__middle">
          <ion-label class="header__title" ds-color="neutral-10" token="p16xb">MEDCODE</ion-label>
        </div>
        <div class="header__right">
        <ion-button fill="clear" mode="ios" icon-only ds-size="sm">
          <ion-icon class="med-icon" slot="icon-only" name="med-qrcode"></ion-icon>
        </ion-button>
        </div>
      </header>

      <main class="content-medcode">
        <div class="content-medcode__container">
          <ion-label class="content-medcode__text" ds-color="neutral-10" token="p18x">Para ler uma marca, clique aqui:</ion-label>
          <ion-button class="content-medcode__button" fill="clear" mode="ios" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-qrcode"></ion-icon>
          </ion-button>
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
