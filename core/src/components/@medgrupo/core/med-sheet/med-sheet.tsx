import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'med-sheet',
  styleUrl: 'med-sheet.scss',
  shadow: true,
})
export class MedSheet {

  @Event() medClick!: EventEmitter;

  private onClick() {
    this.medClick.emit();
  }

  render() {
    return (
      <Host class="med-sheet">
        <ion-header class="med-sheet__header">
          <ion-button class="med-sheet__button" ds-name="tertiary" onClick={() => this.onClick()}>
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
      </Host>
    );
  }

}
