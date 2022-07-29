import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-semanas',
  styleUrl: 'med-semanas.scss',
  shadow: true,
})
export class MedSemanas {

  /**
   * todo
   */
  @Prop({ reflect: true }) skin?: 'lista';

  render() {
    const { skin } = this;

    return (
      <Host class={generateMedColor(null, {
        'med-semanas': true,
        [`med-semanas--${skin}`]: skin !== undefined,
        })}>
        <slot></slot>
      </Host>
    );
  }

}
