import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-tab-button',
  styleUrl: 'med-tab-button.scss',
  shadow: true,
})
export class MedTabButton {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) active = false;

  render() {
    const { dsColor, active } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-tab-button': true,
          'med-tab-button--active': active,
        })}>
        <slot></slot>
      </Host>
    );
  }

}
