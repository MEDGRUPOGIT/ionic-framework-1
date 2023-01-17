import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'informativo-modal',
  styleUrl: 'informativo-modal.scss',
  scoped: true,
})
export class InformativoModal {

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
          <div class="modal-informativo">
            <ion-slides class="modal-informativo__slides" pager>
              <ion-slide class="modal-informativo__slide">
                <img class="modal-informativo__image" src="https://via.placeholder.com/500"/>
                <ion-label class="modal-informativo__title" ds-color="brand">
                  Marcações
                </ion-label>
                <ion-label class="modal-informativo__text" ds-color="neutral-10">
                  Para marcar ou interagir com sua apostila, selecione o texto e utilize o menu +
                </ion-label>
              </ion-slide>

              <ion-slide class="modal-informativo__slide">
                <img class="modal-informativo__image" src="https://via.placeholder.com/500"/>
                <ion-label class="modal-informativo__title" ds-color="brand">
                  Histórico de Marcações
                </ion-label>
                <ion-label class="modal-informativo__text" ds-color="neutral-10">Como ver as dúvidas de uma QUESTÃO.</ion-label>
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
