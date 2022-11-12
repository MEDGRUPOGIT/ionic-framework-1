import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../dist/ionic/index.esm';

export default {
  title: 'Pages/Medsoft/Duvidas Academicas',
  decorators: [withDesign],
};

const createModalExcluir = async () => {
  modalController.create({
    component: 'excluir-modal',
    cssClass: 'tp-modal',
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

          <div class="duvidas__container">
            <div class="card-duvidas">
              <div class="card-duvidas__top">
                <ion-label class="card-duvidas__questao" token="p14x"> Em Questão 02 - 2018 UERJ </ion-label>

                <div class="card-duvidas__informacao">
                  <div class="card-duvidas__identificacao">
                    <ion-avatar class="card-duvidas__avatar" ds-size="sm">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                    </ion-avatar>

                    <div class="card-duvidas__dados">
                      <ion-badge class="card-duvidas__badge" ds-color="neutral-1" ds-size="sm"> MINHA DÚVIDA </ion-badge>
                      <ion-label ds-color="neutral-10" token="p14x"> Marina - MG </ion-label>
                      <ion-label class="card-duvidas__numero" ds-color="neutral-8" token="p12x"> #20179 | há 1d </ion-label>
                    </div>
                  </div>

                  <med-context-menu class="med-context-menu card-duvidas__context">
                    <ul class="med-context-menu__list">
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-cadeado"></ion-icon>
                        <ion-label token="p16">Tornar privado</ion-label>
                      </li>
                      <li class="med-context-menu__item" @click="${createModalExcluir}">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                        <ion-label token="p16">Deletar</ion-label>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                        <ion-label token="p16">Editar</ion-label>
                      </li>
                    </ul>
                  </med-context-menu>
                </div>

                <div class="card-duvidas__tolltip-imagem">
                  <med-tooltip content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="card-duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="card-duvidas__middle">
                <ion-label class="card-duvidas__pergunta" ds-color="neutral-9" token="p14"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.</ion-label>
              </div>
              <div class="card-duvidas__bottom">
                <div class="card-duvidas__bottom-left">
                  <ion-button class="card-duvidas__favorito" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-attention">
                    <ion-icon slot="icon-only" class="med-icon" name="med-estrela"></ion-icon>
                  </ion-button>
                  <div class="button-like card-duvidas__like">
                    <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                      <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                      </ion-button>
                    <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                  </div>
                  <med-tooltip content="Toque novamente para denunciar" placement="top" position="start">
                    <ion-button slot="input" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-warning">
                      <ion-icon slot="icon-only" class="med-icon" name="med-alerta"></ion-icon>
                    </ion-button>
                  </med-tooltip>
                </div>

                <ion-button class="button-quantidade card-duvidas__quantidade" mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="button-quantidade__span">5</span>
                </ion-button>
              </div>
            </div>

            <div class="card-duvidas card-duvidas--mostra-pergunta card-duvidas--resposta-oficial">
              <div class="card-duvidas__top">
                <ion-label class="card-duvidas__questao" token="p14x"> Em Questão 02 - 2018 UERJ </ion-label>

                <div class="card-duvidas__informacao">
                  <div class="card-duvidas__identificacao">
                    <ion-avatar class="card-duvidas__avatar" ds-size="sm">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                    </ion-avatar>

                    <div class="card-duvidas__dados">
                      <ion-badge class="card-duvidas__badge" ds-color="neutral-1" ds-size="sm"> MINHA DÚVIDA </ion-badge>
                      <ion-label ds-color="neutral-10" token="p14x"> Marina - MG </ion-label>
                      <ion-label class="card-duvidas__numero" ds-color="neutral-8" token="p12x"> #20179 | há 1d </ion-label>
                    </div>
                  </div>

                  <med-context-menu class="med-context-menu card-duvidas__context">
                    <ul class="med-context-menu__list">
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-cadeado"></ion-icon>
                        <ion-label token="p16">Tornar privado</ion-label>
                      </li>
                      <li class="med-context-menu__item" @click="${createModalExcluir}">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                        <ion-label token="p16">Deletar</ion-label>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                        <ion-label token="p16">Editar</ion-label>
                      </li>
                    </ul>
                  </med-context-menu>
                </div>

                <div class="card-duvidas__tolltip-imagem">
                  <med-tooltip content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="card-duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="card-duvidas__middle">
                <ion-label class="card-duvidas__pergunta" ds-color="neutral-9" token="p14"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.</ion-label>
              </div>
              <div class="card-duvidas__bottom">
                <div class="card-duvidas__bottom-left">
                  <ion-button class="card-duvidas__favorito" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-attention">
                    <ion-icon slot="icon-only" class="med-icon" name="med-estrela"></ion-icon>
                  </ion-button>
                  <div class="button-like card-duvidas__like">
                    <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                      <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                      </ion-button>
                    <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                  </div>
                  <med-tooltip content="Toque novamente para denunciar" placement="top" position="start">
                    <ion-button slot="input" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-warning">
                      <ion-icon slot="icon-only" class="med-icon" name="med-alerta"></ion-icon>
                    </ion-button>
                  </med-tooltip>
                </div>

                <ion-button class="button-quantidade card-duvidas__quantidade" mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="button-quantidade__span">5</span>
                </ion-button>
              </div>
            </div>

            <div class="card-duvidas card-duvidas--menos-informacao">
              <div class="card-duvidas__top">
                <ion-label class="card-duvidas__questao" token="p14x"> Em Questão 02 - 2018 UERJ </ion-label>

                <div class="card-duvidas__informacao">
                  <div class="card-duvidas__identificacao">
                    <ion-avatar class="card-duvidas__avatar" ds-size="sm">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                    </ion-avatar>

                    <div class="card-duvidas__dados">
                      <ion-badge class="card-duvidas__badge" ds-color="neutral-1" ds-size="sm"> MINHA DÚVIDA </ion-badge>
                      <ion-label ds-color="neutral-10" token="p14x"> Marina - MG </ion-label>
                      <ion-label class="card-duvidas__numero" ds-color="neutral-8" token="p12x"> #20179 | há 1d </ion-label>
                    </div>
                  </div>

                  <med-context-menu class="med-context-menu card-duvidas__context">
                    <ul class="med-context-menu__list">
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-cadeado"></ion-icon>
                        <ion-label token="p16">Tornar privado</ion-label>
                      </li>
                      <li class="med-context-menu__item" @click="${createModalExcluir}">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                        <ion-label token="p16">Deletar</ion-label>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                        <ion-label token="p16">Editar</ion-label>
                      </li>
                    </ul>
                  </med-context-menu>
                </div>

                <div class="card-duvidas__tolltip-imagem">
                  <med-tooltip content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="card-duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="card-duvidas__middle">
                <ion-label class="card-duvidas__pergunta" ds-color="neutral-9" token="p14"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.</ion-label>
              </div>
              <div class="card-duvidas__bottom">
                <div class="card-duvidas__bottom-left">
                  <ion-button class="card-duvidas__favorito" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-attention">
                    <ion-icon slot="icon-only" class="med-icon" name="med-estrela"></ion-icon>
                  </ion-button>
                  <div class="button-like card-duvidas__like">
                    <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                      <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                      </ion-button>
                    <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                  </div>
                  <med-tooltip content="Toque novamente para denunciar" placement="top" position="start">
                    <ion-button slot="input" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-warning">
                      <ion-icon slot="icon-only" class="med-icon" name="med-alerta"></ion-icon>
                    </ion-button>
                  </med-tooltip>
                </div>

                <ion-button class="button-quantidade card-duvidas__quantidade" mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="button-quantidade__span">5</span>
                </ion-button>
              </div>
            </div>

            <div class="card-duvidas card-duvidas--minha">
              <div class="card-duvidas__top">
                <ion-label class="card-duvidas__questao" token="p14x"> Em Questão 02 - 2018 UERJ </ion-label>

                <div class="card-duvidas__informacao">
                  <div class="card-duvidas__identificacao">
                    <ion-avatar class="card-duvidas__avatar" ds-size="sm">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                    </ion-avatar>

                    <div class="card-duvidas__dados">
                      <ion-badge class="card-duvidas__badge" ds-color="neutral-1" ds-size="sm"> MINHA DÚVIDA </ion-badge>
                      <ion-label ds-color="neutral-10" token="p14x"> Marina - MG </ion-label>
                      <ion-label class="card-duvidas__numero" ds-color="neutral-8" token="p12x"> #20179 | há 1d </ion-label>
                    </div>
                  </div>

                  <med-context-menu class="med-context-menu card-duvidas__context">
                    <ul class="med-context-menu__list">
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-cadeado"></ion-icon>
                        <ion-label token="p16">Tornar privado</ion-label>
                      </li>
                      <li class="med-context-menu__item" @click="${createModalExcluir}">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                        <ion-label token="p16">Deletar</ion-label>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                        <ion-label token="p16">Editar</ion-label>
                      </li>
                    </ul>
                  </med-context-menu>
                </div>

                <div class="card-duvidas__tolltip-imagem">
                  <med-tooltip content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="card-duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="card-duvidas__middle">
                <ion-label class="card-duvidas__pergunta" ds-color="neutral-9" token="p14"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.</ion-label>
              </div>
              <div class="card-duvidas__bottom">
                <div class="card-duvidas__bottom-left">
                  <ion-button class="card-duvidas__favorito" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-attention">
                    <ion-icon slot="icon-only" class="med-icon" name="med-estrela"></ion-icon>
                  </ion-button>
                  <div class="button-like card-duvidas__like">
                    <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                      <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                      </ion-button>
                    <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                  </div>
                  <med-tooltip content="Toque novamente para denunciar" placement="top" position="start">
                    <ion-button slot="input" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-warning">
                      <ion-icon slot="icon-only" class="med-icon" name="med-alerta"></ion-icon>
                    </ion-button>
                  </med-tooltip>
                </div>

                <ion-button class="button-quantidade button-quantidade--zero card-duvidas__quantidade" mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="button-quantidade__span">5</span>
                </ion-button>
              </div>
            </div>

            <div class="card-duvidas card-duvidas--minha card-duvidas--mostra-pergunta card-duvidas--resposta-oficial">
              <div class="card-duvidas__top">
                <ion-label class="card-duvidas__questao" token="p14x"> Em Questão 02 - 2018 UERJ </ion-label>

                <div class="card-duvidas__informacao">
                  <div class="card-duvidas__identificacao">
                    <ion-avatar class="card-duvidas__avatar" ds-size="sm">
                      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                    </ion-avatar>

                    <div class="card-duvidas__dados">
                      <ion-badge class="card-duvidas__badge" ds-color="neutral-1" ds-size="sm"> MINHA DÚVIDA </ion-badge>
                      <ion-label ds-color="neutral-10" token="p14x"> Marina - MG </ion-label>
                      <ion-label class="card-duvidas__numero" ds-color="neutral-8" token="p12x"> #20179 | há 1d </ion-label>
                    </div>
                  </div>

                  <med-context-menu class="med-context-menu card-duvidas__context">
                    <ul class="med-context-menu__list">
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-cadeado"></ion-icon>
                        <ion-label token="p16">Tornar privado</ion-label>
                      </li>
                      <li class="med-context-menu__item" @click="${createModalExcluir}">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                        <ion-label token="p16">Deletar</ion-label>
                      </li>
                      <li class="med-context-menu__item">
                        <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                        <ion-label token="p16">Editar</ion-label>
                      </li>
                    </ul>
                  </med-context-menu>
                </div>

                <div class="card-duvidas__tolltip-imagem">
                  <med-tooltip content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="card-duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="card-duvidas__middle">
                <ion-label class="card-duvidas__pergunta" ds-color="neutral-9" token="p14"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.</ion-label>
              </div>
              <div class="card-duvidas__bottom">
                <div class="card-duvidas__bottom-left">
                  <ion-button class="card-duvidas__favorito" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-attention">
                    <ion-icon slot="icon-only" class="med-icon" name="med-estrela"></ion-icon>
                  </ion-button>
                  <div class="button-like card-duvidas__like">
                    <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                      <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                      </ion-button>
                    <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                  </div>
                  <med-tooltip content="Toque novamente para denunciar" placement="top" position="start">
                    <ion-button slot="input" mode="ios" fill="clear" icon-only ds-size="xs" ds-color="fb-warning">
                      <ion-icon slot="icon-only" class="med-icon" name="med-alerta"></ion-icon>
                    </ion-button>
                  </med-tooltip>
                </div>

                <ion-button class="button-quantidade button-quantidade--zero card-duvidas__quantidade" mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="button-quantidade__span">5</span>
                </ion-button>
              </div>
            </div>
          </div>

          <ion-button class="duvidas__button" mode="ios" icon-only>
            <ion-icon slot="icon-only" class="med-icon" name="med-duvidas"></ion-icon>
          </ion-button>
        </main>
      </ion-content>
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
