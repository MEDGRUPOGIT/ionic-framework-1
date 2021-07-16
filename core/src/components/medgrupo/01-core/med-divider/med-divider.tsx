import { Component, Host, h, Prop } from '@stencil/core';
import { Color, Neutral } from '../../../../interface';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-divider',
  styleUrl: 'med-divider.scss',
  shadow: true,
})
export class MedDivider {
  @Prop() text!: string;
  @Prop() color?: Color;
  @Prop() neutral?: Neutral;

  render() {
    return (
      <Host from-stencil class={createColorClasses(this.color, {
        'med-divider': true
        }, this.neutral)}>
        <h3 class="heading">{this.text}</h3>
      </Host>
    );
  }

}
