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
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-button slot="right" mode="ios" fill="clear" ds-size="xs" no-padding="true">
              Pular tutorial
            </ion-button>
          </med-navbar>
        </med-header>


        <div class="informativo">
          <ion-slides class="informativo__slides" pager>
            <ion-slide class="informativo__slide">
              <img class="informativo__image" src="https://via.placeholder.com/500"/>
              <ion-label class="informativo__title" ds-color="brand">
                Marcações
              </ion-label>
              <ion-label class="informativo__text" ds-color="neutral-10">
                Para marcar ou interagir com sua apostila, selecione o texto e utilize o menu +
              </ion-label>
            </ion-slide>

            <ion-slide class="informativo__slide">
              <img class="informativo__image" src="https://via.placeholder.com/500"/>
              <ion-label class="informativo__title" ds-color="brand">
                Histórico de Marcações
              </ion-label>
              <ion-label class="informativo__text" ds-color="neutral-10">Como ver as dúvidas de uma QUESTÃO.</ion-label>
            </ion-slide>
          </ion-slides>
        </div>


        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            ENTENDI
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
