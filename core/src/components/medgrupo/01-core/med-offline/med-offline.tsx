import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'med-offline',
  styleUrl: 'med-offline.scss',
  shadow: true,
})
export class MedOffline {

  @Event() medClick!: EventEmitter<void>;

  private onClick() {
    this.medClick.emit();
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <med-header>
            <med-navbar ds-name="transparent" slot="navbar">
              <ion-button slot="left" ds-name="icon-only" onClick={() => this.onClick()}>
                <ion-icon slot="icon-only" name="med-chevron-left"></ion-icon>
              </ion-button>
            </med-navbar>
          </med-header>
          <div class="wrapper__content">
            <svg class="icon" viewBox="0 0 24 24">
              <path class="icon-path" d="M22.61 16.95A4.999 4.999 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3"/>
              <path class="icon-path" d="M1 1l22 22"/>
            </svg>
            <p class="title">Você está offline</p>
            <p class="text">Conecte-se à internet para visualizar esse conteúdo</p>
          </div>
        </div>
      </Host>
    );
  }

}
