import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'simulado-modal',
  styleUrl: 'simulado-modal.scss',
  scoped: true,
})
export class SimuladoModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-button slot="left" mode="ios" fill="clear" icon-only ds-size="xxs">
              <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
            </ion-button>

            <ion-label class="header__title" slot="title">Simulados</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 01</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 02</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 03</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 04</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 05</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 06</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - Geral 07</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
          </ion-item>
          <ion-item class="modal-content__opcoes" mode="ios" lines="none">
            <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
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
