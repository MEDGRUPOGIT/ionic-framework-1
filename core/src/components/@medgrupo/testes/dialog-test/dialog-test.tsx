import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dialog-test',
  styleUrl: 'dialog-test.scss',
  scoped: true,
})
export class DialogTest {

  render() {
    return (
      <Host>
        <ion-header class="tp-dialog-header">
          <ion-button ds-name="tertiary" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
        <div class="tp-dialog-container">
          <med-type>Dialog</med-type>

          <div class="tp-dialog__footer">
            <ion-button>Salvar</ion-button>
          </div>
        </div>
      </Host>
    );
  }

}
