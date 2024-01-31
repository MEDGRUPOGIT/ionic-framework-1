import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-caption',
  styleUrl: 'med-caption.scss',
  shadow: true,
})
export class MedCaption {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) dsSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  render() {
    const { dsColor, dsSize } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-caption': true,
          [`med-caption--${dsSize}`]: dsSize !== undefined,
        })}>
        <slot></slot>
      </Host>
    );
  }

}
