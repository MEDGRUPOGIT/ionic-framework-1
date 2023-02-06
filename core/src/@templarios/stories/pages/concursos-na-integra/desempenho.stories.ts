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

          <ion-label slot="title" token="p16b">
            2019
            </ion-label>
          <ion-label slot="subtitle">
            USP - SP
          </ion-label>
        </med-navbar>
      </med-header>

      <ion-content class="concursos-desempenho">
        <div class="concursos-desempenho__title">
          <ion-label token="p16x">SUA NOTA: <ion-label token="p16xb">1</ion-label></ion-label>
        </div>

        <div class="concursos-desempenho__content">
          <div class="concursos-desempenho__questoes">
            <med-chart-radial titulo="100" subtitulo="Questoes" ds-size="lg"></med-chart-radial>
            <med-chart-radial-label></med-chart-radial-label>
          </div>

          <div class="concursos-desempenho__subheader">
            <ion-label token="p16x">Veja como você se sairia, considerando as especialidades oferecidas pelo concurso.</ion-label>
          </div>

          <div class="input-concursos input-concursos--desempenho">
            <ion-icon class="med-icon" name="med-busca"></ion-icon>
            <ion-input mode="md" ds-color="neutral-2" placeholder="Digite o nome de um concurso..."></ion-input>
          </div>

          <div class="concursos-desempenho__list">
            <div class="list-concursos">
              <ion-item class="list-concursos__header" ds-color="neutral-2" mode="ios" lines="none">
                <ion-label class="list-concursos__text-left">Nota de Corte</ion-label>
                <ion-label class="list-concursos__text-middle">Especialidade</ion-label>
                <ion-label>Resultado</ion-label>
              </ion-item>

              <ion-item class="list-concursos__especialidade" ds-color="neutral-1" mode="ios" lines="none">
                <ion-label class="list-concursos__text-left list-concursos__text-left--especialidade" token="p16xb">94</ion-label>
                <ion-label class="list-concursos__text-middle list-concursos__text-middle--especialidade" token="p16x">PSICOTERAPIA</ion-label>
                <ion-label token="p14b" ds-color="neutral-4">NÃO PASSARIA</ion-label>
              </ion-item>

              <ion-item class="list-concursos__especialidade" ds-color="neutral-1" mode="ios" lines="none">
                <ion-label class="list-concursos__text-left list-concursos__text-left--especialidade" token="p16xb">93</ion-label>
                <ion-label class="list-concursos__text-middle list-concursos__text-middle--especialidade" token="p16x">ENDOCRINOLOGIA E METABOLOGIA</ion-label>
                <ion-label token="p14b" ds-color="neutral-4">NÃO PASSARIA</ion-label>
              </ion-item>

              <ion-item class="list-concursos__especialidade" ds-color="neutral-1" mode="ios" lines="none">
                <ion-label class="list-concursos__text-left list-concursos__text-left--especialidade" token="p16xb">92</ion-label>
                <ion-label class="list-concursos__text-middle list-concursos__text-middle--especialidade" token="p16x">COLOPROCTOLOGIA</ion-label>
                <ion-label token="p14b" ds-color="neutral-4">NÃO PASSARIA</ion-label>
              </ion-item>
            </div>
          </div>
        </div>
      </ion-content>

      <ion-footer class="concursos-desempenho-bottom">
        <ion-button mode="ios" ds-size="md">
          <ion-label token="p16xb">ESTUDAR CONCURSO</ion-label>
        </ion-button>
      </ion-footer>
    </ion-app>
  `;
};

export const Desempenho = Template.bind({});
Desempenho.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
