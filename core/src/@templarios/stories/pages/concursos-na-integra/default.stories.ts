import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Concursos na  Integra',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container container--height-100vh">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

            <ion-label class="header__title" slot="title" token="p16xb">concursos na íntegra</ion-label>
        </med-navbar>
      </med-header>

      <main class="concursos">
        <div class="concursos__input">
          <ion-icon class="med-icon" name="med-busca"></ion-icon>
          <ion-input mode="md" ds-color="neutral-2" placeholder="Digite o nome de um concurso..."></ion-input>
        </div>

        <div class="concursos__middle">
          <ion-icon class="med-icon" name="med-concursos"></ion-icon>
          <ion-label class="concursos__text" token="h20x">Buscar Concurso</ion-label>
          <ion-label class="concursos__text" token="p16x">Procure por qualquer concurso dentro do nosso branco de dados digitando o nome ou sigla da Instituição</ion-label>
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
