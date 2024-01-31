import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-option',
  styleUrl: 'med-option.scss',
  shadow: {
    delegatesFocus: true
  }
})
export class MedOption {
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {

    const { dsColor } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-badge': true,
        })}>
        <div class="option">
          <slot></slot>
          <slot name="label"></slot>
        </div>
      </Host>
    );
  }
}
