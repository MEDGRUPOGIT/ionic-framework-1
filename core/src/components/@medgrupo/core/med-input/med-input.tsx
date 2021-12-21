import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-input',
  styleUrl: 'med-input.scss',
  shadow: true,
})
export class MedInput {

  render() {
    return (
      <Host>
        <slot name="label"></slot>
        <slot name="input"></slot>
      </Host>
    );
  }

}
