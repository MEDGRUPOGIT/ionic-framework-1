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
          <div class="modal-simulados">
            <ion-label class="modal-simulados__title">
              Simulados
            </ion-label>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 01</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 02</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 03</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 04</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 05</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 06</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - Geral 07</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
            </ion-item>
            <ion-item class="modal-simulados__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>2021 R1 SIM 01 - UNIFESP</ion-label>
            </ion-item>

            <div class="modal-simulados__button-container">
              <ion-button class="modal-simulados__button" mode="ios" ds-size="sm">
                APLICAR
              </ion-button>
            </div>
          </div>
        </ion-content>


      </Host>
    );
  }
}
