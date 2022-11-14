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
        <med-header>
          <med-navbar class="header" slot="navbar">
            <ion-label class="header__title" slot="title">Excluir Postagem</ion-label>
          </med-navbar>
        </med-header>

        <ion-content class="modal-content">
          <div class="excluir">
            <ion-label class="excluir__text">Tem certeza que deseja excluir a postagem selecionada?</ion-label>
          </div>
        </ion-content>

        <ion-footer class="modal-footer">
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm" ds-color="neutral-5">
            CANCELAR
          </ion-button>
          <ion-button class="modal-footer__button" mode="ios" ds-size="sm">
            CONFIRMAR
          </ion-button>
        </ion-footer>
      </Host>
    );
  }
}
