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
      // marcaAguaSuperior: '1234567890',
      // marcaAguaInferior: '1234567890',
      // titulo:'Alternativa A',
    }
  }).then((modal)=>{
    modal.present()
  });
}

const Template = () => {
  return html`
    <div class="container">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label class="header__title" slot="title" token="p16xb">Slide de aula</ion-label>
        </med-navbar>

        <med-toolbar class="subheader" slot="toolbar">
          <div class="subheader__container">
            <ion-label class="subheader__title" ds-color="neutral-10" token="p16xb">Nome da aula</ion-label>
            <ion-label ds-color="brand" token="p12xb">Professor</ion-label>
          </div>
        </med-toolbar>
      </med-header>

      <main class="slides">
        <ion-slides class="slides__content" pager="true">
          <ion-slide>
            <img class="slides__image" src="https://via.placeholder.com/500" @click="${createModal}">
          </ion-slide>

          <ion-slide>
            <img class="slides__image" src="https://via.placeholder.com/500" @click="${createModal}">
          </ion-slide>

          <ion-slide>
            <img class="slides__image" src="https://via.placeholder.com/500" @click="${createModal}">
          </ion-slide>

          </ion-slides>

          <div class="slides__contador">
            <ion-label token="p14x">1 de 15</ion-label>
          </div>

      </main>
    </div>
  `;
};

export const Slides = Template.bind({});
Slides.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};

