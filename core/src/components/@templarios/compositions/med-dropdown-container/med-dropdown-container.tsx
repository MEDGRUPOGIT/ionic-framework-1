import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'med-dropdown-container',
  styleUrl: 'med-dropdown-container.scss',
  scoped: true,
})
export class MedDropdownContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
