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

      <ion-content class="concursos-buscar">
        <div class="concursos-buscar__middle">
          <ion-icon class="med-icon" name="med-concursos"></ion-icon>
          <ion-label class="concursos-buscar__text" token="h20x">Buscar Concurso</ion-label>
          <ion-label class="concursos-buscar__text" token="p16x">Procure por qualquer concurso dentro do nosso branco de dados digitando o nome ou sigla da Instituição</ion-label>
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
