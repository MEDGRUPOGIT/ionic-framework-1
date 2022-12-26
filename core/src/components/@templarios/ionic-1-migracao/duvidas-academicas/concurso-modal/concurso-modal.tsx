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
      <ion-header class="header">
          <div class="header__left">
            <div>
              <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
                <ion-icon class="med-icon" name="med-fechar"></ion-icon>
              </ion-button>
            </div>
          </div>
        </ion-header>

        <ion-content class="modal-content">
          <div class="modal-concursos">
            <ion-label class="modal-concursos__title">
              Concursos
            </ion-label>

            <div class="modal-concursos__input">
              <tp-input-container has-icon="start">
                <ion-icon class="med-icon" slot="start" name="med-busca"></ion-icon>
                <ion-input mode="md" placeholder="Procurar o termo ou palavra-chave"></ion-input>
              </tp-input-container>
            </div>

              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>SCO - ASSOCIAÇÃO DA SANTA CASA</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>AMS - APUCARANA - AUTARQUIA MUNICIPAL</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>CCANSPS - CASA DE CARIDADE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>
              <ion-item class="modal-concursos__opcoes" mode="ios" lines="none" ds-color="neutral-15">
                <ion-label>PUC - PR - ALIANÇA SAÚDE</ion-label>
              </ion-item>

              <div class="modal-concursos__button-container">
                <ion-button class="modal-concursos__button" mode="ios" ds-size="sm">
                  APLICAR
                </ion-button>
              </div>
            </div>
        </ion-content>
      </Host>
    );
  }
}
