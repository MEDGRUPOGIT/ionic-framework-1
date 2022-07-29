import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-rate-bar',
  styleUrl: 'med-rate-bar.scss',
  shadow: true,
})
export class MedRateBar {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {

    const { dsColor } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-rate-bar': true,
        })}>
        <slot></slot>
        <slot name="avaliacao"></slot>
      </Host>
    );
  }

}
