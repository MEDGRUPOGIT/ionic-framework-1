import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Accordion List',
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
    <ion-app>
      <ion-content>
        <!-- component -->
        <med-accordion-list class="cp-accordion-list" single-open="false">
          <med-accordion-item class="cp-accordion-list__item" color="aula" background>
            <med-video-thumbnail class="cp-accordion-list__thumbnail" slot="start" ds-color="aula" value="50" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
            <div class="cp-accordion-list__middle" slot="middle">
              <med-type token="p14">Cardiologia</med-type>
              <div class="cp-time-stamp">
                <ion-icon class="med-icon med-icon--xs cp-time-stamp__icon" name="med-retafinal"></ion-icon>
                <med-type token="p12x" ds-color="aula">00:42:25</med-type>
              </div>
            </div>
            <div class="cp-accordion-list__end" slot="end">
              <ion-button ds-name="tertiary" ds-size="xxs">
                <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
              <med-download-button ds-color="aula"></med-download-button>
            </div>

            <div class="cp-accordion-list__content" slot="content">
              <div class="cp-accordion-list__aula">
                <div class="cp-time-stamp">
                  <ion-icon class="med-icon med-icon--sm cp-time-stamp__icon cp-time-stamp__icon--play" name="med-play" ></ion-icon>
                  <med-type class="cp-time-stamp__title" token="p12x" ds-color="neutral-9" >Taquiarritmias</med-type>
                  <med-type token="p12x" ds-color="aula">00:42:25</med-type>
                </div>
                <ion-button class="cp-accordion-list__avancar" ds-name="tertiary">
                  <ion-icon class="cp-accordion-list__icon med-icon" slot="icon-only" name="med-direita"></ion-icon>
                </ion-button>
              </div>
              <div class="cp-accordion-list__aula">
                <div class="cp-time-stamp">
                  <ion-icon class="med-icon med-icon--sm cp-time-stamp__icon cp-time-stamp__icon--play" name="med-play" ></ion-icon>
                  <med-type class="cp-time-stamp__title" token="p12x" ds-color="neutral-9" >Taquiarritmias</med-type>
                  <med-type token="p12x" ds-color="aula">00:42:25</med-type>
                </div>
                <ion-button class="cp-accordion-list__avancar" ds-name="tertiary">
                  <ion-icon class="cp-accordion-list__icon med-icon" slot="icon-only" name="med-direita"></ion-icon>
                </ion-button>
              </div>
            </div>
          </med-accordion-item>
        </med-accordion-list>
        <!-- component -->
      </ion-content>
    </ion-app>
    `;
};

export const Aulas = Template.bind({});
Aulas.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Aulas.argTypes = {};
