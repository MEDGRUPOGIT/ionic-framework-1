import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-context-menu',
  styleUrl: 'med-context-menu.scss',
  shadow: true,
})
export class MedContextMenu {

  render() {
    return (
      <Host from-stencil>
        <slot></slot>
      </Host>
    );
  }

}
