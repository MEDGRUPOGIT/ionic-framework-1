import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Duvidas Academicas',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <div class="container container--height-100vh">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label class="header__title" slot="title" token="p16xb">Dúvidas Acadêmicas</ion-label>

          <ion-button slot="right" mode="ios" fill="clear" icon-only ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
          </ion-button>
        </med-navbar>
      </med-header>

      <main class="duvidas">
        <ion-segment value="tab-1" scrollable>
          <ion-segment-button class="duvidas__tab" mode="md" value="tab-1">
            <ion-label>Todas</ion-label>
          </ion-segment-button>

          <ion-segment-button class="duvidas__tab" mode="md" value="tab-2">
            <ion-label>Minhas</ion-label>
          </ion-segment-button>
        </ion-segment>

        <div class="duvidas__wrap">
          <div class="duvidas__item">
            <div class="duvidas__card">
              <div class="duvidas__top">
                <ion-label class="duvidas__questao" token="p14x"> Em Questão 02 -2018 UERJ </ion-label>

                <div class="duvidas__informacao">
                  <div class="duvidas__identificacao">
                    <ion-avatar class="duvidas__avatar" ds-size="sm">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                    </ion-avatar>

                    <div class="duvidas__dados">
                      <ion-badge class="duvidas__badge" ds-color="neutral-1" ds-size="sm"> MINHA DÚVIDA </ion-badge>
                      <ion-label ds-color="neutral-10" token="p14x"> Marina - MG </ion-label>
                      <ion-label class="duvidas__numero" ds-color="neutral-8" token="p12x"> #20179 | há 1d </ion-label>
                    </div>
                  </div>

                  <med-context-menu class="med-context-menu">
                    <ul class="med-context-menu__list">
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-cadeado"></ion-icon>
                        <med-type token="p16">Tornar privado</med-type>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                        <med-type token="p16">Deletar</med-type>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                        <med-type token="p16">Editar</med-type>
                      </li>
                    </ul>
                  </med-context-menu>
                </div>

                <div class="duvidas__tolltip-imagem">
                  <med-tooltip class="" content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="duvidas__middle">
                <ion-label class="duvidas__pergunta" ds-color="neutral-9" token="p14"> pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta
                pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta</ion-label>
              </div>
              <div class="duvidas__bottom">
                <div class="duvidas__bottom-left">
                  <ion-button class="duvidas__favorito" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-attention">
                    <ion-icon slot="icon-only" class="med-icon" name="med-estrela"></ion-icon>
                  </ion-button>
                  <div class="duvidas__like-container">
                    <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                      <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                      </ion-button>
                    <ion-label class="duvidas__like" ds-color="neutral-10" token="p12"> 5 </ion-label>
                  </div>
                  <med-tooltip content="Toque novamente para denunciar" placement="top" position="start">
                    <ion-button slot="input" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-warning">
                      <ion-icon slot="icon-only" class="med-icon" name="med-alerta"></ion-icon>
                    </ion-button>
                  </med-tooltip>
                </div>

                <ion-button mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="duvidas__quantidade">5</span>
                </ion-button>
              </div>
            </div>
          </div>
        </div>
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
