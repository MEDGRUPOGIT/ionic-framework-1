import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Aulas/Accordion Lista',
  decorators: [withDesign],
};

const Template = () => {

  setTimeout(() => {
    document.querySelector('med-video-thumbnail').addEventListener('click', (e) => {
      e.stopPropagation();
    })

    document.querySelector('.med-accordion-lista__middle').addEventListener('click', (e) => {
      e.stopPropagation();
    })
  }, 1000);

  return html`
    <ion-app>
      <ion-content>

      <!-- component -->
      <med-accordion-list class="med-accordion-lista" single-open="false">
        <med-accordion-item color="aula" background>

          <med-video-thumbnail class="med-accordion-lista__thumbnail" slot="start" ds-color="aula" value="50" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>

          <div class="med-accordion-lista__middle" slot="middle">
            <med-caption ds-size="sm">
              <h3 class="med-clamp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus?</h3>
            </med-caption>
            <div class="med-time-stamp">
              <ion-icon name="med-retafinal" class="med-icon med-icon--xs med-time-stamp__icon "></ion-icon>
              <med-caption ds-size="xs" ds-color="aula"><span>00:00:00</span></med-caption>
            </div>
          </div>

          <div class="med-accordion-lista__end" slot="end">
            <ion-button class="med-list-item-accordion__button" ds-color="aula" ds-name="tertiary" ds-size="xs">
              <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
            </ion-button>
            <med-download-button ds-color="aula"></med-download-button>
          </div>

          <div slot="content">
            <med-base class="med-accordion-lista__item">
              <div class="med-time-stamp" slot="start">
                <ion-icon name="med-play" class="med-icon med-icon--sm med-time-stamp__icon"></ion-icon>
                <med-caption ds-size="sm" ds-color="neutral-8" class="med-time-stamp__title"><span>Clinica geral</span></med-caption>
                <med-caption ds-size="sm" ds-color="aula"><span>00:00:00</span></med-caption>
              </div>

              <div slot="end" class="med-accordion-lista__slot-end">
                <ion-button ds-name="tertiary">
                  <ion-icon slot="icon-only" class="med-icon med-accordion-lista__icon" name="med-direita"></ion-icon>
                </ion-button>
              </div>
            </med-base>
            <med-base class="med-accordion-lista__item">
              <div class="med-time-stamp" slot="start">
                <ion-icon name="med-play" class="med-icon med-icon--sm med-time-stamp__icon"></ion-icon>
                <med-caption ds-size="sm" ds-color="neutral-8" class="med-time-stamp__title"><span>Clinica geral</span></med-caption>
                <med-caption ds-size="sm" ds-color="aula"><span>00:00:00</span></med-caption>
              </div>

              <div slot="end" class="med-accordion-lista__slot-end">
                <ion-button ds-name="tertiary">
                  <ion-icon slot="icon-only" class="med-icon med-accordion-lista__icon" name="med-direita"></ion-icon>
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
