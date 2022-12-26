import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'apostila-modal',
  styleUrl: 'apostila-modal.scss',
  scoped: true,
})
export class ApostilaModal {

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
          <div class="modal-apostilas">
            <ion-label class="modal-apostilas__title">
              Apostilas
            </ion-label>

            <div class="modal-apostilas__input">
              <tp-input-container has-icon="start">
                <ion-icon class="med-icon" slot="start" name="med-busca"></ion-icon>
                <ion-input mode="md" placeholder="Procurar o termo ou palavra-chave"></ion-input>
              </tp-input-container>
            </div>

            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CAR 01</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CAR 02</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CAR 03</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CIR 01</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CIR 02</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>CIR 03</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>GO 01</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>GO 02</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>GO 03</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>PED 01</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>PED 02</ion-label>
            </ion-item>
            <ion-item class="modal-apostilas__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>PED 03</ion-label>
            </ion-item>

            <div class="modal-apostilas__button-container">
              <ion-button class="modal-apostilas__button" mode="ios" ds-size="sm">
                APLICAR
              </ion-button>
            </div>
          </div>
        </ion-content>


      </Host>
    );
  }
}
