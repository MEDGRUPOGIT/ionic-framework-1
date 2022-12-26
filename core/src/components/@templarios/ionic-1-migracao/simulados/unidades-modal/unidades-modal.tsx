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
          <div class="modal-unidades">
            <ion-label class="modal-unidades__title">
            Selecione as unidades
            </ion-label>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
            </ion-item>
            <ion-item class="modal-unidades__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cidade (ES)</ion-label>
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
