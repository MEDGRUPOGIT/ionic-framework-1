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
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <div class="product-select" slot="title">
            <ion-button class="product-select__button" mode="ios" fill="clear">
              <div class="product-select__logo-container" slot="start">
                <ion-icon class="product-select__logo med-color-neutral-10" name="med-logo"></ion-icon>
              </div>
              <ion-label class="product-select__text" token="p16xb">medcurso</ion-label>
              <ion-icon class="med-icon" name="med-baixo" slot="end"></ion-icon>
            </ion-button>
          </div>
        </med-navbar>

        <med-toolbar class="subheader" slot="toolbar">
          <ion-label class="subheader__title" ds-color="neutral-10" token="p16xb">Slide de aula</ion-label>
        </med-toolbar>
      </med-header>


      <main class="slide-de-aula">
        <ion-item class="slide-de-aula__item" ds-color="neutral-2" radius="s08" spacing-v="s16" spacing-h="s16" mode="ios" lines="none">
          <ion-label class="slide-de-aula__text" token="p16xb">Clínica médica</ion-label>
          <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
        </ion-item>

        <med-accordion-list class="accordion-container" single-open>
          <med-accordion-item class="accordion">
            <div slot="middle">
              <ion-label class="accordion__title" ds-color="neutral-10" token="p16xb">Cirurgia</ion-label>
            </div>

            <div slot="end">
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
            </div>

            <div class="accordion__content" slot="content">
              <div class="materia">
                <div class="materia__ano">
                  <ion-label class="materia__text" ds-color="neutral-10" token="p14xb">2021</ion-label>
                </div>
                <div class="materia__list">
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 01</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Trauma</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 02</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Preparo Pré-Operatório e Avaliação do Risco Cirúrgico, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 03</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Resposta Endócrina e Imunológica ao Trauma, Queimaduras, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </div>

              <div class="materia">
                <div class="materia__ano">
                  <ion-label class="materia__text" ds-color="neutral-10" token="p14xb">2020</ion-label>
                </div>
                <div class="materia__list">
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 01</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Trauma</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 02</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Preparo Pré-Operatório e Avaliação do Risco Cirúrgico, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 03</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Resposta Endócrina e Imunológica ao Trauma, Queimaduras, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </div>
            </div>
          </med-accordion-item>

          <med-accordion-item class="accordion">
            <div slot="middle">
              <ion-label class="accordion__title" ds-color="neutral-10" token="p16xb">Pediatria</ion-label>
            </div>

            <div slot="end">
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
              </ion-button>
            </div>

            <div class="accordion__content" slot="content">
              <div class="materia">
                <div class="materia__ano">
                  <ion-label class="materia__text" ds-color="neutral-10" token="p14xb">2021</ion-label>
                </div>
                <div class="materia__list">
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 01</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Trauma</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 02</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Preparo Pré-Operatório e Avaliação do Risco Cirúrgico, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 03</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Resposta Endócrina e Imunológica ao Trauma, Queimaduras, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </div>

              <div class="materia">
                <div class="materia__ano">
                  <ion-label class="materia__text" ds-color="neutral-10" token="p14xb">2020</ion-label>
                </div>
                <div class="materia__list">
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 01</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Trauma</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 02</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Preparo Pré-Operatório e Avaliação do Risco Cirúrgico, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                  <ion-list class="materia__list-container" ds-color="neutral-15" radius="s00">
                    <ion-item class="materia__item-left" mode="ios" lines="none">
                      <ion-label class="materia__codigo" token="p16xb">0CIR 03</ion-label>
                    </ion-item>
                    <ion-item class="materia__item-right" mode="ios" lines="none">
                      <ion-label class="materia__descricao" token="p14">Resposta Endócrina e Imunológica ao Trauma, Queimaduras, (...)</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </div>
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
