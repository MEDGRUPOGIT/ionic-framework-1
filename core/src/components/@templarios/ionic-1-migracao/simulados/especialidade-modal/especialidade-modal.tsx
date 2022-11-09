import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'especialidade-modal',
  styleUrl: 'especialidade-modal.scss',
  scoped: true,
})
export class EspecialidadeModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-label class="header__title" slot="title">Especialidade</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Acupuntura</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Alergia e imunologia</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Anestesiologia</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Aperfeiçoamento</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cardiologia</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Especialidade</ion-label>
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
