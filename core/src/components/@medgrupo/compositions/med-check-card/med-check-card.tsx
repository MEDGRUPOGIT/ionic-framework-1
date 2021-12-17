import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-check-card',
  styleUrl: 'med-check-card.scss',
  scoped: true,
})
export class MedCheckCard {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) alert = false;

  render() {
    const { dsColor, alert } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-check-card': true,
        'med-check-card--alert': alert,
      })}>
        <med-base class="med-check-card__container" spacing-v="" spacing-h="">
          <ion-checkbox ds-color={dsColor}></ion-checkbox>

          <div class="med-check-card__text-container">
            <med-type token="p16xb">Título</med-type>

            <div class="med-check-card__info-container">
              <ion-icon class="med-check-card__icon med-icon med-icon--xxs" name="med-marcar"></ion-icon>
              <med-type class="med-check-card__subtitulo" token="p12xb" ds-color="neutral-8">Categoria</med-type>
              <med-type token="p12x" ds-color="neutral-8">21h00 – 23h00</med-type>
            </div>
          </div>

          <med-tooltip class="med-check-card__tooltip" placement="top" position="start">
            <ion-icon class="med-check-card__alert-icon med-icon med-icon--sm" name="med-marcar"></ion-icon>
            <med-type token="p14x" slot="content">Para reagendar este card, clique no menu ao lado e selecione Editar.</med-type>
          </med-tooltip>

        </med-base>
      </Host>
    );
  }

}
