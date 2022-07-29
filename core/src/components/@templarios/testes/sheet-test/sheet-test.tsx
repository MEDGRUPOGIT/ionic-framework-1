import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sheet-test',
  styleUrl: 'sheet-test.scss',
  scoped: true,
})
export class SheetTest {
  render() {
    return (
      <Host>
        <ion-header class="tp-sheet-header">
          <ion-button mode="ios" icon-only class="tp-dialog__button" fill="clear" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
        <div class="tp-sheet-content">
          <med-type>Sheet</med-type>
          <med-type>Sheet</med-type>
          <med-type>Sheet</med-type>

          <med-type>Sheet</med-type>
          <med-type>Sheet</med-type>
          <med-type>Sheet</med-type>
        </div>
        <ion-footer class="tp-sheet-footer">
          <ion-button mode="ios" class="tp-dialog__button" expand="block">button</ion-button>
        </ion-footer>
      </Host>
    );
  }
}
