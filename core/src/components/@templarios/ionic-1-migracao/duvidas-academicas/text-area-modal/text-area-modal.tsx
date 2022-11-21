import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'text-area-modal',
  styleUrl: 'text-area-modal.scss',
  scoped: true,
})
export class TextAreaModal {

  render() {
    return (
      <Host>
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
              <ion-icon class="med-icon" name="med-fechar"></ion-icon>
            </ion-back-button>

            <ion-label class="header__title" slot="title">Depositar dúvida</ion-label>

            <ion-button slot="right" mode="ios" fill="clear" icon-only ds-size="xs">
              <ion-icon slot="icon-only" class="med-icon" name="med-enviar"></ion-icon>
            </ion-button>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <div class="text-area">
            <ion-textarea class="text-area__campo" mode="md" placeholder="Escreva a sua dúvida"></ion-textarea>
          </div>
        </ion-content>
      </Host>
    );
  }
}
