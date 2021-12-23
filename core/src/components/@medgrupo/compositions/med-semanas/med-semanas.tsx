import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-semanas',
  styleUrl: 'med-semanas.scss',
  shadow: true,
})
export class MedSemanas {

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
