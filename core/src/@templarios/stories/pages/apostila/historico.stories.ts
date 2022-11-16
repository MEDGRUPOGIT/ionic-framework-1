import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Apostila',
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

          <ion-label class="header__title" slot="title" token="p16xb">HISTÓRICO</ion-label>
          <ion-label slot="subtitle" ds-color="brand" token="p12">NEF 1</ion-label>

          <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xs">
            <ion-icon slot="icon-only" class="med-icon" name="med-busca"></ion-icon>
          </ion-button>
        </med-navbar>
      </med-header>

      <ion-content class="">
        <div class="filtro-limpo">
          <div class="filtro-limpo__container">
            <ion-icon class="med-icon" name="med-limparfiltro"></ion-icon>
            <ion-label token="p16xb">Ainda não há marcações para esse filtro.</ion-label>
          </div>
        </div>

      </ion-content>

      
    </div>
  `;
};

export const Historico = Template.bind({});
Historico.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};