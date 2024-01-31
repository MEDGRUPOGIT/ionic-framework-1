import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-dropdown',
  styleUrl: 'med-dropdown.scss',
  shadow: true,
})
export class MedDropdown {
  @Prop({ reflect: true }) dsName?: 'secondary';

  render() {
    const { dsName } = this;

    return (
      <Host class={generateMedColor(null, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      })}>
        <slot></slot>
      </Host>
    );
  }

}
