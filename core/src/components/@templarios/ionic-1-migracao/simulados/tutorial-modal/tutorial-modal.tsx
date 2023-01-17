import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'tutorial-modal',
  styleUrl: 'tutorial-modal.scss',
  scoped: true,
})
export class TutorialModal {

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
          <div class="header__right">
            <div>
            <ion-button slot="right" mode="ios" fill="clear" ds-size="xs" no-padding="true">
              Pular tutorial
            </ion-button>
            </div>
          </div>
        </ion-header>

        <ion-content class="modal-content">
          <div class="modal-tutorial">
            <ion-slides class="modal-tutorial__slides" pager>
              <ion-slide class="modal-tutorial__slide">
                <img class="modal-tutorial__image" src="https://via.placeholder.com/500"/>
                <ion-label class="modal-tutorial__text" ds-color="neutral-10">
                  Como e onde postar sua dúvida em uma QUESTÃO.
                </ion-label>
              </ion-slide>

              <ion-slide class="modal-tutorial__slide">
                <img class="modal-tutorial__image" src="https://via.placeholder.com/500"/>
                <ion-label class="modal-tutorial__text" ds-color="neutral-10">Como ver as dúvidas de uma QUESTÃO.</ion-label>
              </ion-slide>
            </ion-slides>
          </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            ENTENDI
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
