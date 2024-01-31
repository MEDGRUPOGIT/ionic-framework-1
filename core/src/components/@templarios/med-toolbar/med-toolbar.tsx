import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-toolbar',
  styleUrl: 'med-toolbar.scss',
  shadow: true,
})
export class MedToolbar {
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {
    const { dsColor} = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-toolbar': true,
        })}>
        <div class="container">
          <slot name="start"></slot>
          <div class="container__center">
            <slot></slot>
          </div>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }

}
