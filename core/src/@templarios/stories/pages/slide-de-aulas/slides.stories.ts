import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../dist/ionic/index.esm';

export default {
  title: 'Pages/Medsoft/Slide de Aulas',
  decorators: [withDesign],
};

const createModal = async () => {
  modalController.create({
    component: 'med-image-zoom',
    cssClass: 'med-image-zoom',
    componentProps:{
      imagens: [
        {
          src: "https://via.placeholder.com/500",
          legenda: ""
        },
      ],
    }
  }).then((modal)=>{
    modal.present()
  });
}

const Template = () => {
  return html`
    <ion-app>
      <med-header>
        <med-navbar slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label slot="title" token="p16b">SLIDE DE AULA</ion-label>
        </med-navbar>

        <div class="subheader subheader--subtitle" slot="toolbar">
          <div class="subheader__content">
            <ion-label ds-color="neutral-10" token="p16b">Nome da aula</ion-label>
            <ion-label ds-color="brand" token="p12xb">Professor</ion-label>
          </div>
        </div>
      </med-header>

      <ion-content class="slides">
        <div class="slides__content">
          <ion-slides class="slides__container" pager="true">
            <ion-slide>
              <img class="slides__image" src="https://via.placeholder.com/500" @click="${createModal}" />
            </ion-slide>

            <ion-slide>
              <img class="slides__image" src="https://via.placeholder.com/500" @click="${createModal}" />
            </ion-slide>

            <ion-slide>
              <img class="slides__image" src="https://via.placeholder.com/500" @click="${createModal}" />
            </ion-slide>
          </ion-slides>

          <div class="slides__contador">
            <ion-label token="p14x">1 de 15</ion-label>
          </div>
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Slides = Template.bind({});
Slides.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};

