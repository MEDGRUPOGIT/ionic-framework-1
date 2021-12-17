import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-add-card',
  styleUrl: 'med-add-card.scss',
  shadow: true,
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
        <med-base class="med-add-card__container" spacing-h="s12">
          <ion-icon class="med-icon med-add-card__icon" name="med-marcar"></ion-icon>
          <med-type token="p14">Adicionar Card</med-type>
        </med-base>
      </Host>
    );
  }

}
