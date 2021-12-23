import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-tab-button',
  styleUrl: 'med-tab-button.scss',
  shadow: true,
})
export class MedTabButton {

  /**
  * Define a cor do componente.
  */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
  * Define a variação da borda do componente.
  */
  @Prop({ reflect: true }) active = false;

  render() {

    const { dsColor, active } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-tab-button': true,
          'med-tab-button--active': active,
        })}>
        <slot></slot>
      </Host>
    );
  }

}
