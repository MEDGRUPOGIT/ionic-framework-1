import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Concursos na  Integra',
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

            <ion-label class="header__title" slot="title" token="p16xb">concursos na íntegra</ion-label>
        </med-navbar>
      </med-header>

      <ion-content>
        <main class="concursos">
          <div class="concursos__input">
            <ion-icon class="med-icon" name="med-busca"></ion-icon>
            <ion-input mode="md" ds-color="neutral-2" placeholder="Digite o nome de um concurso..."></ion-input>
          </div>

          <div class="concursos__content">

            <div class="concursos__container">
              <med-tiles class="concursos__tiles" titulo="REVALIDA - USP SP" label="Revalida Usp Sp"></med-tiles>
              <med-tiles class="concursos__tiles" titulo="USP - RP" label="Hospital Das Clinicas Da Faculdade De medicina De Rp Da Usp"></med-tiles>
              <med-tiles class="concursos__tiles" titulo="USP - SP" label="Universidade De São Paulo - Sp"></med-tiles>
            </div>

          </div>
        </main>
      </ion-content>
    </div>
  `;
};

export const Pesquisa = Template.bind({});
Pesquisa.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
