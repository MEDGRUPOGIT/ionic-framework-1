import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { PlusMinusStatus } from '../../../../@templarios/enums/plusminus.enum';

@Component({
  tag: 'med-plusminus',
  styleUrl: 'med-plusminus.scss',
  scoped: true,
})
export class MedPlusminus {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsSize?: 'xl';

  /**
   * todo
   */
  @Event() medChange!: EventEmitter<PlusMinusStatus>;

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled?: 'minus' | 'plus' | 'both';

  private onClick = (status: PlusMinusStatus) => {
    this.medChange.emit(status);
  }

  render() {
    const { dsSize, dsColor, disabled } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-plusminus': true,
          [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
          [`med-plusminus--${dsSize}`]: dsSize !== undefined,
        },)}
      >
        <ion-icon
          class="med-icon med-plusminus__icon-minus"
          name="med-menos-circulo"
          onClick={() => this.onClick(PlusMinusStatus.MINUS)}
        ></ion-icon>
        <slot></slot>
        <ion-icon
          class="med-icon med-plusminus__icon-plus"
          name="med-mais-circulo"
          onClick={() => this.onClick(PlusMinusStatus.PLUS)}
        ></ion-icon>
      </Host>
    );
  }

}
