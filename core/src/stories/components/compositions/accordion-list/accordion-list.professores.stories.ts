import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Accordion List/Professores',
  decorators: [withDesign],
};

const Template = () => {

  setTimeout(() => {
    document.querySelector('med-video-thumbnail').addEventListener('click', (e) => {
      e.stopPropagation();
    })

    document.querySelector('.cp-accordion-list__middle').addEventListener('click', (e) => {
      e.stopPropagation();
    })
  }, 1000);

  return html`
  <style>
  .cp-accordion-list__item {
    --padding: 0;
    --middle-width: 100%;
  }

  </style>
    <ion-app>
      <ion-content>
        <!-- component -->
        <med-accordion-list class="cp-accordion-list" single-open="false">
          <med-accordion-item class="cp-accordion-list__item" color="aula" background>

            <med-aula-professor slot="middle" ds-color="aula" icon="med-video" titulo="Aula de Revisão" professores="2" videos="5" value="0.3"></med-aula-professor>
          <!-- <ion-icon class="cp-accordion-list__icon cp-accordion-list__icon--color med-icon" slot="start" name="med-video" ></ion-icon>
            <div class="cp-accordion-list__middle" slot="middle">
              <med-type token="p16b">Aula de Revisão</med-type>
              <med-type class="cp-accordion-list__caption" token="p14" ds-color="neutral-7">2 Professor, 17 Vídeos</med-type>
              <med-type token="p10" ds-color="neutral-7">9% Concluído</med-type>
            </div>
            <ion-button slot="end" ds-name="tertiary" ds-size="xxs">
              <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
            </ion-button>-->

            <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="auxiliar" value="0.3"></ion-progress-bar>

            <div class="cp-accordion-list__content" slot="content">
              <div class="cp-accordion-list__aulas">
                <med-base>
                  <med-avatar class="cp-accordion-list__aulas-start" slot="start" letter="A" ds-color="" ds-size="lg"></med-avatar>
                  <div class="cp-accordion-list__aulas-middle" slot="middle">
                    <med-type token="p12x" ds-color="neutral-8">Professor</med-type>
                    <med-type class="cp-accordion-list__caption" token="p16b">Felipe Marinho Bastos</med-type>
                    <med-type token="p10" ds-color="neutral-7">20% Concluído</med-type>
                    <med-rate-result class="cp-accordion-list__aulas-result" excelente="2K" bom="367" regular="117" ruim="12"></med-rate-result>
                  </div>
                  <div class="cp-accordion-list__aulas-end" slot="end">
                    <ion-button class="cp-accordion-list__aulas-btn-small" ds-name="tertiary" >
                      <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                    <ion-button class="cp-accordion-list__aulas-btn" ds-name="tertiary" ds-size="xs" .dsColor="neutral-3">
                      15 Vídeos
                      <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                  </div>
                </med-base>
                <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="auxiliar" value="0.3"></ion-progress-bar>
              </div>
              <div class="cp-accordion-list__aulas">
                <med-base>
                  <med-avatar class="cp-accordion-list__aulas-start" slot="start" letter="A" ds-color="" ds-size="lg"></med-avatar>
                  <div class="cp-accordion-list__aulas-middle" slot="middle">
                    <med-type token="p12x" ds-color="neutral-8">Professor</med-type>
                    <med-type class="cp-accordion-list__caption" token="p16b">Felipe Marinho Bastos</med-type>
                    <med-type token="p10" ds-color="neutral-7">20% Concluído</med-type>
                    <med-rate-result class="cp-accordion-list__aulas-result" excelente="2K" bom="367" regular="117" ruim="12"></med-rate-result>
                  </div>
                  <div class="cp-accordion-list__aulas-end" slot="end">
                    <ion-button class="cp-accordion-list__aulas-btn-small" ds-name="tertiary" >
                      <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                    <ion-button class="cp-accordion-list__aulas-btn" ds-name="tertiary" ds-size="xs" .dsColor="neutral-3">
                      15 Vídeos
                      <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                  </div>
                </med-base>
                <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="auxiliar" value="0.3"></ion-progress-bar>
              </div>

            </div>
          </med-accordion-item>
        </med-accordion-list>
        <!-- component -->
      </ion-content>
    </ion-app>
    `;
};

export const Professores = Template.bind({});
Professores.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Professores.argTypes = {};
