import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch
} from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';
import { PlusMinusStatus } from '../../../@templarios/enums/plusminus.enum';

@Component({
  tag: 'med-plusminus',
  styleUrl: 'med-plusminus.scss',
  scoped: true
})
export class MedPlusminus {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) dsSize?: 'xl';

  @Event() medChange!: EventEmitter<PlusMinusStatus>;

  @Event() medChangeAlt!: EventEmitter<number>;

  @Prop({ reflect: true }) disabled?: 'minus' | 'plus' | 'both';

  /**
   * true se deve desabilitar os controles automaticamente
   */
  @Prop({ reflect: true }) automaticDisabled = false;

  /**
   * Deverá ser true se o valor atual vai ser passado por slot, false se vai ser passado por prop
   */
  @Prop({ reflect: true }) useSlot = true;

  /**
   * O valor atual (apenas se useSlot é false)
   */
  @Prop({ reflect: true }) value?: number;

  /**
   * O valor mínimo
   */
  @Prop({ reflect: true }) min?: number;

  /**
   * O valor máximo
   */
  @Prop({ reflect: true }) max?: number;

  @Watch('value')
  disabledHandler(newValue: number, _: number) {
    if (
      this.min === undefined ||
      this.max === undefined ||
      this.value === undefined ||
      !this.automaticDisabled
    )
      return;

    if (newValue === this.min && newValue === this.max) {
      return (this.disabled = 'both');
    }

    if (newValue === this.min) {
      return (this.disabled = 'minus');
    }

    if (newValue === this.max) {
      return (this.disabled = 'plus');
    }

    this.disabled = undefined;
  }

  private onClick = (status: PlusMinusStatus) => {
    if (
      this.min === undefined ||
      this.max === undefined ||
      this.value === undefined ||
      !this.automaticDisabled
    ) {
      return this.medChange.emit(status);
    }

    if (status === PlusMinusStatus.MINUS && this.value === this.min) return;
    if (status === PlusMinusStatus.PLUS && this.value === this.max) return;

    const increment = status === PlusMinusStatus.MINUS ? -1 : 1;
    this.medChangeAlt.emit(this.value + increment);
  };

  componentDidLoad() {
    this.disabledHandler(this.value ?? 0, 0);
  }

  render() {
    const { dsSize, dsColor, disabled, useSlot, value } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-plusminus': true,
          [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
          [`med-plusminus--${dsSize}`]: dsSize !== undefined
        })}
      >
        <ion-icon
          class='med-icon med-plusminus__icon-minus'
          name='med-menos-circulo'
          onClick={() => this.onClick(PlusMinusStatus.MINUS)}
        ></ion-icon>
        {useSlot ? <slot></slot> : value ?? 0}
        <ion-icon
          class='med-icon med-plusminus__icon-plus'
          name='med-mais-circulo'
          onClick={() => this.onClick(PlusMinusStatus.PLUS)}
        ></ion-icon>
      </Host>
    );
  }
}
