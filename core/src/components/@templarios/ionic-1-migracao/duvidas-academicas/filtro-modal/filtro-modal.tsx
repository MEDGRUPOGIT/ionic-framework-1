import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'filtro-modal',
  styleUrl: 'filtro-modal.scss',
  scoped: true,
})

export class FiltroModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-button slot="left" mode="ios" fill="clear" icon-only ds-size="xxs">
              <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
            </ion-button>

            <ion-label class="header__title" slot="title">Filtros</ion-label>

            <ion-button slot="right" mode="ios" fill="clear" icon-only ds-size="xs">
              <ion-icon class="med-icon" slot="icon-only" name="med-limparfiltro"></ion-icon>
            </ion-button>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <div class="filtros">
            <div class="filtros__top">
              <ion-label class="filtros__title">Exibição das dúvidas</ion-label>
              <div class="filtros__button-container">
                <ion-button class="filtros__button" ds-color="neutral-10" ds-size="md" mode="ios">
                  TODAS
                </ion-button>
                <ion-button class="filtros__button" ds-size="md" fill="outline" ds-color="neutral-10" mode="ios">
                  MATERIAL
                </ion-button>
                <ion-button class="filtros__button" ds-size="md" fill="outline" ds-color="neutral-10" mode="ios">
                  QUESTÕES
                </ion-button>
              </div>
            </div>

            <div class="filtros__middle">
              <div class="filtros__duvida-container">
                <ion-label class="filtros__ordenacao">Ordenação das dúvidas:</ion-label>
                <tp-input-container has-icon="end">
                  <ion-select mode="md" placeholder="Concursos Premium / Mais recentes"></ion-select>
                  <ion-icon class="med-icon" slot="end" name="med-baixo"></ion-icon>
                </tp-input-container>

                <div class="filtros__apostila-container">
                  <ion-button mode="ios" fill="clear" ds-size="xs" no-padding="true">
                    Selecione uma Apostila
                  </ion-button>
                  <ion-label class="filtros__apostila">CAR 1 2019</ion-label>
                </div>

                <div class="filtros__input-container">
                  <ion-label class="filtros__input-label" ds-color="neutral-8">ID da dúvida</ion-label>
                  <ion-input class="filtros__input" mode="md" placeholder="Digite aqui"></ion-input>
                  <ion-label class="filtros__input-label" ds-color="neutral-8">ID da questão</ion-label>
                  <ion-input class="filtros__input" mode="md" placeholder="Digite aqui"></ion-input>
                </div>
              </div>

              <div class="filtros__list">
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-apostila"></ion-icon>
                  <ion-label>Minhas atribuições pendentes</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-informacao"></ion-icon>
                  <ion-label>Sem interação da Equipe Acadêmica</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-estrela"></ion-icon>
                  <ion-label>Favoritas / Seguindo</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-checkcirculo"></ion-icon>
                  <ion-label>Com resposta da Equipe Acadêmica</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-equipe-homologada"></ion-icon>
                  <ion-label>Com resposta homologada pela Equipe Acadêmica</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-contribuicao"></ion-icon>
                  <ion-label>Com minhas respostas</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-anotacao"></ion-icon>
                  <ion-label>Meus rascunhos</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-alerta"></ion-icon>
                  <ion-label>Denunciadas e Privadas não Homologadas</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-enviar"></ion-icon>
                  <ion-label>Encaminhadas</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-naorespondida"></ion-icon>
                  <ion-label>Sem vínculo</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
                <ion-item class="filtros__item" mode="ios" lines="none">
                  <ion-icon class="med-icon" slot="start" name="med-retafinal"></ion-icon>
                  <ion-label>Mais de 7 dias sem resposta</ion-label>
                  <ion-toggle slot="end" mode="ios"></ion-toggle>
                </ion-item>
              </div>

              <ion-label class="filtros__carregando" ds-color="neutral-8">Estamos carregando mais filtros, aguarde!</ion-label>

              <div class="filtros__filtrar-container">
                <ion-label class="filtros__filtrar">Filtrar por Concursos</ion-label>
                <div class="filtros__button-container filtros__button-container--margin-bottom">
                  <ion-button class="filtros__button" ds-color="neutral-10" ds-size="xs" mode="ios">
                    ESCOLHER
                  </ion-button>
                  <ion-button class="filtros__button" ds-size="xs" disabled ds-color="neutral-10" mode="ios">
                    TODOS
                  </ion-button>
                </div>

                <ion-label class="filtros__filtrar">Filtrar por Simulados</ion-label>
                <div class="filtros__button-container filtros__button-container--margin-bottom">
                  <ion-button class="filtros__button" ds-color="neutral-10" ds-size="xs" mode="ios">
                    ESCOLHER
                  </ion-button>
                  <ion-button class="filtros__button" ds-size="xs" disabled ds-color="neutral-10" mode="ios">
                    TODOS
                  </ion-button>
                </div>

                <ion-label class="filtros__filtrar">Filtrar por Apostilas</ion-label>
                <div class="filtros__button-container filtros__button-container--margin-bottom">
                  <ion-button class="filtros__button" ds-color="neutral-10" ds-size="xs" mode="ios">
                    ESCOLHER
                  </ion-button>
                  <ion-button class="filtros__button" ds-size="xs" disabled ds-color="neutral-10" mode="ios">
                    TODOS
                  </ion-button>
                </div>
              </div>
            </div>
          </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            APLICAR FILTRO
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
