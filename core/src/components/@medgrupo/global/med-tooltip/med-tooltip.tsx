import { Component, Host, h, Prop, Method, Listen } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
import { MedColor } from '../../../../interface';

@Component({
  tag: 'med-tooltip',
  styleUrl: 'med-tooltip.scss',
  shadow: true,
})
export class MedTooltip {
  /**
   * TODO
   */
  @Prop() dsName?: 'definition';

  /**
   * TODO
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * TODO
   */
  @Prop({ reflect: true }) placement?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * TODO
   */
  @Prop({ reflect: true }) position?: 'start' | 'center' | 'end';

  /**
   * TODO
   */
  @Prop({ reflect: true }) titulo?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true }) content?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  /**
   * TODO
   */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  @Listen('click', { target: 'window' })
  handleClick(event?: Event) {
    if (!this.collapsed) {
      this.toggle(event);
    }
  }

  render() {
    const { dsName, placement, position, collapsed, titulo, content, dsColor } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-tooltip': true,
          [`med-tooltip--${dsName}`]: dsName !== undefined,
          [`med-tooltip--${placement}`]: placement !== undefined,
          [`med-tooltip--${position}`]: position !== undefined,
          'med-tooltip--collapsed': collapsed
        })}
      >
        <div class="med-tooltip__input-container" onClick={(event) => {this.toggle(event)}}>
          <slot name="input"></slot>
        </div>

        <div class="med-tooltip__content">
          {titulo && <h3 class="med-tooltip__titulo">{titulo}</h3>}
          {content && <p class="med-tooltip__text">{content}</p>}
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
