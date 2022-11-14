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
        <ion-content class="modal-content">
          <div class="aviso">
            <ion-label class="aviso__subheading" ds-color="neutral-10">Confira mais esta novidade</ion-label>
            <ion-label class="aviso__title" ds-color="neutral-10">Dúvidas Acadêmicas</ion-label>
            <ion-label class="aviso__text" ds-color="neutral-10">Poste suas dúvidas e confira as respostas de quem também estuda conosco.</ion-label>
            <ion-label class="aviso__text" ds-color="neutral-10">Veja, neste tutorial, como postar e responder dúvidas.</ion-label>
            <ion-label class="aviso__observacao" ds-color="neutral-10">Esta funcionalidade está disponível para todos os materiais didáticos do MEDSoft Pro e para todas as questões do nosso banco.</ion-label>
          </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            ENTENDI E CONCORDO
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
