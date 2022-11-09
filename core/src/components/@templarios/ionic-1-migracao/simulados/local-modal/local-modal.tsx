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
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-label class="header__title" slot="title">Selecione os estados</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>AL</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>AL</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>AM</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>BA</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>CE</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>DF</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>EAD</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>GO</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>MA</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>MG</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>MS</ion-label>
          </ion-item>
        </ion-content>

        <div class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            FECHAR
          </ion-button>
        </div>
      </Host>
    );
  }
}
