import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Slide de Aulas',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container">
      <med-header>
        <med-navbar slot="navbar" >
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-button class="product-select-button" slot="title" mode="ios" fill="clear">
            <ion-label class="product-select-button__text" token="h20x">medcurso</ion-label>
            <ion-icon class="med-icon" name="med-baixo" slot="end"></ion-icon>
          </ion-button>
        </med-navbar>

        <med-toolbar class="subheader" slot="toolbar">
          <ion-label ds-color="neutral-10" token="p16">SLIDE DE AULA</ion-label>
        </med-toolbar>
      </med-header>


      <main class="content-slide">
        <ion-item class="content-slide__clinica" ds-color="neutral-2" radius="s08" mode="ios" lines="none">
          <ion-label>Texto Primario</ion-label>
          <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
        </ion-item>
        <med-accordion-list single-open>
          <med-accordion-item>
            <div slot="middle">
              <ion-label ds-color="neutral-10" token="p16xb">Header</ion-label>
            </div>

            <div slot="end">
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
            </div>

            <div slot="content">
              <med-type>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dignissim lorem. Aliquam ut erat tortor. Duis maximus metus nec mi imperdiet sagittis. Pellentesque ornare rutrum orci et faucibus. Curabitur cursus turpis eu metus facilisis, a maximus risus mollis. Integer sodales sollicitudin nisi, et pellentesque diam eleifend id. Maecenas sit amet neque eget lorem rutrum mollis. Cras volutpat, nulla eleifend pretium dapibus, augue metus aliquam metus, sed aliquet nulla libero fermentum sapien. Etiam pretium accumsan velit eget lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at mattis nisl, id vulputate lectus. Praesent ac urna lorem.</med-type>
            </div>
          </med-accordion-item>

          <med-accordion-item>
            <div slot="start">
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
              </ion-button>
            </div>

            <div slot="middle">
              <med-type token="p16xb">Header</med-type>
            </div>

            <div slot="end">
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
            </div>

            <div slot="content">
              <med-type>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et dignissim lorem. Aliquam ut erat tortor. Duis maximus metus nec mi imperdiet sagittis. Pellentesque ornare rutrum orci et faucibus. Curabitur cursus turpis eu metus facilisis, a maximus risus mollis. Integer sodales sollicitudin nisi, et pellentesque diam eleifend id. Maecenas sit amet neque eget lorem rutrum mollis. Cras volutpat, nulla eleifend pretium dapibus, augue metus aliquam metus, sed aliquet nulla libero fermentum sapien. Etiam pretium accumsan velit eget lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at mattis nisl, id vulputate lectus. Praesent ac urna lorem.</med-type>
            </div>

          </med-accordion-item>
        </med-accordion-list>
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
