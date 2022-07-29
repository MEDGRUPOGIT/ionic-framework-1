import { Component, ComponentInterface, Element, h, Host, Method } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';

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

  /**
   * todo
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
    return (
      <Host
        class={generateMedColor(null , {'med-lista' : true})}
      >
        <slot></slot>
      </Host>
    );
  }
}
