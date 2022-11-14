import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Duvidas Academicas',
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

          <ion-label class="header__title" slot="title" token="p16xb">Dúvidas Acadêmicas</ion-label>

          <div class="button-filter button-filter--aplicado" slot="right">
            <ion-button mode="ios" fill="clear" icon-only ds-size="xxs">
              <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
            </ion-button>
            <div class="button-filter__circle">
            </div>
          </div>
        </med-navbar>
      </med-header>

      <ion-content>
        <main class="duvidas">
          <ion-segment value="tab-1" scrollable>
            <ion-segment-button class="duvidas__tab" mode="md" value="tab-1">
              <ion-label>Todas</ion-label>
            </ion-segment-button>

            <ion-segment-button class="duvidas__tab" mode="md" value="tab-2">
              <ion-label>Minhas</ion-label>
            </ion-segment-button>
          </ion-segment>

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

          <div class="sem-duvidas">
           <ion-icon class="med-icon" name="med-inbox"></ion-icon>
           <ion-label class="sem-duvidas__text" token="h20x">AINDA NÃO HÁ DÚVIDAS POSTADAS</ion-label>
          </div>

        </main>
      </ion-content>
    </div>
  `;
};

export const SemDuvidas = Template.bind({});
SemDuvidas.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
