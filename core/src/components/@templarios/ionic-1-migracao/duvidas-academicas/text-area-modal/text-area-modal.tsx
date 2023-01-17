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
          <div class="text-area">
            <ion-label class="text-area__title">
              Depositar dúvida
            </ion-label>

            <ion-textarea
              class="text-area__campo"
              mode="md"
              placeholder="Escreva a sua dúvida"
            ></ion-textarea>

            <div class="text-area__button-container">
              <ion-button class="text-area__button" mode="ios" ds-size="sm">
                Depositar
              </ion-button>
            </div>
          </div>
        </ion-content>
      </Host>
    );
  }
}
