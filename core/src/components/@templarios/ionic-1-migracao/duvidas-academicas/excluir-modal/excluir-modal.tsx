import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'excluir-modal',
  styleUrl: 'excluir-modal.scss',
  scoped: true,
})
export class ExcluirModal {

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
          <div class="modal-excluir">
            <ion-label class="modal-excluir__title">
              Excluir Postagem
            </ion-label>

            <ion-label class="modal-excluir__text">Tem certeza que deseja excluir a postagem selecionada?</ion-label>

            <div class="modal-excluir__button-container">
              <ion-button class="modal-excluir__button" mode="ios" ds-size="sm" ds-color="neutral-5">
                CANCELAR
              </ion-button>
              <ion-button class="modal-excluir__button" mode="ios" ds-size="sm">
                CONFIRMAR
              </ion-button>
            </div>
          </div>
        </ion-content>


      </Host>
    );
  }
}
