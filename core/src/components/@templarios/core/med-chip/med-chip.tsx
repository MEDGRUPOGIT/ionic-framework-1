import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-chip',
  styleUrl: 'med-chip.scss',
  scoped: true
})
export class MedChip {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsName?: 'secondary';

  /**
   * todo
   */
  @Prop({ reflect: true }) dsSize?: 'md';

  /**
   * todo
   */
  @Prop({ reflect: true }) label!: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) active = false;

  /**
   * todo
   */
  @Prop({reflect: true}) iconLeft!: string;

  /**
   * todo
   */
  @Prop({reflect: true}) iconRight!: string;

  /**
   * todo
   */
  @Event() medFocus!: EventEmitter<void>;

  /**
   * todo
   */
  @Event() medBlur!: EventEmitter<void>;

  /**
   * todo
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
