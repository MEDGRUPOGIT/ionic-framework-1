import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'concurso-modal',
  styleUrl: 'concurso-modal.scss',
  scoped: true,
})
export class ConcursoModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-button slot="left" mode="ios" fill="clear" icon-only ds-size="xxs">
              <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
            </ion-button>

            <ion-label class="header__title" slot="title">Concursos</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <div class="modal-content__input">
            <tp-input-container has-icon="start">
              <ion-icon class="med-icon" slot="start" name="med-busca"></ion-icon>
              <ion-input mode="md" placeholder="Procurar o termo ou palavra-chave"></ion-input>
            </tp-input-container>
          </div>

            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>SCO - ASSOCIAÇÃO DA SANTA CASA</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>AMS - APUCARANA - AUTARQUIA MUNICIPAL</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>CCANSPS - CASA DE CARIDADE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>
            <ion-item class="modal-content__opcoes" mode="ios" lines="none">
              <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
            </ion-item>

        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            APLICAR
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
