import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';


@Component({
  tag: 'med-chip',
  styleUrl: 'med-chip.scss',
  scoped: true
})
export class MedChip {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a variação do componente.
    */
  @Prop({ reflect: true }) dsName?: 'secondary';

  /**
    * Define a variação de tamanho componente.
    */
  @Prop({ reflect: true }) dsSize?: 'md';

  /**
    * Define o texto do componente.
    */
  @Prop({ reflect: true }) label!: string;

  /**
   * Define o estado disabled do componente.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Define o estado active do componente.
   */
  @Prop({ reflect: true }) active = false;

  /**
    * Define o icone left do componente.
    */
  @Prop({reflect: true}) iconLeft!: string;

  /**
    * Define o icone right do componente.
    */
  @Prop({reflect: true}) iconRight!: string;

  /**
    * Emitido quando o chip tem focus.
    */
   @Event() medFocus!: EventEmitter<void>;

  /**
    * Emitido quando o chip perde o focus.
    */
  @Event() medBlur!: EventEmitter<void>;

  /**
    * Emitido quando o chip é clicado.
    */
  @Event() medClick!: EventEmitter<void>;

  private onFocus = () => {
    this.medFocus.emit();
  }

  private onBlur = () => {
    this.medBlur.emit();
  }

  private onClick = () => {
    this.medClick.emit();
  }

  render() {
    const { dsColor, dsName, dsSize, disabled, label, active, iconLeft, iconRight } = this;

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={generateMedColor(dsColor, {
          'med-chip': true,
          'med-chip--active': active,
          'med-chip--disabled': disabled,
          [`med-chip--${dsName}`]: dsName !== undefined,
          [`med-chip--${dsSize}`]: dsSize !== undefined,
          [`med-chip--icon-left`]: iconLeft !== undefined,
          [`med-chip--icon-right`]:  iconRight !== undefined,
        })}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onClick={this.onClick}
      >
        {iconLeft !== undefined && <div class="med-chip__img-warp">
         <ion-icon class="med-icon med-chip__icon" name={iconLeft}></ion-icon>
        </div>}

        <med-type class="med-chip__label">{label}</med-type>

        {iconRight && <div class="med-chip__img-warp">
          <ion-icon class="med-icon med-chip__icon" name={iconRight}></ion-icon>
        </div>}
      </Host>
    );
  }
}
