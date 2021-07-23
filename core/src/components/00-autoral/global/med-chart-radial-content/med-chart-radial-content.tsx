import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'med-chart-radial-content',
  styleUrl: 'med-chart-radial-content.scss',
  shadow: true,
})
export class MedChartRadialContent {
  @Prop({reflect: true}) total = 0;

  render() {
    const { total } = this;

    return (
      <Host>
        <div class="monta-provas-chart__total">
          <span class="monta-provas-chart__label">Total de</span>
          <span class="monta-provas-chart__number">{total}</span>
          <span class="monta-provas-chart__label">Questões</span>
        </div>
      </Host>
    );
  }

}
