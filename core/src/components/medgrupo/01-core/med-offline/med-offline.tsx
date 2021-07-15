import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-offline',
  styleUrl: 'med-offline.scss',
  shadow: true,
})
export class MedOffline {

  private onClick(e:Event) {
    e.preventDefault();
  }

  render() {
    return (
      <Host onClick={(e:Event) => this.onClick(e)}>
        <div class="wrapper">
          <svg class="icon" viewBox="0 0 24 24">
            <path class="icon-path" d="M22.61 16.95A4.999 4.999 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3"/>
            <path class="icon-path" d="M1 1l22 22"/>
          </svg>
          <p class="title">Você está offline</p>
          <p class="text">Conecte-se à internet para visualizar esse conteúdo</p>
        </div>
      </Host>
    );
  }

}
