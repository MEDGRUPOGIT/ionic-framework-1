import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { popoverController } from '../../../../../dist/ionic/index.esm';
import { MedFontSize } from '../../../enums/font-size.enum';


export default {
  title: 'Pages/Medsoft/Apostila',
  decorators: [withDesign],
};

let call = false;
let currentPopover = null;

const createPopover = async (ev, value) => {
  popoverController
    .create({
      component: "med-font-zoom",
      cssClass: "med-popover med-popover--font-zoom",
      componentProps: {
        value,
        emitter: {
          emit: (values) => {
            action("emitter")(values);
          },
        },
      },
      mode: "ios",
      showBackdrop: true,
      event: ev,
    })
    .then((popover) => {
      currentPopover = popover;
      call = true;
      popover.present();
    });
};

const Template = ({ value }) => {
  return html`
    <div class="container">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label class="header__title" slot="title" token="p16xb">NEF 1</ion-label>

          <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xs">
            <ion-icon slot="icon-only" class="med-icon" name="med-moon"></ion-icon>
          </ion-button>
        </med-navbar>
      </med-header>

      <div class="user-selector">
        <ion-item class="user-selector__title" ds-color="brand" mode="ios" lines="none">
          <div class="user-selector__container-text">
            <ion-label class="user-selector__text">Você fará postagens como &nbsp;</ion-label>
            <ion-label class="user-selector__text user-selector__text--underline">Professor</ion-label>
          </div>
          <ion-button class="user-selector__button" slot="end" ds-size="xxs" mode="ios">
            <ion-label>ALTERAR</ion-label>
          </ion-button>

          <ion-button class="user-selector__button user-selector__button-cancel" slot="end" ds-size="xxs" mode="ios">
            <ion-label>CANCELAR</ion-label>
          </ion-button>
        </ion-item>

        <div class="user-selector__bottom">
          <ion-label class="user-selector__subtitle" token="p16xb">Selecione o usuário:</ion-label>

          <div class="user-selector__container-buttons">
            <ion-button ds-color="neutral-10" ds-size="md" mode="ios">
              <ion-label class="user-selector__button-teacher" token="p16xb">PROFESSOR</ion-label>
            </ion-button>

            <ion-button class="user-selector__button-student" ds-size="md" fill="outline" ds-color="neutral-10" mode="ios">
            <ion-label token="p16xb">ALUNO</ion-label>
            </ion-button>
          </div>

          <div class="user-selector__inputs">
            <div class="user-selector__student">
              <ion-label token="p14">Digite um primeiro nome de aluno(a)</ion-label>
              <ion-input ds-color="neutral-10" mode="md" placeholder="Aluno"></ion-input>
            </div>

            <div class="user-selector__state">
              <ion-label token="p14">Selecione um Estado</ion-label>
              <tp-input-container ds-color="neutral-10" has-icon="end">
                <ion-select ds-color="neutral-10" mode="md" placeholder="Rio de Janeiro"></ion-select>
                <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
              </tp-input-container>
            </div>
          </div>

          <ion-button class="user-selector__button-bottom" ds-size="xs" mode="ios">
            <ion-label token="p14">APLICAR</ion-label>
          </ion-button>
        </div>
      </div>

      <med-toolbar ds-color="neutral-10">
        <div class="med-toolbar__left" slot="start">
          <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-anotacao"></ion-icon>
          </ion-button>
          <div class="med-toolbar__line"></div>
        </div>

        <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" slot="start" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-esquerda"></ion-icon>
        </ion-button>

        <div class="med-toolbar__middle">
          <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-duvidas"></ion-icon>
          </ion-button>
          <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-textoselecionar"></ion-icon>
          </ion-button>
          <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-busca"></ion-icon>
          </ion-button>
           <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-informacao"></ion-icon>
          </ion-button>
          <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-editar"></ion-icon>
          </ion-button>
          <ion-button class="med-toolbar__font-zoom" mode="ios" icon-only fill="clear" ds-size="xs" @click="${(e) => createPopover(e, value)}">
            <ion-icon class="med-icon" slot="icon-only" name="med-fontemaior"></ion-icon>
          </ion-button>
        </div>

        <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" slot="end" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
        </ion-button>
      </med-toolbar>

      <div class="bottom">
        <div class="bottom__range">
          <ion-range min="20" max="80" step="2">
            <ion-label slot="end" token="p14">0%</ion-label>
          </ion-range>
        </div>

        <div class="bottom__estimativa">
          <ion-label token="p14">Estimativa para terminar</ion-label>
          <ion-label class="bottom__text" token="p14" ds-color="brand">3h e 26m</ion-label>
        </div>
      </div>

      <div class="segment-text" style="display: none;">
        <div class="segment-text__top">
          <ion-label token="h20x">Selecione o segmento do texto para postar a sua dúvida</ion-label>
        </div>

        <div class="segment-text__bottom">
          <ion-button class="segment-text__button" mode="ios" ds-color="neutral-10" icon-only fill="clear" ds-size="lg">
            <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
          </ion-button>
        </div>
      </div>

      <div class="busca-apostila" style="display: none;">
        <div class="busca-apostila__icon">
          <ion-icon class="med-icon" name="med-busca"></ion-icon>
        </div>

        <ion-input class="busca-apostila__input" ds-color="neutral-8" mode="md" placeholder="Digite o que deseja buscar..."></ion-input>

        <ion-button mode="ios" ds-color="neutral-5" icon-only fill="clear" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
        </ion-button>
      </div>

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

Default.argTypes = {
  value: {
    options: Object.values(MedFontSize),
    control: { type: "select" },
    description: "Define o tamanho da fonte.",
    defaultValue: "16px",
    table: {
      type: { summary: Object.values(MedFontSize).join(' |') },
      defaultValue: { summary: "MedFontSize.XS" },
    },
  },
};