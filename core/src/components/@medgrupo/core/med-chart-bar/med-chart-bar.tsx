import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-chart-bar',
  styleUrl: 'med-chart-bar.scss',
  shadow: true,
})
export class MedChartBar {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a valor do componente.
    */
  @Prop({ reflect: true }) value = 0;

  /**
    * Define o height em px do componente.
    */
  @Prop({ reflect: true }) height = 50;

  /**
    * Define o width em px do componente.
    */
  @Prop({ reflect: true }) width = 42;

  /**
    * Define o token do label do componente.
    */
  @Prop({ reflect: true }) token = 'p12b';

  render() {
    const { dsColor, value, height, width, token } = this;

    const percentage = value === 0 ? 100 : 100 - value;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-chart-bar': true
      })}>
        <div class="med-chart-bar__container" style={{ '--value': `${percentage}`, '--height': `${height}px`, '--width': `${width}px` }}>
          <med-type class="med-chart-bar__label" token={token}>{value}%</med-type>
          <div class="med-chart-bar__progress"></div>
        </div>
      </Host>
    );
  }

}
