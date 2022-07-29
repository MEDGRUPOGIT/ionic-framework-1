import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-autocomplete',
  styleUrl: 'med-autocomplete.scss',
  scoped: true,
})
export class MedAutocomplete {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
