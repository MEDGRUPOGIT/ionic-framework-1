import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Medcode',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container">
    <med-header>
      <med-navbar slot="navbar" >
        <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
          <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
        </ion-back-button>

        <med-type slot="title">MEDCODE</med-type>

        <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xxs">
          <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
        </ion-button>
      </med-navbar>
    </med-header>

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
