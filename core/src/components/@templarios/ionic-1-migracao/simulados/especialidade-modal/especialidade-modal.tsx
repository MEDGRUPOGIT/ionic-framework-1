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
          <div class="modal-especialidade">
            <ion-label class="modal-especialidade__title">
              Especialidade
            </ion-label>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Acupuntura</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Alergia e imunologia</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Anestesiologia</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Aperfeiçoamento</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Cardiologia</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
            </ion-item>
            <ion-item class="modal-especialidade__opcoes" mode="ios" lines="none" ds-color="neutral-15">
              <ion-label>Especialidade</ion-label>
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
