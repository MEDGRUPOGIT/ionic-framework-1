import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'tp-input-container',
  styleUrl: 'tp-input-container.scss',
  scoped: true,
})
export class TpInputContainer {

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
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) feedback = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) hasButton?: 'start' | 'end' | 'both';

  /**
   * todo
   */
  @Prop({ reflect: true }) hasIcon?: 'start' | 'end' | 'both';

  render() {
    const { dsColor, dsName, disabled, feedback, hasButton, hasIcon } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'tp-input-container': true,
          'tp-input-container--disabled': disabled,
          'tp-input-container--feedback': feedback,
          [`tp-input-container--${dsName}`]: dsName !== undefined,
          [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
          [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
        })}
      >
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </Host>
    );
  }
}
