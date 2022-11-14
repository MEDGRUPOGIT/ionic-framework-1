import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'unidades-modal',
  styleUrl: 'unidades-modal.scss',
  scoped: true,
})
export class UnidadesModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-label class="header__title" slot="title">Selecione as unidades</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>Cidade (ES)</ion-label>
          </ion-item>
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
