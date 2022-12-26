import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'denunciar-modal',
  styleUrl: 'denunciar-modal.scss',
  scoped: true,
})
export class DenunciarModal {

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
          <div class="modal-denunciar">
            <ion-label class="modal-denunciar__title">
              Denuciar dúvida
            </ion-label>

            <div class="modal-denunciar__list">
              <ion-item mode="ios" lines="none">
                <ion-label ds-color="neutral-10">Crítica sobre conteúdo</ion-label>
                <ion-checkbox slot="start" value="value-1" mode="md"
                ></ion-checkbox>
              </ion-item>

              <ion-item mode="ios" lines="none">
                <ion-label ds-color="neutral-10">Obsevações sobre o App</ion-label>
                <ion-checkbox slot="start" value="value-2" mode="md"></ion-checkbox>
              </ion-item>

              <ion-item mode="ios" lines="none">
                <ion-label ds-color="neutral-10">Administrativo</ion-label>
                <ion-checkbox slot="start" value="value-3" mode="md"></ion-checkbox>
              </ion-item>
            </div>

            <div class="modal-denunciar__text-container">
              <ion-label class="modal-denunciar__text" ds-color="neutral-8">Descreva sua denúncia (opcional)</ion-label>
              <ion-textarea class="modal-denunciar__campo" mode="md" placeholder="Digite aqui"></ion-textarea>
            </div>
          </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            CONFIRMAR
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
