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
         <div class="modal-medreader">
          <div class="modal-medreader__top">
            <ion-label class="modal-medreader__text">Bem vindo ao</ion-label>
            <ion-label class="modal-medreader__text-destaque">MEDReader Pro</ion-label>
            <ion-label class="modal-medreader__text">A nova maneira de ler as suas apostilas.</ion-label>
            <ion-label class="modal-medreader__text-no-destaque">Antes de começarmos, vamos ver algumas informações importantes para seu estudo.</ion-label>
          </div>
          <div class="modal-medreader__middle">
            <ion-item class="modal-medreader__item" ds-color="neutral-2" spacing-v="s12" mode="ios" lines="none">
              <ion-icon class="med-icon" slot="start" name="med-proibido"></ion-icon>
              <ion-label>O MEDReader Pro não compartilha suas marcações e anotações com o MEDREADER.</ion-label>
            </ion-item>

            <ion-item class="modal-medreader__item" ds-color="neutral-2" spacing-v="s12" mode="ios" lines="none">
              <ion-icon class="med-icon" slot="start" name="med-offline2"></ion-icon>
              <ion-label>Anotações e Marcações feitas sem conexão com a internet, não são salvas nos servidores do MEDGRUPO.</ion-label>
            </ion-item>

            <ion-item class="modal-medreader__item" ds-color="neutral-2" spacing-v="s12" mode="ios" lines="none">
              <ion-icon class="med-icon" slot="start" name="med-online"></ion-icon>
              <ion-label>Algumas funcionalidades da apostila somente são disponiveis quando seu dispositivo está conectado na internet e aos servidores do MEDGRUPO.</ion-label>
            </ion-item>
          </div>

          <div class="modal-medreader__button-container">
            <ion-button class="modal-medreaderr__button" mode="ios" ds-size="sm">
              ENTENDI E CONCORDO!
            </ion-button>
          </div>
         </div>
        </ion-content>


      </Host>
    );
  }
}
