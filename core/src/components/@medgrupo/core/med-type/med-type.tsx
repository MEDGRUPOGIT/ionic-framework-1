import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor, MedTypeToken } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-type',
  styleUrl: 'med-type.scss',
  shadow: true,
})
export class MedType {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define o token do componente.
    */
  @Prop({ reflect: true }) token?: MedTypeToken;

  render() {
    const { dsColor, token } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-type': true,
        [`med-type--${token}`]: token !== undefined,
      })}>
        <slot></slot>
      </Host>
    );
  }

}
