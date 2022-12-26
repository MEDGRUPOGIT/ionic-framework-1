import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'local-modal',
  styleUrl: 'local-modal.scss',
  scoped: true,
})
export class LocalModal {

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
          <div class="modal-local">
            <ion-label class="modal-local__title">
              Selecione os estados
            </ion-label>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>AL</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>AL</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>AM</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>BA</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CE</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>DF</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>EAD</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>GO</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>MA</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>MG</ion-label>
            </ion-item>
            <ion-item class="modal-local__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>MS</ion-label>
            </ion-item>
          </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            FECHAR
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
