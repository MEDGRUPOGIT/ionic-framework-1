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
          <div class="modal-realizacoes">
            <ion-label class="modal-realizacoes__title">
            Realizações
            </ion-label>
            <ion-item class="modal-realizacoes__item modal-realizacoes__item--agendado" spacing-v="s16" spacing-h="s16" mode="ios" lines="none" ds-color="neutral-15">
              <div class="modal-realizacoes__text-container">
                <ion-label class="modal-realizacoes__data">Em 10/06/22 18:15:00</ion-label>
                <ion-label class="modal-realizacoes__modo">(Simulado Agendado)</ion-label>
              </div>
            </ion-item>
            <ion-item class="modal-realizacoes__item modal-realizacoes__item--aviso" spacing-v="s16" spacing-h="s16" mode="ios" lines="none" ds-color="neutral-15">
              <div class="modal-realizacoes__text-container">
                <ion-label class="modal-realizacoes__data">Você não realizou o simulado agendado.</ion-label>
                <ion-label class="modal-realizacoes__modo">(Modo Prova)</ion-label>
              </div>
            </ion-item>
            <ion-item class="modal-realizacoes__item" spacing-v="s16" spacing-h="s16" mode="ios" lines="none" ds-color="neutral-15">
              <div class="modal-realizacoes__text-container">
                <ion-label class="modal-realizacoes__data">Em 10/06/22 18:15:00</ion-label>
                <ion-label class="modal-realizacoes__modo">(Modo Prova)</ion-label>
              </div>
            </ion-item>
            <ion-item class="modal-realizacoes__item" spacing-v="s16" spacing-h="s16" mode="ios" lines="none" ds-color="neutral-15">
              <div class="modal-realizacoes__text-container">
                <ion-label class="modal-realizacoes__data">Em 10/06/22 18:15:00</ion-label>
                <ion-label class="modal-realizacoes__modo">(Modo Prova)</ion-label>
              </div>
            </ion-item>
            <ion-item class="modal-realizacoes__item" spacing-v="s16" spacing-h="s16" mode="ios" lines="none" ds-color="neutral-15">
              <div class="modal-realizacoes__text-container">
                <ion-label class="modal-realizacoes__data">Em 10/06/22 18:15:00</ion-label>
                <ion-label class="modal-realizacoes__modo">(Modo Prova)</ion-label>
              </div>
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
