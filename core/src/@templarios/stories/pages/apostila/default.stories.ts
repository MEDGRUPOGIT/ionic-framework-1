import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController, popoverController } from '../../../../../dist/ionic/index.esm';
import { MedFontSize } from '../../../enums/font-size.enum';


export default {
  title: 'Pages/Medsoft/Apostila',
  decorators: [withDesign],
};

const createModalInformativo = async () => {
  modalController.create({
    component: 'informativo-modal',
    cssClass: 'tp-modal',
  }).then((modal)=>{
    modal.present()
  });
}

const createModalMedreader = async () => {
  modalController.create({
    component: 'medreader-pro-modal',
    cssClass: 'tp-modal',
  }).then((modal)=>{
    modal.present()
  });
}

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
    <ion-app>
      <med-header>
        <med-navbar slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label slot="title" token="p16b">NEF 1</ion-label>

          <med-tooltip class="header-tooltip" slot="right" placement="bottom" position="end" content="Suas anotações foram enviadas com SUCESSO para os servidores do MEDGRUPO.">
            <ion-icon class="med-icon med-color-neutral med-color-neutral-10 header-tooltip__nuvem-on" name="med-nuvem-on" slot="input"></ion-icon>
            <ion-icon class="med-icon med-color-neutral med-color-neutral-10 header-tooltip__nuvem-off" name="med-nuvem-off" slot="input"></ion-icon>
          </med-tooltip>
        </med-navbar>

        <med-toolbar class="toolbar-apostila" slot="toolbar" ds-color="neutral-10">
          <div class="toolbar-apostila__left" slot="start">
            <ion-button mode="ios" ds-color="neutral-1" icon-only fill="clear" ds-size="xxs">
              <ion-icon class="med-icon" slot="icon-only" name="med-anotacao"></ion-icon>
            </ion-button>
            <div class="toolbar-apostila__line"></div>
          </div>

          <ion-button class="toolbar-apostila__esquerda" mode="ios" ds-color="neutral-1" icon-only fill="clear" slot="start" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-esquerda"></ion-icon>
          </ion-button>

          <div class="toolbar-apostila__middle">
            <div class="toolbar-apostila__first">
              <ion-button class="toolbar-apostila__button" mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
                <ion-icon class="med-icon" slot="icon-only" name="med-duvidas"></ion-icon>
              </ion-button>
              <ion-button class="toolbar-apostila__button" mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
                <ion-icon class="med-icon" slot="icon-only" name="med-textoselecionar"></ion-icon>
              </ion-button>
              <ion-button class="toolbar-apostila__button" mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
                <ion-icon class="med-icon" slot="icon-only" name="med-busca"></ion-icon>
              </ion-button>
            </div>

            <div class="toolbar-apostila__second">
              <ion-button class="toolbar-apostila__button" mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs" @click="${createModalInformativo}">
                <ion-icon class="med-icon" slot="icon-only" name="med-informacao"></ion-icon>
              </ion-button>
              <ion-button class="toolbar-apostila__button" mode="ios" ds-color="neutral-1" icon-only fill="clear" class="med-tollbar__button" ds-size="xs" @click="${createModalMedreader}">
                <ion-icon class="med-icon" slot="icon-only" name="med-editar"></ion-icon>
              </ion-button>
              <ion-button class="toolbar-apostila__button" class="toolbar-apostila__font-zoom" ds-color="neutral-1" mode="ios" icon-only fill="clear" ds-size="xs" @click="${(e) => createPopover(e, value)}">
                <ion-icon class="med-icon" slot="icon-only" name="med-fontemaior"></ion-icon>
              </ion-button>
            </div>
          </div>

          <div class="toolbar-apostila__fake-element" slot="end">
          </div>
          <ion-button class="toolbar-apostila__direita" mode="ios" ds-color="neutral-1" icon-only fill="clear" slot="end" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
          </ion-button>
        </med-toolbar>
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

      <ion-content class="apostila">
        <ion-label token="h20x" ds-color="neutral-10">APOSTILA...</ion-label>

        <div class="busca-apostila busca-apostila--open">
          <div class="busca-apostila__search">
            <div class="busca-apostila__icon">
              <ion-icon class="med-icon" name="med-busca"></ion-icon>
            </div>

            <ion-input class="busca-apostila__input" ds-color="neutral-8" mode="md" placeholder="Digite o que deseja buscar..."></ion-input>

            <ion-button class="busca-apostila__close" mode="ios" ds-color="neutral-5" icon-only fill="clear" ds-size="xxs">
              <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
            </ion-button>
          </div>

          <div class="busca-apostila__resultados busca-apostila__resultados--open">
            <div class="busca-apostila__nao-encontrado">
              <ion-icon class="med-icon busca-apostila__icon-erro med-color-neutral med-color-neutral-10" name="med-busca-erro"></ion-icon>
              <ion-label token="p18x">Sua busca não obteve resultados.</ion-label>
              <ion-label token="p18x">Por favor, utilize outros termos.</ion-label>
            </div>

            <div class="busca-apostila__encontrado">
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
              <ion-item
                class="busca-apostila__item"
                ds-color="neutral-2"
                mode="ios"
                lines="none">
                <div class="busca-apostila__container-text">
                  <ion-label class="busca-apostila__capitulo">Capitulo 2</ion-label>
                  <ion-label class="busca-apostila__text" ds-color="neutral-8">Texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado texto encontrado</ion-label>
                </div>
                <ion-icon class="med-icon" slot="end" name="med-direita"></ion-icon>
              </ion-item>
            </div>
          </div>
        </div>
      </ion-content>

      <ion-footer class="bottom">
        <div class="bottom__range">
          <ion-range min="20" max="80" step="2">
            <ion-label slot="end" token="p14">0%</ion-label>
          </ion-range>
        </div>

        <div class="bottom__estimativa">
          <ion-label token="p14">Estimativa para terminar</ion-label>
          <ion-label class="bottom__text" token="p14" ds-color="brand">3h e 26m</ion-label>
        </div>
      </ion-footer>

      <div class="segment-text">
        <div class="segment-text__top">
          <ion-label token="p18x">Selecione o segmento do texto para postar a sua dúvida</ion-label>
        </div>

        <div class="segment-text__bottom">
          <div class="color-select segment-text__cores-container">
            <div class="color-select__cor color-select__cor--warning">
            </div>
            <div class="color-select__cor color-select__cor--attention">
            </div>
            <div class="color-select__cor color-select__cor--success">
            </div>
            <div class="color-select__cor color-select__cor--brand">
            </div>
          </div>
          <ion-button class="segment-text__close" mode="ios" ds-color="neutral-10" icon-only fill="clear" ds-size="md">
            <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
          </ion-button>
          <ion-button class="segment-text__duvida" mode="ios" icon-only ds-size="md">
            <ion-icon class="med-icon" slot="icon-only" name="med-enviar"></ion-icon>
          </ion-button>
        </div>
      </div>

      <div class="menu-bottom">
        <div class="menu-bottom__row">
          <div class="color-select">
            <div class="color-select__cor color-select__cor--warning">
            </div>
            <div class="color-select__cor color-select__cor--attention">
            </div>
            <div class="color-select__cor color-select__cor--success">
            </div>
            <div class="color-select__cor color-select__cor--brand">
            </div>
          </div>
          <ion-button class="menu-bottom__notes" mode="ios" icon-only ds-size="md">
            <ion-icon class="med-icon menu-bottom__icon-notes" slot="icon-only" name="med-notes"></ion-icon>
            <ion-icon class="med-icon menu-bottom__icon-fechar" slot="icon-only" name="med-fechar"></ion-icon>
          </ion-button>

          <div class="menu-bottom__column">
            <div class="menu-bottom__marcadores">
              <ion-label class="menu-bottom__text">Sublinhar</ion-label>
              <ion-button class="menu-bottom__button" mode="ios" icon-only ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-textosublinhar"></ion-icon>
              </ion-button>
            </div>
            <div class="menu-bottom__marcadores">
              <ion-label class="menu-bottom__text">Marcar</ion-label>
              <ion-button class="menu-bottom__button" mode="ios" icon-only ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-textoselecionar"></ion-icon>
              </ion-button>
            </div>
            <div class="menu-bottom__marcadores">
              <ion-label class="menu-bottom__text">Bookmark</ion-label>
              <ion-button class="menu-bottom__button" mode="ios" icon-only ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-marcar"></ion-icon>
              </ion-button>
            </div>
            <div class="menu-bottom__marcadores">
              <ion-label class="menu-bottom__text">Anotar em texto</ion-label>
              <ion-button class="menu-bottom__button" mode="ios" icon-only ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-duvidasacademicas"></ion-icon>
              </ion-button>
            </div>
            <div class="menu-bottom__marcadores">
              <ion-label class="menu-bottom__text">Buscar a seleção</ion-label>
              <ion-button class="menu-bottom__button" mode="ios" icon-only ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-busca"></ion-icon>
              </ion-button>
            </div>
            <div class="menu-bottom__marcadores">
              <ion-label class="menu-bottom__text">Depositar dúvida</ion-label>
              <ion-button class="menu-bottom__button" mode="ios" icon-only ds-size="md">
                <ion-icon class="med-icon" slot="icon-only" name="med-ajuda"></ion-icon>
              </ion-button>
            </div>
          </div>
        </div>
      </div>
    </ion-app>
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
