import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { MedColor } from '../../../../@templarios/types/color.type';
import { MedTypeTag, MedTypeToken } from '../../../../@templarios/types/type.type';

@Component({
  tag: 'med-type',
  styleUrl: 'med-type.scss',
  scoped: true,
})
export class MedType implements ComponentInterface {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) token?: MedTypeToken;

  /**
   * todo
   */
  @Prop({ reflect: true }) tag?: MedTypeTag = 'span';

  render() {
    const { dsColor, token, tag } = this;

    const TagType = tag === undefined ? 'span' : tag;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-type': true,
          [`med-type--${token}`]: token !== undefined,
        })}
      >
        <TagType>
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
