import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sheet-ia',
  styleUrl: 'sheet-ia.scss',
  scoped: true,
})
export class SheetIa {
  render() {
    return (
      <Host>
        <ion-header class="tp-sheet-header">
          <ion-button mode="ios" icon-only class="tp-dialog__button" fill="clear" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
        <div class="tp-sheet-content lateral-ia__itens">
            <med-nav-item class="lateral-ia__item" icon="med-busca" text="Novo chat"></med-nav-item>

            <med-nav-item class="lateral-ia__item" icon="med-naorespondida" text="Chat - 09/01/2024 - 17:06:55"></med-nav-item>

            <med-nav-item class="lateral-ia__item" icon="med-naorespondida" text="Chat - 09/01/2024 - 17:06:55"></med-nav-item>

            <med-nav-item class="lateral-ia__item" icon="med-naorespondida" text="Chat - 09/01/2024 - 17:06:55"></med-nav-item>
        </div>
      </Host>
    );
  }
}
