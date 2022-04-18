import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-segment',
  styleUrl: 'med-segment.scss',
  shadow: true,
})
export class MedSegment {

  render() {
    return (
      <Host class="med-segment">
        <div class="med-segment__container">
          <slot></slot>
        </div>
        <div class="med-segment__fade"></div>
      </Host>
    );
  }
}
