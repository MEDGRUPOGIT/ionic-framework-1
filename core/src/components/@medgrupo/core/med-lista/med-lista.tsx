import { Component, ComponentInterface, Element, Host, Method, h } from '@stencil/core';
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
