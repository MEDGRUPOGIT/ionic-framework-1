import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'aviso-modal',
  styleUrl: 'aviso-modal.scss',
  scoped: true,
})
export class AvisoModal {

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
          <div class="modal-aviso">
            <ion-label class="modal-aviso__subheading" ds-color="neutral-10">Confira mais esta novidade</ion-label>
            <ion-label class="modal-aviso__title" ds-color="neutral-10">Dúvidas Acadêmicas</ion-label>
            <ion-label class="modal-aviso__text" ds-color="neutral-10">Poste suas dúvidas e confira as respostas de quem também estuda conosco.</ion-label>
            <ion-label class="modal-aviso__text" ds-color="neutral-10">Veja, neste tutorial, como postar e responder dúvidas.</ion-label>
            <ion-label class="modal-aviso__observacao" ds-color="neutral-10">Esta funcionalidade está disponível para todos os materiais didáticos do MEDSoft Pro e para todas as questões do nosso banco.</ion-label>

            <div class="modal-aviso__button-container">
              <ion-button class="modal-aviso__button" mode="ios" ds-size="sm">
                ENTENDI E CONCORDO
              </ion-button>
            </div>
          </div>
        </ion-content>
      </Host>
    );
  }
}
