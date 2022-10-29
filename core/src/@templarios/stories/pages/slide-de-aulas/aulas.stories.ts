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

          <ion-label class="header__title" slot="title" token="p16xb">medcode</ion-label>
        </med-navbar>

        <med-toolbar class="subheader" slot="toolbar">
          <div class="subheader__container">
            <ion-label class="subheader__title" ds-color="neutral-10" token="p16xb">Slide de aula</ion-label>
            <ion-label ds-color="brand" token="p12xb">TRAUMA</ion-label>
          </div>
        </med-toolbar>
      </med-header>

      <main class="content aulas">
        <med-base class="aulas__item" ds-color="neutral-25">
          <div class="aulas__top" slot="start">
            <ion-avatar class="aulas__avatar" ds-size="sm">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
            </ion-avatar>
            <div class="aulas__text-container">
              <ion-label class="aula__nome" ds-color="neutral-10" token="p14">Trauma I - Primeiro atendimento, cabeça e tórax</ion-label>
              <ion-label class="aula__professor" ds-color="neutral-10" token="p14">Mozart Netto</ion-label>
              <ion-label class="aula__data" ds-color="neutral-8" token="p14">02/01/2021 - 06:00 AM</ion-label>
            </div>
          </div>
          <div class="aulas__middle middle" slot="middle">
            <div class="aulas__avaliar-container">
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-success">
                <ion-icon slot="start" class="med-icon" name="med-excelente"></ion-icon>
                  Excelente
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-attention">
                <ion-icon slot="start" class="med-icon" name="med-bom"></ion-icon>
                  Bom
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-caution">
                <ion-icon slot="start" class="med-icon" name="med-regular"></ion-icon>
                  Regular
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-warning">
                <ion-icon slot="start" class="med-icon" name="med-ruim"></ion-icon>
                  Ruim
              </ion-button>
            </div>
            <div class="aulas__observacao-container">
              <ion-label class="aulas__observacao" ds-color="neutral-8" token="p14">Deixe sua observação</ion-label>
              <ion-textarea class="aulas__text-area" mode="md" placeholder="Digite aqui"></ion-textarea>
              <ion-label class="aulas__erro" ds-color="fb-warning" token="p12">Mensagem de erro</ion-label>
              </div>
          </div>
          <div class="aulas__bottom" slot="end">
            <div class="aulas__button-container">
              <ion-button class="aulas__button aulas__button--avaliar" mode="ios" ds-color="" ds-size="xs">
                AVALIAR
              </ion-button>
              <ion-button class="aulas__button" mode="ios" ds-color="neutral-4" ds-size="xs">
                NÃO AVALIAR
              </ion-button>
            </div>
            <img class="aulas__image" src="https://via.placeholder.com/500">
          </div>
        </med-base>

        <med-base class="aulas__item aulas__item--avaliando" ds-color="neutral-25">
          <div class="aulas__top" slot="start">
            <ion-avatar class="aulas__avatar" ds-size="sm">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
            </ion-avatar>
            <div class="aulas__text-container">
              <ion-label class="aula__nome" ds-color="neutral-10" token="p14">Trauma I - Primeiro atendimento, cabeça e tórax</ion-label>
              <ion-label class="aula__professor" ds-color="neutral-10" token="p14">Mozart Netto</ion-label>
              <ion-label class="aula__data" ds-color="neutral-8" token="p14">02/01/2021 - 06:00 AM</ion-label>
            </div>
          </div>
          <div class="aulas__middle middle" slot="middle">
            <div class="aulas__avaliar-container">
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-success">
                <ion-icon slot="start" class="med-icon" name="med-excelente"></ion-icon>
                  Excelente
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-attention">
                <ion-icon slot="start" class="med-icon" name="med-bom"></ion-icon>
                  Bom
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-caution">
                <ion-icon slot="start" class="med-icon" name="med-regular"></ion-icon>
                  Regular
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-warning">
                <ion-icon slot="start" class="med-icon" name="med-ruim"></ion-icon>
                  Ruim
              </ion-button>
            </div>
            <div class="aulas__observacao-container">
              <ion-label class="aulas__observacao" ds-color="neutral-8" token="p14">Deixe sua observação</ion-label>
              <ion-textarea class="aulas__text-area" mode="md" placeholder="Digite aqui"></ion-textarea>
              <ion-label class="aulas__erro" ds-color="fb-warning" token="p12">Mensagem de erro</ion-label>
              </div>
          </div>
          <div class="aulas__bottom" slot="end">
            <div class="aulas__button-container">
              <ion-button class="aulas__button aulas__button--avaliar" mode="ios" ds-color="" ds-size="xs">
                AVALIAR
              </ion-button>
              <ion-button class="aulas__button" mode="ios" ds-color="neutral-4" ds-size="xs">
                NÃO AVALIAR
              </ion-button>
            </div>
            <img class="aulas__image" src="https://via.placeholder.com/500">
          </div>
        </med-base>

        <med-base class="aulas__item aulas__item--avaliada" ds-color="neutral-25">
          <div class="aulas__top" slot="start">
            <ion-avatar class="aulas__avatar" ds-size="sm">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
            </ion-avatar>
            <div class="aulas__text-container">
              <ion-label class="aula__nome" ds-color="neutral-10" token="p14">Trauma I - Primeiro atendimento, cabeça e tórax</ion-label>
              <ion-label class="aula__professor" ds-color="neutral-10" token="p14">Mozart Netto</ion-label>
              <ion-label class="aula__data" ds-color="neutral-8" token="p14">02/01/2021 - 06:00 AM</ion-label>
            </div>
          </div>
          <div class="aulas__middle middle" slot="middle">
            <div class="aulas__avaliar-container">
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-success">
                <ion-icon slot="start" class="med-icon" name="med-excelente"></ion-icon>
                  Excelente
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-attention">
                <ion-icon slot="start" class="med-icon" name="med-bom"></ion-icon>
                  Bom
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-caution">
                <ion-icon slot="start" class="med-icon" name="med-regular"></ion-icon>
                  Regular
              </ion-button>
              <ion-button class="aulas__button-avaliar" mode="ios" ds-color="fb-warning">
                <ion-icon slot="start" class="med-icon" name="med-ruim"></ion-icon>
                  Ruim
              </ion-button>
            </div>
            <div class="aulas__observacao-container">
              <ion-label class="aulas__observacao" ds-color="neutral-8" token="p14">Deixe sua observação</ion-label>
              <ion-textarea class="aulas__text-area" mode="md" placeholder="Digite aqui"></ion-textarea>
              <ion-label class="aulas__erro" ds-color="fb-warning" token="p12">Mensagem de erro</ion-label>
              </div>
          </div>
          <div class="aulas__bottom" slot="end">
            <div class="aulas__button-container">
              <ion-button class="aulas__button aulas__button--avaliar" mode="ios" ds-color="" ds-size="xs">
                AVALIAR
              </ion-button>
              <ion-button class="aulas__button" mode="ios" ds-color="neutral-4" ds-size="xs">
                NÃO AVALIAR
              </ion-button>
            </div>
            <img class="aulas__image" src="https://via.placeholder.com/500">
          </div>
        </med-base>
      </main>
    </div>
  `;
};

export const Aulas = Template.bind({});
Aulas.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
