import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-avatar',
  styleUrl: 'med-avatar.scss',
  shadow: true,
})
export class MedAvatar {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsSize?: 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * todo
   */
  @Prop() image?: string;

  /**
   * todo
   */
  @Prop() letter?: string;

  render() {
    const { dsColor, dsSize, image, letter} = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
        'med-avatar': true,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      })}>
        {letter && !image && <span class="med-avatar__letter">{letter}</span>}
        {image && <img class="med-avatar__image" src={image}/>}
      </Host>
    );
  }

}


