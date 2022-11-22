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
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-button slot="right" mode="ios" fill="clear" ds-size="xs" no-padding="true">
              Pular tutorial
            </ion-button>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <div class="tutorial">
            <ion-slides class="tutorial__slides" pager>
              <ion-slide class="tutorial__slide">
                <img class="tutorial__image" src="https://via.placeholder.com/500"/>
                <ion-label class="tutorial__text" ds-color="neutral-10">
                  Como e onde postar sua dúvida em uma QUESTÃO.
                </ion-label>
              </ion-slide>

              <ion-slide class="tutorial__slide">
                <img class="tutorial__image" src="https://via.placeholder.com/500"/>
                <ion-label class="tutorial__text" ds-color="neutral-10">Como ver as dúvidas de uma QUESTÃO.</ion-label>
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
