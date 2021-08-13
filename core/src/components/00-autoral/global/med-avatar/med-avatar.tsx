import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-avatar',
  styleUrl: 'med-avatar.scss',
  shadow: true,
})
export class MedAvatar {

  /**
   * Define a variação de tamanho do componente.
   */
  @Prop() dsSize?: 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * Define a imagem do componente.
   */
  @Prop() image?: string;

  /**
   * Define a imagem do componente.
   */
  @Prop() letter?: string;

  render() {

    const { dsSize, image, letter} = this;

    return (
      <Host from-stencil
      class={createColorClasses(null, {
        'med-avatar': true,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      }, null)}
      >
        {(letter) && <span class="med-avatar__letter">{letter}</span>}
        {(image) && <img class="med-avatar__img" src={image}/>}
      </Host>
    );
  }

}
