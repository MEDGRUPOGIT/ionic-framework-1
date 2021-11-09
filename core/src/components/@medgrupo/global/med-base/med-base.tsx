import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

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
    * Define a borda do componente.
    */
  @Prop({ reflect: true }) radius?: string | undefined;

   /**
    * Define a borda do componente.
    */
  @Prop({ reflect: true }) spacingV?: string | undefined;

  /**
    * Define a borda do componente.
    */
   @Prop({ reflect: true }) spacingH?: string | undefined;

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
      </Host>
    );
  }

}
