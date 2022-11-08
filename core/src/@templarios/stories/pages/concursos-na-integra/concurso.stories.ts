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

        <div class="concursos__content">
          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2022</ion-label>
          <div class="simulados__grid">
            <med-tiles class="simulados__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2021</ion-label>
          <div class="simulados__grid">
            <med-tiles class="simulados__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2019</ion-label>
          <div class="simulados__grid">
            <med-tiles class="simulados__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2018</ion-label>
          <div class="simulados__grid">
            <med-tiles class="simulados__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2017</ion-label>
          <div class="simulados__grid">
            <med-tiles class="simulados__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
          </div>

          <ion-label class="ano" ds-color="neutral-10" token="p16xb">2016</ion-label>
          <div class="simulados__grid">
            <med-tiles class="simulados__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
            <med-tiles class="simulados__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
          </div>

        </div>
      </main>
    </div>
  `;
};

export const Concurso = Template.bind({});
Concurso.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
