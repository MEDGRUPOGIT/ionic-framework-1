import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'realizacoes-modal',
  styleUrl: 'realizacoes-modal.scss',
  scoped: true,
})
export class RealizacoesModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-label class="header__title" slot="title">Realizações</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <ion-item class="modal-content__item modal-content__item--agendado" spacing-v="s16" spacing-h="s16" mode="ios" lines="none">
            <div class="modal-content__text-container">
              <ion-label class="modal-content__data">Em 10/06/22 18:15:00</ion-label>
              <ion-label class="modal-content__modo">(Simulado Agendado)</ion-label>
            </div>
          </ion-item>
          <ion-item class="modal-content__item modal-content__item--aviso" spacing-v="s16" spacing-h="s16" mode="ios" lines="none">
            <div class="modal-content__text-container">
              <ion-label class="modal-content__data">Você não realizou o simulado agendado.</ion-label>
              <ion-label class="modal-content__modo">(Modo Prova)</ion-label>
            </div>
          </ion-item>
          <ion-item class="modal-content__item" spacing-v="s16" spacing-h="s16" mode="ios" lines="none">
            <div class="modal-content__text-container">
              <ion-label class="modal-content__data">Em 10/06/22 18:15:00</ion-label>
              <ion-label class="modal-content__modo">(Modo Prova)</ion-label>
            </div>
          </ion-item>
          <ion-item class="modal-content__item" spacing-v="s16" spacing-h="s16" mode="ios" lines="none">
            <div class="modal-content__text-container">
              <ion-label class="modal-content__data">Em 10/06/22 18:15:00</ion-label>
              <ion-label class="modal-content__modo">(Modo Prova)</ion-label>
            </div>
          </ion-item>
          <ion-item class="modal-content__item" spacing-v="s16" spacing-h="s16" mode="ios" lines="none">
            <div class="modal-content__text-container">
              <ion-label class="modal-content__data">Em 10/06/22 18:15:00</ion-label>
              <ion-label class="modal-content__modo">(Modo Prova)</ion-label>
            </div>
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
