import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-cartao-resposta-item',
  styleUrl: 'med-cartao-resposta-item.scss',
  shadow: true,
})
export class MedCartaoRespostaItem {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) anulada = false;

  @Prop({ reflect: true }) impressa = false;

  @Prop({ reflect: true }) ativa = false;

  render() {
    const { dsColor, anulada, impressa, ativa } = this;

    return (
      <Host from-stencil class={generateMedColor(dsColor, {
        'med-cartao-resposta-item': true,
        'med-cartao-resposta-item--anulada': anulada,
        'med-cartao-resposta-item--impressa': impressa,
        'med-cartao-resposta-item--ativa': ativa,
      })}>
        <div class="container">
          {/* <slot name="icon-left-top"></slot>
          <slot  name="icon-right-top"></slot> */}
          <button class="item-button">
            <slot></slot>
          </button>
          {/* <slot  name="icon-left-bottom"></slot>
          <slot  name="icon-right-bottom"></slot> */}
        </div>
      </Host>
    );
  }

}
