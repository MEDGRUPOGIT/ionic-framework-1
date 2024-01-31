import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'med-cartao-resposta-lista',
  styleUrl: 'med-cartao-resposta-lista.scss',
  shadow: true,
})
export class MedCartaoRespostaLista {
  /**
   * Define a estilização do componente
   */
  @Prop({ reflect: true }) isFlex = false;

  render() {
    const { isFlex } = this;

    return (
      <Host from-stencil>
        <div class={`wrapper ${isFlex ? 'wrapper--flex' : ''}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
