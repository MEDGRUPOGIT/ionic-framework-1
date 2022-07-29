import { Component, h, Host, Prop } from '@stencil/core';
import { MedChartRadiaItem } from '../../../../@templarios/interfaces/chart-radial.interface';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-chart-radial-label',
  styleUrl: 'med-chart-radial-label.scss',
  scoped: true
})
export class MedChartRadialLabel {

  /**
   * todo
   */
  @Prop({reflect: true}) valores: MedChartRadiaItem[] = [];

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsSize?: 'lg';

  render() {
    const { dsColor, dsSize } = this;

    //const arrayReverse = this.valores.slice(0).reverse();

    return (
      <Host from-stencil
        class={generateMedColor(dsColor, {
          'med-chart-radial-label': true,
          [`med-chart-radial-label--${dsSize}`]: dsSize !== undefined,
        })}
      >
        <ul class="med-chart-radial-label__list">
          {
            this.valores.map((item: MedChartRadiaItem) => {
              return <li class="med-chart-radial-label__item"><span class={{'med-chart-radial-label__quantia': true, [item.cor]: true}}>{item.quantia}</span> {item.label}</li>
            })
          }
        </ul>
      </Host>
    );
  }

}
