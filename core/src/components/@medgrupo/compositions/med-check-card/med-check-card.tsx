import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-check-card',
  styleUrl: 'med-check-card.scss',
  shadow: true,
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

  @Prop({ reflect: true }) dataInicial?: string;

  @Prop({ reflect: true }) dataFinal?: string;

  @Prop({ reflect: true }) finalizada?: string;

  @Prop({ reflect: true }) iconName?: string;

  @Event() medClick!: EventEmitter;

  @Event() medTooltipClose!: EventEmitter;


  onClick() {
    this.medClick.emit();
  }

  onTooltipCloseClick() {
    this.medTooltipClose.emit();
  }

  render() {
    const { dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal, iconName } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-check-card': true,
          'med-check-card--alert': alert,
        })}>
        <med-base class="med-check-card__base">
          <div class="med-check-card__input-container">
            <slot name="input"></slot>
          </div>

          <div class="med-check-card__container" onClick={() => this.onClick()}>
            <div class="med-check-card__text-container">
              <med-type token="p16xb">{titulo}</med-type>

              <div class="med-check-card__info-container">
                <div class="med-check-card__container-fix">
                  <ion-icon class="med-check-card__icon med-icon med-icon--xs" name={iconName}></ion-icon>
                  <med-type class="med-check-card__subtitulo" token="p12xb">{categoria}</med-type>
                </div>
                {!dataInicial && !dataFinal && horaInicial && horaFinal && <med-type class="med-check-card__hora" token="p12x">{horaInicial} – {horaFinal}</med-type>}
              </div>
              {dataInicial && dataFinal && !horaInicial && !horaFinal && <med-type class="med-check-card__data" token="p12x">{dataInicial} até {dataFinal}</med-type>}
              {dataInicial && dataFinal && horaInicial && horaFinal && <med-type class="med-check-card__data" token="p12x">{dataInicial} - {horaInicial} até {dataFinal} - {horaFinal}</med-type>}
            </div>
          </div>

          <div class={alert ? 'med-check-card__tooltip-container' : ''}>
            <slot name="tooltip"></slot>
          </div>
        </med-base>
      </Host>
    );
  }

}
