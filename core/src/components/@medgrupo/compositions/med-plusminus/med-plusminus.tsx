import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { PlusMinusStatus } from './med-plusminus.enum';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-plusminus',
  styleUrl: 'med-plusminus.scss',
  scoped: true,
})
export class MedPlusminus {

  /**
  * Define a cor do componente.
  */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * TODO
   */
  @Prop({ reflect: true }) dsSize?: 'xl';

  /**
   * TODO
   */
  @Event() medChange!: EventEmitter<PlusMinusStatus>;

   /**
   * TODO
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
