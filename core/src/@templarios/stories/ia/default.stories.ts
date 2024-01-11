import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../dist/ionic/index.esm';
//import { modalEnterAnimationSheetDesktop, modalLeaveAnimationSheetDesktop } from '../assets/sheet-animation';



export default {
  title: 'ia/initial',
};

const createSheetMobile = async () => {
  const modal = await modalController.create({
    component: 'sheet-ia',
    cssClass: 'tp-sheet',
    mode: 'ios'
  });

  await modal.present();
}

// const createSheetDesktop = async () => {
//   const modal = await modalController.create({
//     component: 'sheet-test',
//     cssClass: 'tp-sheet',
//     mode: 'ios',
//     enterAnimation: modalEnterAnimationSheetDesktop,
//     leaveAnimation: modalLeaveAnimationSheetDesktop
//   });

//   await modal.present();
// }


const Template = () => {
  return html`
    <ion-app>
      <ion-tabs class="general">
        <div class="modo-desktop">
            <div class="content__general">
              <div class="content__left">
                <div class="content__top">
                  <ion-button mode="ios" icon-only fill="clear" ds-size="xxs" @click="${() => createSheetMobile()}">
                    <ion-icon class="med-icon" name="med-menu2"></ion-icon>
                  </ion-button>
                </div>

                <div class="content__middle middle-ia">
                    <div class="middle-ia__chat">
                      <ion-content class="middle-ia__content">
                        <div class="chat">
                          <div class="chat__left">
                            <ion-avatar ds-size="xxs">
                              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
                            </ion-avatar>
                          </div>

                          <div class="chat__right">
                            <ion-text class="chat__title" token="p14xb" ds-color="neutral-10">
                              <p>
                                Nome do Usuario:
                              </p>
                            </ion-text>

                            <ion-text token="p14" ds-color="neutral-10">
                              <p>
                                Como fazer feijão na panela de pressão ?
                              </p>
                            </ion-text>
                          </div>
                        </div>

                        <div class="chat">
                          <div class="chat__left">
                            <ion-avatar ds-size="xxs">
                              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
                            </ion-avatar>
                          </div>

                          <div class="chat__right">
                            <ion-text class="chat__title" token="p14xb" ds-color="neutral-10">
                              <p>
                                Nome da IA:
                              </p>
                            </ion-text>

                            <div class="resposta">
                              <ion-text token="p14" ds-color="neutral-10">
                                <p>
                                  Claro, aqui está uma receita básica para fazer feijão na panela de pressão:
                                </p>
                              </ion-text>

                              <ion-text class="resposta__title" token="h20" ds-color="neutral-10">
                                <h1>
                                  Ingredientes:
                                </h1>
                              </ion-text>

                              <ul class="resposta__list">
                                <li class="resposta__item">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      500g de feijão (escolha o tipo de feijão de sua preferência)
                                    </p>
                                  </ion-text>
                                </li>

                                <li class="resposta__item">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      Água suficiente para cobrir o feijão na panela
                                    </p>
                                  </ion-text>
                                </li>

                                <li class="resposta__item">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      Sal a gosto
                                    </p>
                                  </ion-text>
                                </li>

                                <li class="resposta__item">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      Temperos opcionais: alho, cebola, louro, etc.
                                    </p>
                                  </ion-text>
                                </li>
                              </ul>

                              <ion-text class="resposta__title" token="h20" ds-color="neutral-10">
                                <h1>
                                  Instruções:
                                </h1>
                              </ion-text>

                              <ol class="resposta__list">
                                <li class="resposta__item resposta__item--mb">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      <span class="resposta__bold">Lave o feijão:</span>
                                      Coloque o feijão em uma peneira e lave em água corrente para remover impurezas.
                                    </p>
                                  </ion-text>
                                </li>

                                <li class="resposta__item resposta__item--mb">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      <span class="resposta__bold">Deixe de molho (opcional):</span>
                                      Coloque o feijão em uma tigela grande com água suficiente para cobri-lo e deixe de molho por algumas horas ou durante a noite. Isso ajuda a reduzir o tempo de cozimento, mas não é obrigatório.
                                    </p>
                                  </ion-text>
                                </li>

                                <li class="resposta__item resposta__item--mb">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      <span class="resposta__bold">Prepare os temperos (opcional): </span>
                                      Pique alho, cebola ou outros temperos que deseja adicionar ao feijão.
                                    </p>
                                  </ion-text>
                                </li>

                                <li class="resposta__item resposta__item--mb">
                                  <ion-text token="p14b" ds-color="neutral-10">
                                    <p>
                                      Cozinhe na panela de pressão:
                                    </p>
                                  </ion-text>

                                  <ul class="resposta__list resposta__list--mt">
                                    <li class="resposta__item">
                                      <ion-text token="p14" ds-color="neutral-10">
                                        <p>
                                          Coloque o feijão na panela de pressão.
                                        </p>
                                      </ion-text>
                                    </li>

                                    <li class="resposta__item">
                                      <ion-text token="p14" ds-color="neutral-10">
                                        <p>
                                          Cubra o feijão com água, cerca de 2 dedos acima do nível do feijão.
                                        </p>
                                      </ion-text>
                                    </li>

                                    <li class="resposta__item">
                                      <ion-text token="p14" ds-color="neutral-10">
                                        <p>
                                          Adicione os temperos se desejar.
                                        </p>
                                      </ion-text>
                                    </li>

                                    <li class="resposta__item">
                                      <ion-text token="p14" ds-color="neutral-10">
                                        <p>
                                          Feche a panela de pressão e leve ao fogo alto.
                                        </p>
                                      </ion-text>
                                    </li>

                                    <li class="resposta__item">
                                      <ion-text token="p14" ds-color="neutral-10">
                                        <p>
                                          Quando começar a pressão (a panela começar a chiar), reduza o fogo para médio-baixo e cozinhe por cerca de 20 a 30 minutos, dependendo do tipo de feijão e da sua preferência de consistência.
                                        </p>
                                      </ion-text>
                                    </li>

                                    <li class="resposta__item">
                                      <ion-text token="p14" ds-color="neutral-10">
                                        <p>
                                          Após o tempo, desligue o fogo e aguarde a pressão sair naturalmente antes de abrir a panela.
                                        </p>
                                      </ion-text>
                                    </li>
                                  </ul>
                                </li>

                                <li class="resposta__item resposta__item--mb">
                                  <ion-text token="p14" ds-color="neutral-10">
                                    <p>
                                      <span class="resposta__bold">Acerte o sal:</span>
                                      Após abrir a panela, verifique o sal e ajuste conforme necessário.
                                    </p>
                                  </ion-text>
                                </li>
                              </ol>

                              <ion-text class="resposta__conclusao" token="p14" ds-color="neutral-10">
                                <p>
                                  Lembre-se sempre de seguir as instruções de segurança ao lidar com panelas de pressão. O tempo de cozimento pode variar dependendo do tipo de feijão e da sua panela de pressão, então ajuste conforme necessário.
                                </p>
                              </ion-text>
                            </div>
                          </div>
                        </div>

                        <div class="chat">
                          <div class="chat__left">
                            <ion-avatar ds-size="xxs">
                              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
                            </ion-avatar>
                          </div>

                          <div class="chat__right">
                            <ion-text class="chat__title" token="p14xb" ds-color="neutral-10">
                              <p>
                                Nome do Usuario:
                              </p>
                            </ion-text>

                            <ion-text token="p14" ds-color="neutral-10">
                              <p>
                                Me envie uma imagem de exemplo
                              </p>
                            </ion-text>
                          </div>
                        </div>

                        <div class="chat">
                          <div class="chat__left">
                            <ion-avatar ds-size="xxs">
                              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
                            </ion-avatar>
                          </div>

                          <div class="chat__right">
                            <ion-text class="chat__title" token="p14xb" ds-color="neutral-10">
                              <p>
                                Nome da IA:
                              </p>
                            </ion-text>

                            <div class="resposta">
                              <ion-text token="p14" ds-color="neutral-10">
                                <p>
                                  Claro, aqui está:
                                </p>
                              </ion-text>

                              <div class="resposta__container-img">
                                <img class="resposta__img" src="https://placehold.co/400x300" />
                              </div>

                              <ion-text class="resposta__conclusao" token="p14" ds-color="neutral-10">
                                <p>
                                  Tenha em mente que esta é apenas uma imagem de referência.
                                </p>
                              </ion-text>
                            </div>
                          </div>
                        </div>
                      </ion-content>

                      <div class="middle-ia__container">
                        <tp-input-container class="middle-ia__input" ds-color="neutral-2" has-button="end">
                          <ion-input mode="md" placeholder="Como posso te ajudar ?"></ion-input>
                          <ion-button slot="end" ds-size="xs" mode="ios" fill="clear" icon-only>
                            <ion-icon class="med-icon" slot="icon-only" name="med-enviar"></ion-icon>
                          </ion-button>
                        </tp-input-container>
                      </div>
                    </div>
                </div>
              </div>

              <div class="content__right">
                <!-- content__desktop-lateral - código duplicado para atender layout e scroll no desktop e mobile -->
                <div class="content__desktop-lateral content__desktop-lateral--desktop lateral-ia">
                <!-- <div class="lateral-ia__menu-collapsed">
                        <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                          <ion-icon class="med-icon" name="med-menu2"></ion-icon>
                        </ion-button>
                      </div> -->

                  <div class="lateral-ia__itens">
                    <ion-content>
                      <med-nav-item class="lateral-ia__item" icon="med-busca" text="Novo chat"></med-nav-item>

                      <med-nav-item class="lateral-ia__item" icon="med-naorespondida" text="Chat - 09/01/2024 - 17:06:55"></med-nav-item>

                      <med-nav-item class="lateral-ia__item" icon="med-naorespondida" text="Chat - 09/01/2024 - 17:06:55"></med-nav-item>

                      <med-nav-item class="lateral-ia__item" icon="med-naorespondida" text="Chat - 09/01/2024 - 17:06:55"></med-nav-item>
                    </ion-content>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <ion-tab-bar slot="bottom" class="bottom-nav tab-bar-fix" [ngClass]="{ 'bottom-nav--hide-mobile': desktopOnly }" #bar>
          <ion-tab-button class="bottom-nav__button bottom-nav__button--none" mode="ios">
            <ion-avatar class="icone-perfil" ds-size="xs">
              <ion-label>AB<ion-label>
            </ion-avatar>
          </ion-tab-button>

          <div class="bottom-nav__middle">
              <ion-tab-button class="bottom-nav__button" mode="ios">
                <div class="tp-tab-button bottom-nav__item bottom-nav__item--active">
                  <ion-icon class="med-icon" name="med-radio"></ion-icon>
                  <ion-label class="bottom-nav__text-item">
                    teste
                  </ion-label>
                </div>
              </ion-tab-button>

              <ion-tab-button class="bottom-nav__button" mode="ios">
                <div class="tp-tab-button bottom-nav__item bottom-nav__item--active">
                  <ion-icon class="med-icon" name="med-radio"></ion-icon>
                  <ion-label class="bottom-nav__text-item">
                    teste
                  </ion-label>
                </div>
              </ion-tab-button>

              <ion-tab-button class="bottom-nav__button" mode="ios">
                <div class="tp-tab-button bottom-nav__item bottom-nav__item--active">
                  <ion-icon class="med-icon" name="med-radio"></ion-icon>
                  <ion-label class="bottom-nav__text-item">
                    teste
                  </ion-label>
                </div>
              </ion-tab-button>

              <ion-tab-button class="bottom-nav__button" mode="ios">
                <div class="tp-tab-button bottom-nav__item bottom-nav__item--active">
                  <ion-icon class="med-icon" name="med-radio"></ion-icon>
                  <ion-label class="bottom-nav__text-item">
                    teste
                  </ion-label>
                </div>
              </ion-tab-button>

              <ion-tab-button class="bottom-nav__button" mode="ios">
                <div class="tp-tab-button bottom-nav__item bottom-nav__item--active">
                  <ion-icon class="med-icon" name="med-radio"></ion-icon>
                  <ion-label class="bottom-nav__text-item">
                    teste
                  </ion-label>
                </div>
              </ion-tab-button>
          </div>

          <ion-tab-button class="bottom-nav__button bottom-nav__button--none" [ngClass]="{ 'bottom-nav__button--no-cursor': !combo }" mode="ios">
            <div class="combo-produtos">
              <ion-icon class="med-icon" name="med-radio"></ion-icon>
            </div>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-app>
  `;
};

export const Default = Template.bind({});

