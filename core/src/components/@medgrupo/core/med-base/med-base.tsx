import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

/**
 * @slot start - Conteúdo é posicionado a esquerda do componente.
 * @slot middle - Conteúdo é posicionado ao centro do componente.
 * @slot end - Conteúdo é posicionado a direita do componente.
 */
@Component({
  tag: 'med-base',
  styleUrl: 'med-base.scss',
  shadow: true,
})
export class MedBase {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a variação de borde-radius do componente.
    */
  @Prop({ reflect: true }) radius?: 's00' | 's02' | 's04' | 's08' | string;

  /**
   * Define a variação de padding vertical do componente.
   */
  @Prop({ reflect: true }) spacingV?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;

  /**
    * Define a variação de padding horizontal do componente.
    */
  @Prop({ reflect: true }) spacingH?: 's00' | 's02' | 's04' | 's08' | 's12' | 's16' | 's24' | string;

  render() {
    const { dsColor, radius, spacingV, spacingH } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-base': true,
        [`med-base--radius-${radius}`]: radius !== undefined,
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
