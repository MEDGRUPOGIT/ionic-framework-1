import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';
import { MedColor, MedTypeToken } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-type',
  styleUrl: 'med-type.scss',
  shadow: true,
})
export class MedType implements ComponentInterface {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define o token do componente.
    */
  @Prop({ reflect: true }) token?: MedTypeToken;

  /**
    * Define a tag HTML do componente.
    */
  @Prop({ reflect: true }) tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' = 'span';

  render() {
    const { dsColor, token, tag } = this;

    const TagType = tag === undefined ? 'span' : tag;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-type': true,
        [`med-type--${token}`]: token !== undefined,
      })}>
        <TagType>
          <slot></slot>
        </TagType>
      </Host>
    );
  }

}
