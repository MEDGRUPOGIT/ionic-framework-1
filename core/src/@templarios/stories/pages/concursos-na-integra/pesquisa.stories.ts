import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Concursos na  Integra',
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

          <ion-label slot="title" token="p16b">CONCURSOS NA ÍNTEGRA</ion-label>
        </med-navbar>

        <div class="input-concursos" slot="toolbar">
          <ion-icon class="med-icon" name="med-busca"></ion-icon>
          <ion-input mode="md" ds-color="neutral-2" placeholder="Digite o nome de um concurso..."></ion-input>
        </div>
      </med-header>

      <ion-content class="concursos-pesquisa">
          <div class="concursos-pesquisa__content">
            <med-tiles class="concursos-pesquisa__tiles" titulo="REVALIDA - USP SP" label="Revalida Usp Sp"></med-tiles>
            <med-tiles class="concursos-pesquisa__tiles" titulo="USP - RP" label="Hospital Das Clinicas Da Faculdade De medicina De Rp Da Usp"></med-tiles>
            <med-tiles class="concursos-pesquisa__tiles" titulo="USP - SP" label="Universidade De São Paulo - Sp"></med-tiles>
          </div>
      </ion-content>
    </ion-app>
  `;
};

export const Pesquisa = Template.bind({});
Pesquisa.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
