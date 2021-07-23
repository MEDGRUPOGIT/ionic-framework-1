import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'med-chart-radial-content',
  styleUrl: 'med-chart-radial-content.css',
  shadow: true,
})
export class MedChartRadialContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
