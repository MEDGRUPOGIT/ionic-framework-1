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
            <ion-label ds-color="neutral-10" token="p16b">
              Vídeo de Introdução
            </ion-label>
          </div>
        </div>
      </med-header>

      <ion-content class="medcode-video">
        <div class="medcode-video__content">
          <div class="medcode-video__player">
            &nbsp;
          </div>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Video = Template.bind({});
Video.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
