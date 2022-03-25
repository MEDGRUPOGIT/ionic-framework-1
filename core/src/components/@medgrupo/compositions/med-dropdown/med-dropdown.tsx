import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-dropdown',
  styleUrl: 'med-dropdown.scss',
  shadow: true,
})
export class MedDropdown {

  /**
    * Define a variação do componente.
    */
  @Prop({ reflect: true }) dsName?: 'secondary';

  render() {
    const { dsName } = this;

    return (
      <Host class={generateMedColor(dsName, {
        'med-dropdown': true,
        [`med-dropdown--${dsName}`]: dsName !== undefined,
      })}>
        <slot></slot>
      </Host>
    );
  }

}
