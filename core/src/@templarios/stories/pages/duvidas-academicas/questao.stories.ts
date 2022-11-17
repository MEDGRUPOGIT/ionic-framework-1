import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Duvidas Academicas',
  decorators: [withDesign],
};

const Template = ({alternativas}) => {
  const id = Math.random().toString(36).substr(2, 9);
  const dsSkinConfig = alternativas.dsSkinConfig;

  setTimeout(() => {
    const alternativasEl = document.getElementById(id);
    //alternativasEl.dsSkinConfig = dsSkinConfig;

    for (const key in alternativas) {
      alternativasEl[key] = alternativas[key];
    }
  }, 5000);

  return html`
    <div class="container">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <div class="header__title-container" slot="title">
            <ion-label class="header__subheading" token="p12x">2018 UERJ / Questão 02</ion-label>
            <ion-label class="header__title" token="p16xb">Dúvidas Acadêmicas</ion-label>
          </div>

        </med-navbar>
      </med-header>

      <ion-content>
        <main class="questao">
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

          <div class="questao__container">
            <ion-label class="questao__title" token="h20x">Dúvida referente à:</ion-label>
            <ion-label class="questao__subtitle" token="p16xb">Questão 02 - 2018 UERJ</ion-label>

            <med-question class="question questao__question" ds-color="neutral-2" texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.">

              <div class="question__container">
                <div class="question__text-container">
                    <ion-label class="question__subtitle" token="p14xb">
                    Lorem ipsum dolor, sit amet.
                  </ion-label>
                  <ion-label class="question__text" token="p14x" ds-color="neutral-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus.
                  </ion-label>
                  <ion-label class="question__subtitle" token="p14xb">
                    Lorem ipsum dolor.
                  </ion-label>
                  <ion-label class="question__text" token="p14x" ds-color="neutral-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </ion-label>
                </div>

                <div class="question__alternativas">
                <med-alternativas id=${id} .dsSkinConfig=${dsSkinConfig}></med-alternativas>
                </div>

                <div class="question__video-container">
                  <ion-label class="question__subtitle" token="p14xb">
                    Comentário em Vídeo:
                  </ion-label>
                  <med-video-thumbnail class="question__thumbnail" value="0.5" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
                </div>
              </div>
            </med-question>

            <div class="questao__button">
              <ion-button class="button-quantidade" mode="ios" ds-size="xs">
                MAIS DÚVIDAS DA QUESTÃO
                <span class="button-quantidade__span">5</span>
              </ion-button>
            </div>

            <div class="card-duvidas card-duvidas--menos-informacao card-duvidas--mostra-pergunta questao__card-duvidas">
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
                      <li class="med-context-menu__item">
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
                  <med-tooltip class="" content="Esta dúvida contém uma resposta oficial da Equipe Acadêmica." placement="left">
                    <img class="card-duvidas__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                  </med-tooltip>
                </div>
              </div>

              <div class="card-duvidas__middle">
                <ion-label class="card-duvidas__pergunta" ds-color="neutral-9" token="p14">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam.
                </ion-label>
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

                <ion-button class="button-quantidade" mode="ios" ds-size="xs">
                  RESPONDER AO JOÃO
                  <span class="button-quantidade__span">5</span>
                </ion-button>
              </div>
            </div>

            <div class="questao__card-resposta-container">
              <div class="card-resposta card-resposta--comentar questao__card-resposta">
                <div class="card-resposta__top">
                  <div class="card-resposta__identificacao">
                    <ion-label ds-color="neutral-10" token="p14x"> Valdir - SP </ion-label>
                    <ion-label ds-color="neutral-8" token="p14x"> há 4 m </ion-label>
                  </div>

                  <img class="card-resposta__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>

                  <div class="card-resposta__top-right">
                    <ion-badge class="card-resposta__badge" ds-color="neutral-10" ds-size="sm"> RESPOSTA DA EQUIPE </br> ACADÊMICA </ion-badge>
                    <med-context-menu class="med-context-menu card-resposta__context">
                      <ul class="med-context-menu__list">
                        <li class="med-context-menu__item">
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
                </div>

                <div class="card-resposta__middle">
                  <ion-label ds-color="neutral-10" token="p14x">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </ion-label>
                </div>

                <div class="card-resposta__bottom">
                  <div class="card-resposta__button-container">
                    <div class="button-like card-resposta__like">
                      <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                        <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                        </ion-button>
                      <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                    </div>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      COMENTAR
                    </ion-button>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      DENUNCIAR
                    </ion-button>
                  </div>

                  <div class="card-resposta__comentar">
                    <ion-textarea mode="md" placeholder="Digite aqui sua réplica"></ion-textarea>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      ENVIAR
                    </ion-button>
                  </div>
                </div>
              </div>

              <div class="card-resposta card-resposta--check questao__card-resposta">
                <div class="card-resposta__top">
                  <div class="card-resposta__identificacao">
                    <ion-label ds-color="neutral-10" token="p14x"> Alexandre - SC </ion-label>
                    <ion-label ds-color="neutral-8" token="p14x"> há 4 m </ion-label>
                  </div>

                  <img class="card-resposta__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>

                  <div class="card-resposta__top-right">
                    <ion-badge class="card-resposta__badge" ds-color="neutral-10" ds-size="sm"> RESPOSTA DA EQUIPE </br> ACADÊMICA </ion-badge>
                    <med-context-menu class="med-context-menu card-resposta__context">
                      <ul class="med-context-menu__list">
                        <li class="med-context-menu__item">
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
                </div>

                <div class="card-resposta__middle">
                  <ion-label ds-color="neutral-10" token="p14x">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit.
                  </ion-label>
                </div>

                <div class="card-resposta__bottom">
                  <div class="card-resposta__button-container">
                    <div class="button-like card-resposta__like">
                      <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                        <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                        </ion-button>
                      <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                    </div>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      COMENTAR
                    </ion-button>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      DENUNCIAR
                    </ion-button>
                  </div>

                  <div class="card-resposta__comentar">
                    <ion-textarea mode="md" placeholder="Digite aqui sua réplica"></ion-textarea>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      ENVIAR
                    </ion-button>
                  </div>
                </div>
              </div>

              <div class="card-resposta card-resposta--resposta-oficial questao__card-resposta">
                <div class="card-resposta__top">
                  <div class="card-resposta__identificacao">
                    <ion-label ds-color="neutral-10" token="p14x"> Alan - RS </ion-label>
                    <ion-label ds-color="neutral-8" token="p14x"> há 4 m </ion-label>
                  </div>

                  <img class="card-resposta__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>

                  <div class="card-resposta__top-right">
                    <ion-badge class="card-resposta__badge" ds-color="neutral-10" ds-size="sm"> RESPOSTA DA EQUIPE </br> ACADÊMICA </ion-badge>
                    <med-context-menu class="med-context-menu card-resposta__context">
                      <ul class="med-context-menu__list">
                        <li class="med-context-menu__item">
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
                </div>

                <div class="card-resposta__middle">
                  <ion-label ds-color="neutral-10" token="p14x">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis.
                  </ion-label>
                </div>

                <div class="card-resposta__bottom">
                  <div class="card-resposta__button-container">
                    <div class="button-like card-resposta__like">
                      <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                        <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                        </ion-button>
                      <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                    </div>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      COMENTAR
                    </ion-button>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      DENUNCIAR
                    </ion-button>
                  </div>

                  <div class="card-resposta__comentar">
                    <ion-textarea mode="md" placeholder="Digite aqui sua réplica"></ion-textarea>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      ENVIAR
                    </ion-button>
                  </div>
                </div>
              </div>

              <div class="card-resposta card-resposta--resposta-oficial card-resposta--check questao__card-resposta">
                <div class="card-resposta__top">
                  <div class="card-resposta__identificacao">
                    <ion-label ds-color="neutral-10" token="p14x"> Brandão - RJ </ion-label>
                    <ion-label ds-color="neutral-8" token="p14x"> há 4 m </ion-label>
                  </div>

                  <img class="card-resposta__imagem" slot="input" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>

                  <div class="card-resposta__top-right">
                    <ion-badge class="card-resposta__badge" ds-color="neutral-10" ds-size="sm"> RESPOSTA DA EQUIPE </br> ACADÊMICA </ion-badge>
                    <med-context-menu class="med-context-menu card-resposta__context">
                      <ul class="med-context-menu__list">
                        <li class="med-context-menu__item">
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
                </div>

                <div class="card-resposta__middle">
                  <ion-label ds-color="neutral-10" token="p14x">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore deserunt consectetur ducimus ratione quos libero amet natus nisi quis, sint, aliquam blanditiis alias nesciunt facere culpa animi repellendus accusamus totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </ion-label>
                </div>

                <div class="card-resposta__bottom">
                  <div class="card-resposta__button-container">
                    <div class="button-like card-resposta__like">
                      <ion-button mode="ios" fill="clear" icon-only ds-size="xs">
                        <ion-icon slot="icon-only" class="med-icon" name="med-positivo"></ion-icon>
                        </ion-button>
                      <ion-label class="button-like__span" ds-color="neutral-10" token="p12"> 5 </ion-label>
                    </div>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      COMENTAR
                    </ion-button>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      DENUNCIAR
                    </ion-button>
                  </div>

                  <div class="card-resposta__comentar">
                    <ion-textarea mode="md" placeholder="Digite aqui sua réplica"></ion-textarea>
                    <ion-button mode="ios" fill="clear" ds-size="xs">
                      ENVIAR
                    </ion-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <ion-footer class="questao-footer">
          <ion-item ds-color="neutral-2" gap="s08" spacing-v="s08" spacing-h="s16" mode="ios" lines="none" detail="false">
            <ion-button class="questao-footer__button" mode="ios">
              ENCAMINHAR
            </ion-button>
          </ion-item>
        </ion-footer>
      </ion-content>
    </div>
  `;
};

export const Questao = Template.bind({});
Questao.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Questao.argTypes = {
  alternativas: {
    defaultValue: {
      alternativas: [
        {
          Alternativa: 'A',
          Enunciado: 'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0.55,
          Riscada: true,
        },
        {
          Alternativa: 'B',
          Enunciado: 'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.55
        },
        {
          Alternativa: 'C',
          Enunciado: 'Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0.3
        },
        {
          Alternativa: 'D',
          Enunciado: 'Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.05
        },
        {
          Alternativa: 'E',
          Enunciado: 'Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: 'C',
      mostraResposta: true,
      permiteRiscar: true,
      dsSkinConfig: { alternativas: 'A' }
    },
    control: { type: 'array' },
    description: 'Define a listagem de alternativas.',
    table: {
      type:  { summary: 'MedAlternativaInterface[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
