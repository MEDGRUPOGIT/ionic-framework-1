import { Component, h, Host, Prop, Watch } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-chart-radial-content',
  styleUrl: 'med-chart-radial-content.scss',
  shadow: true,
})
export class MedChartRadialContent {

  /**
   * todo
   */
  @Prop({reflect: true}) total = 0;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsSize?: 'lg';

  componentDidRender() {
    this.fontResize();
  }

  @Watch('total')
  collapsedChanged() {
    this.fontResize();
  }
  private fontResize() {
    if (this.total.toString().length >= 6) {
      return 'med-chart-radial-content__number--small';
    }

    return '';
  }

  render() {
    const { total, dsColor, dsSize } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-chart-radial-content': true,
          [`med-chart-radial-content--${dsSize}`]: dsSize !== undefined,
        })}>
        <span class="med-chart-radial-content__label">Total de</span>
        <span class={`med-chart-radial-content__number ${this.fontResize()}`}>{total}</span>
        <span class="med-chart-radial-content__label">Questões</span>
      </Host>
    );
  }

}
