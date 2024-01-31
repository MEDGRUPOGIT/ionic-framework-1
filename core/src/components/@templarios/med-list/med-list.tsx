import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-list',
  styleUrl: 'med-list.scss',
  shadow: true,
})
export class MedList {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop() margin?: 'xs' | 'sm' | 'md' | 'lg';

  render() {
    const { dsColor, margin } = this;
    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-list': true,
          [`med-list--${margin}`]: margin !== undefined
        })}>
        <slot></slot>
      </Host>
    );
  }

}
