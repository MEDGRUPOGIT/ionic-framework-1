import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-base',
  styleUrl: 'med-base.scss',
  scoped: true,
})
export class MedBase {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) radius?: 's00' | 's02' | 's04' | 's08' | string;

  @Prop({ reflect: true }) gap?: 's00' | 's02' | 's04' | 's08' | string;

  @Prop({ reflect: true }) spacingV?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;

  @Prop({ reflect: true }) spacingH?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;

  render() {
    const { dsColor, radius, gap, spacingV, spacingH } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-base': true,
        [`med-base--radius-${radius}`]: radius !== undefined,
        [`med-base--gap-${gap}`]: gap !== undefined,
        [`med-base--spacing-v-${spacingV}`]: spacingV !== undefined,
        [`med-base--spacing-h-${spacingH}`]: spacingH !== undefined,
      })}>
        <slot name="start"></slot>
        <slot name="middle"></slot>
        <slot name="end"></slot>
        <slot></slot>
      </Host>
    );
  }
}
