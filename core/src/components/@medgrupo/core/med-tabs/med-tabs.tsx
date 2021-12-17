import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-tabs',
  styleUrl: 'med-tabs.scss',
  shadow: true,
})
export class MedTabs {

  /**
    * Define a cor do componente.
    */
   @Prop({ reflect: true }) dsColor?: MedColor;

  render() {

    const { dsColor } = this;

    return (
      <Host
      class={generateMedColor(dsColor, {
        'med-tabs': true,
      })}>
        <slot></slot>
      </Host>
    );
  }

}
