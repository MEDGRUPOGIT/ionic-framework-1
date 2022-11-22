import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'medreader-pro-modal',
  styleUrl: 'medreader-pro-modal.scss',
  scoped: true,
})

export class MedreaderProModal {

  render() {
    return (
      <Host>

        <ion-content class="modal-content">
         <div class="medreader">
          <div class="medreader__top">
            <ion-label class="medreader__text">Bem vindo ao</ion-label>
            <ion-label class="medreader__text-destaque">MEDReader Pro</ion-label>
            <ion-label class="medreader__text">A nova maneira de ler as suas apostilas.</ion-label>
            <ion-label class="medreader__text-no-destaque">Antes de começarmos, vamos ver algumas informações importantes para seu estudo.</ion-label>
          </div>
          <div class="medreader__middle">
            <ion-item class="medreader__item" ds-color="neutral-2" spacing-v="s12" mode="ios" lines="none">
              <ion-icon class="med-icon" slot="start" name="med-proibido"></ion-icon>
              <ion-label>O MEDReader Pro não compartilha suas marcações e anotações com o MEDREADER.</ion-label>
            </ion-item>

            <ion-item class="medreader__item" ds-color="neutral-2" spacing-v="s12" mode="ios" lines="none">
              <ion-icon class="med-icon" slot="start" name="med-offline2"></ion-icon>
              <ion-label>Anotações e Marcações feitas sem conexão com a internet, não são salvas nos servidores do MEDGRUPO.</ion-label>
            </ion-item>

            <ion-item class="medreader__item" ds-color="neutral-2" spacing-v="s12" mode="ios" lines="none">
              <ion-icon class="med-icon" slot="start" name="med-online"></ion-icon>
              <ion-label>Algumas funcionalidades da apostila somente são disponiveis quando seu dispositivo está conectado na internet e aos servidores do MEDGRUPO.</ion-label>
            </ion-item>
          </div>
         </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            ENTENDI E CONCORDO!
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
