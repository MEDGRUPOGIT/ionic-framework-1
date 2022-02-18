import { Component, ComponentInterface, Element, Host, Method, Prop, h } from '@stencil/core';

import { getIonMode } from '../../../../global/ionic-global';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'med-lista',
  styleUrls: {
    ios: 'med-lista.scss',
    md: 'med-lista.scss'
  },
  shadow: true,
})
export class List implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop() padding = false;

  /**
   * How the bottom border should be displayed on all items.
   */
  @Prop() lines?: 'full' | 'inset' | 'none';

  /**
   * If `true`, the list will have margin around it and rounded corners.
   */
  @Prop() inset = false;

  /**
   * If `ion-item-sliding` are used inside the list, this method closes
   * any open sliding item.
   *
   * Returns `true` if an actual `ion-item-sliding` is closed.
   */
  @Method()
  async closeSlidingItems(): Promise<boolean> {
    const item = this.el.querySelector('ion-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }

  render() {
    const mode = getIonMode(this);
    const { lines, inset, dsColor, padding } = this;
    return (
      <Host
        class={generateMedColor(dsColor,{
          [mode]: true,

          // Used internally for styling
          //[`list-${mode}`]: true,

          'list-inset': inset,
          [`list-lines-${lines}`]: lines !== undefined,
          [`list-${mode}-lines-${lines}`]: lines !== undefined,
          'list-padding': padding,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
