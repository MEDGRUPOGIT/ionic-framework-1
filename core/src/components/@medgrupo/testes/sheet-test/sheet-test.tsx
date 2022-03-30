import { Component, Host, h } from '@stencil/core';

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
          <ion-button class="tp-dialog__button" ds-name="tertiary" ds-size="xxs">
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
          <ion-button class="tp-dialog__button" expand="block">button</ion-button>
        </ion-footer>
      </Host>
    );
  }
}
