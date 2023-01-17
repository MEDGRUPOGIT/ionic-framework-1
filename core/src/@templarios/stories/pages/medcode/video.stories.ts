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
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

            <ion-label class="header__title" slot="title" token="p16xb">MED GIN  01</ion-label>

          <ion-button class="button-qrcode" mode="ios" icon-only fill="clear" slot="right" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-qrcode"></ion-icon>
          </ion-button>
        </med-navbar>

        <med-toolbar class="subheader" slot="toolbar">
          <div class="subheader__container">
            <ion-label class="subheader__title" ds-color="neutral-10" token="p16xb">Vídeo de Introdução</ion-label>
          </div>
        </med-toolbar>
      </med-header>

      <ion-content>
        <div class="video">
          <div class="video__player">
          </div>
        </div>
      </ion-content>
    </div>
  `;
};

export const Video = Template.bind({});
Video.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
