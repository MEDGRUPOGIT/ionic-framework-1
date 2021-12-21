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

  @Prop({ reflect: true }) titulo?: string;

  @Prop({ reflect: true }) categoria?: string;

  @Prop({ reflect: true }) horaInicial?: string;

  @Prop({ reflect: true }) horaFinal?: string;

  @Prop({ reflect: true }) finalizada?: string;

  @Prop({ reflect: true }) iconName?: string;

  @Prop({ reflect: true }) tooltipPlacement: "top" | "bottom" | "left" | "right" | undefined= 'top';

  render() {
    const { dsColor, alert, titulo, categoria, horaInicial, horaFinal, iconName, tooltipPlacement } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-check-card': true,
        'med-check-card--alert': alert,
      })}>
        <med-base class="med-check-card__container" spacing-h="s12">
          <ion-checkbox ds-color={dsColor}></ion-checkbox>

          <div class="med-check-card__text-container">
            <med-type token="p16xb">{titulo}</med-type>

            <div class="med-check-card__info-container">
              <ion-icon class="med-check-card__icon med-icon med-icon--xxs" name={iconName}></ion-icon>
              <med-type class="med-check-card__subtitulo" token="p12xb" ds-color="neutral-8">{categoria}</med-type>
              <med-type token="p12x" ds-color="neutral-8">{horaInicial} – {horaFinal}</med-type>
            </div>
          </div>

          <med-tooltip class="med-check-card__tooltip" ds-color="fb-warning" placement={tooltipPlacement} position="end">
            <ion-icon class="med-check-card__alert-icon med-icon med-icon--sm" name="med-marcar" slot="input"></ion-icon>
            <div slot="content">
              <div class="med-check-card__tooltip-header">
                <med-type ds-color="neutral-01" token="p14b">Tarefa pendente</med-type>
                <ion-icon class="med-check-card__tooltip-icon med-icon med-icon--sm" name="med-fechar"></ion-icon>
              </div>
              <med-type ds-color="neutral-01" token="p14x" slot="content">Para reagendar este card, clique no menu ao lado e selecione Editar.</med-type>
            </div>
          </med-tooltip>

        </med-base>
      </Host>
    );
  }

}
