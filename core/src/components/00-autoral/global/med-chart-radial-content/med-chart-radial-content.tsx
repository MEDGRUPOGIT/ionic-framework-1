import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'med-chart-radial-content',
  styleUrl: 'med-chart-radial-content.scss',
  shadow: true,
})
export class MedChartRadialContent {
  @Prop({reflect: true}) total = 0;

  componentDidRender() {
    this.fontResize();
  }

  @Watch('total')
  collapsedChanged() {
    this.fontResize();
  }
  private fontResize() {
    if (this.total.toString().length >= 6) {
      return 'monta-provas-chart__number--small';
    }

    return '';
  }

  render() {
    const { total } = this;

    return (
      <Host>
        <span class="monta-provas-chart__label">Total de</span>
        <span class={`monta-provas-chart__number ${this.fontResize()}`}>{total}</span>
        <span class="monta-provas-chart__label">Questões</span>
      </Host>
    );
  }

}
