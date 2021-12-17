import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-check-card',
  styleUrl: 'med-check-card.css',
  shadow: true,
})
export class MedCheckCard {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-check-card': true,
      })}>
        <med-base>
          <med-type token="p16xb">Título</med-type>
          <div class="med-check-card__text-container">
            <med-type token="p16xb">Título</med-type>
            <div class="med-check-card__info-container">
              <ion-icon class="med-icon" name=""></ion-icon>
              <med-type token="p12xb">Categoria</med-type>
              <med-type token="p12x">21h00 – 23h00</med-type>
            </div>
          </div>
        </med-base>
      </Host>
    );
  }

}
