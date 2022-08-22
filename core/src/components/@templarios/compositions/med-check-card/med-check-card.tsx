import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";
import { MedColor } from "../../../../@templarios/types/color.type";
import { generateMedColor } from "../../../../@templarios/utilities/color";

@Component({
  tag: "med-check-card",
  styleUrl: "med-check-card.scss",
  scoped: true,
})
export class MedCheckCard {
  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) alert = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) titulo?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) categoria?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) horaInicial?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) horaFinal?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) dataInicial?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) dataFinal?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) finalizada?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) iconName?: string;

  /**
   * todo
   */
  @Event() medClick!: EventEmitter;

  /**
   * todo
   */
  @Event() medTooltipClose!: EventEmitter;

  onClick() {
    this.medClick.emit();
  }

  onTooltipCloseClick() {
    this.medTooltipClose.emit();
  }

  render() {
    const {
      dsColor,
      alert,
      titulo,
      categoria,
      horaInicial,
      horaFinal,
      dataInicial,
      dataFinal,
      iconName,
    } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          "med-check-card": true,
          "med-check-card--alert": alert,
        })}
      >
        <med-base spacing-v="s00" spacing-h="s00" class="med-check-card__base">
          <div class="med-check-card__input-container">
            <slot name="input"></slot>
          </div>

          <div class="med-check-card__container" onClick={() => this.onClick()}>
            <div class="med-check-card__text-container">
              <med-type class="med-check-card__title" token="p16xb">
                {titulo}
              </med-type>
              <div class="med-check-card__title-wrap">
                <div class="med-check-card__info-container">
                  <div class="med-check-card__container-fix">
                    <ion-icon
                      class="med-check-card__icon med-icon med-icon--xs"
                      name={iconName}
                    ></ion-icon>
                    <med-type class="med-check-card__subtitulo" token="p12xb">
                      {categoria}
                    </med-type>
                  </div>
                  {!dataInicial && !dataFinal && horaInicial && horaFinal && (
                    <med-type class="med-check-card__hora" token="p12x">
                      {horaInicial} – {horaFinal}
                    </med-type>
                  )}
                  {dataInicial && dataFinal && !horaInicial && !horaFinal && (
                    <med-type class="med-check-card__data" token="p12x">
                      {dataInicial} até {dataFinal}
                    </med-type>
                  )}
                </div>
              </div>
              {dataInicial && dataFinal && horaInicial && horaFinal && (
                <med-type class="med-check-card__data-hora" token="p12x">
                  {dataInicial} - {horaInicial} até {dataFinal} - {horaFinal}
                </med-type>
              )}
            </div>
          </div>

          <div class={alert ? "med-check-card__tooltip-container" : ""}>
            <slot name="tooltip"></slot>
          </div>
        </med-base>
      </Host>
    );
  }
}
