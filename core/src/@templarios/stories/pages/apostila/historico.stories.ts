import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Apostila',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container container--historico">
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

      <ion-content>
        <div class="filtro-limpo">
          <div class="filtro-limpo__container">
            <ion-icon class="med-icon" name="med-limparfiltro"></ion-icon>
            <ion-label token="p16xb">Ainda não há marcações para esse filtro.</ion-label>
          </div>
        </div>
      </ion-content>
    </div>

    <ion-footer>
      <ion-segment class="historico-footer" value="tab-1" scrollable>
        <ion-segment-button value="tab-1">
          <ion-label token="p14b">TODOS</ion-label>
        </ion-segment-button>

        <ion-segment-button mode="md" value="tab-2">
          <ion-icon class="med-icon" name="med-textoselecionar"></ion-icon>
        </ion-segment-button>

        <ion-segment-button mode="md" value="tab-3">
          <ion-icon class="med-icon" name="med-textosublinhar"></ion-icon>
        </ion-segment-button>

        <ion-segment-button mode="md" value="tab-4">
          <ion-icon class="med-icon" name="med-nopapo"></ion-icon>
        </ion-segment-button>

        <ion-segment-button value="tab-5">
          <ion-icon class="med-icon historico-footer__marcador-rotate" name="med-marcar"></ion-icon>
        </ion-segment-button>

        <ion-segment-button mode="md" value="tab-6">
          <ion-icon class="med-icon" name="med-duvidas"></ion-icon>
        </ion-segment-button>

        <ion-segment-button mode="md" value="tab-7">
          <med-tooltip collapsed enableHover="false" placement="top" position="center">
            <ion-icon class="med-icon" name="med-fechar" slot="input"></ion-icon>
            <div slot="content">
              <span>teste</span>
            </div>
          </med-tooltip>
        </ion-segment-button>
      </ion-segment>
    </ion-footer>
  `;
};

export const Historico = Template.bind({});
Historico.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};