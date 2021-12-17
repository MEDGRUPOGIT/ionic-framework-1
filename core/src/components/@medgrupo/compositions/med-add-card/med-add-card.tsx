import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-add-card',
  styleUrl: 'med-add-card.css',
  scoped: true,
})
export class MedAddCard {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-add-card': true,
      })}>
        <med-base>
          <ion-icon class="med-icon" name=""></ion-icon>
        </med-base>
      </Host>
    );
  }

}
