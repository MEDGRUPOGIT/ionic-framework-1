import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Aulas/Accordion Aulas',
  decorators: [withDesign],
};

const Template = () => {



  return html`
  <style>


  </style>
    <ion-app>
      <ion-content>

      <!-- component -->
      <med-accordion-list class="med-accordion-aulas" single-open="true">
        <med-accordion-item background slots-toggle=[middle,end]">

          <ion-icon slot="start" name="med-video" class="med-icon med-accordion-aulas__start"></ion-icon>

          <div class="med-accordion-aulas__middle" slot="middle">
            <med-caption ds-size="sm">
              <h3 class="med-clamp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus?</h3>
            </med-caption>
            <med-caption ds-size="xs" ds-color="neutral-5" class="med-accordion-aulas__middle-caption">
              <h3>1 Professor, 1 vídeo</h3>
            </med-caption>
            <med-caption ds-size="xxs" ds-color="neutral-5">
              <h3>84% concluído</h3>
            </med-caption>
          </div>

          <div class="med-accordion-aulas__end" slot="end">
            <ion-button class="med-list-item-accordion__button" ds-color="aula" ds-name="tertiary" ds-size="xs">
              <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
            </ion-button>
          </div>

          <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="auxiliar" value="0.3"></ion-progress-bar>

          <div slot="content" class="med-accordion__content">

            <med-base ds-color="">
              <div slot="start" class="med-accordion-aulas__content-start">
                <med-avatar letter="A" ds-color="" ds-size="lg"></med-avatar>
              </div>

              <div slot="middle" class="med-accordion-aulas__content-middle">
                <med-caption ds-size="sm" ds-color="neutral-7">
                  <h3 class="med-clamp">Professor</h3>
                </med-caption>
                <med-caption ds-size="base" ds-color="" class="med-accordion-aulas__middle-caption">
                  <h3>Nome Teste</h3>
                </med-caption>
                <med-caption ds-size="xxs" ds-color="neutral-6">
                  <h3>20% concluído</h3>
                </med-caption>

                <med-rate-result class="med-accordion-aulas__result" excelente="5122" bom="511" regular="21" ruim="8"></med-rate-result>
              </div>

              <div slot="end" class="med-accordion-aulas__content-end">
                <ion-button ds-name="tertiary" class="med-accordion-aulas__button-small">
                  <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" ds-size="xs" .dsColor="neutral-3" class="med-accordion-aulas__button">
                  15 Vídeos
                  <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                </ion-button>
              </div>
            </med-base>

          </div>

        </med-accordion-item>

        <med-accordion-item background slots-toggle=[middle,end]">

          <ion-icon slot="start" name="med-video" class="med-icon med-accordion-aulas__start"></ion-icon>

          <div class="med-accordion-aulas__middle" slot="middle">
            <med-caption ds-size="sm">
              <h3 class="med-clamp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus?</h3>
            </med-caption>
            <med-caption ds-size="xs" ds-color="neutral-5" class="med-accordion-aulas__middle-caption">
              <h3>1 Professor, 1 vídeo</h3>
            </med-caption>
            <med-caption ds-size="xxs" ds-color="neutral-5">
              <h3>84% concluído</h3>
            </med-caption>
          </div>

          <div class="med-accordion-aulas__end" slot="end">
            <ion-button class="med-list-item-accordion__button" ds-color="aula" ds-name="tertiary" ds-size="xs">
              <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
            </ion-button>
          </div>

          <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="auxiliar" value="0.3"></ion-progress-bar>

          <div slot="content" class="med-accordion__content">

            <med-base ds-color="">
              <div slot="start" class="med-accordion-aulas__content-start">
                <med-avatar letter="A" ds-color="" ds-size="lg"></med-avatar>
              </div>

              <div slot="middle" class="med-accordion-aulas__content-middle">
                <med-caption ds-size="sm" ds-color="neutral-7">
                  <h3 class="med-clamp">Professor</h3>
                </med-caption>
                <med-caption ds-size="base" ds-color="" class="med-accordion-aulas__middle-caption">
                  <h3>Nome Teste</h3>
                </med-caption>
                <med-caption ds-size="xxs" ds-color="neutral-6">
                  <h3>20% concluído</h3>
                </med-caption>

                <med-rate-result class="med-accordion-aulas__result" excelente="5122" bom="511" regular="21" ruim="8"></med-rate-result>
              </div>

              <div slot="end" class="med-accordion-aulas__content-end">
                <ion-button ds-name="tertiary" class="med-accordion-aulas__button-small">
                  <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" ds-size="xs" .dsColor="neutral-3" class="med-accordion-aulas__button">
                  15 Vídeos
                  <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                </ion-button>
              </div>
            </med-base>

          </div>

        </med-accordion-item>

        <med-accordion-item background slots-toggle=[middle,end]">

          <ion-icon slot="start" name="med-video" class="med-icon med-accordion-aulas__start"></ion-icon>

          <div class="med-accordion-aulas__middle" slot="middle">
            <med-caption ds-size="sm">
              <h3 class="med-clamp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus?</h3>
            </med-caption>
            <med-caption ds-size="xs" ds-color="neutral-5" class="med-accordion-aulas__middle-caption">
              <h3>1 Professor, 1 vídeo</h3>
            </med-caption>
            <med-caption ds-size="xxs" ds-color="neutral-5">
              <h3>84% concluído</h3>
            </med-caption>
          </div>

          <div class="med-accordion-aulas__end" slot="end">
            <ion-button class="med-list-item-accordion__button" ds-color="aula" ds-name="tertiary" ds-size="xs">
              <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
            </ion-button>
          </div>

          <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="auxiliar" value="0.3"></ion-progress-bar>

          <div slot="content" class="med-accordion__content">

            <med-base ds-color="">
              <div slot="start" class="med-accordion-aulas__content-start">
                <med-avatar letter="A" ds-color="" ds-size="lg"></med-avatar>
              </div>

              <div slot="middle" class="med-accordion-aulas__content-middle">
                <med-caption ds-size="sm" ds-color="neutral-7">
                  <h3 class="med-clamp">Professor</h3>
                </med-caption>
                <med-caption ds-size="base" ds-color="" class="med-accordion-aulas__middle-caption">
                  <h3>Nome Teste</h3>
                </med-caption>
                <med-caption ds-size="xxs" ds-color="neutral-6">
                  <h3>20% concluído</h3>
                </med-caption>

                <med-rate-result class="med-accordion-aulas__result" excelente="5122" bom="511" regular="21" ruim="8"></med-rate-result>
              </div>

              <div slot="end" class="med-accordion-aulas__content-end">
                <ion-button ds-name="tertiary" class="med-accordion-aulas__button-small">
                  <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" ds-size="xs" .dsColor="neutral-3" class="med-accordion-aulas__button">
                  15 Vídeos
                  <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                </ion-button>
              </div>
            </med-base>

          </div>

        </med-accordion-item>

      </med-accordion-list>
      <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Default.argTypes = {
};
