import { Component, Host, h, Prop } from '@stencil/core';
import { Color, Neutral } from '../../../../interface';
import { createColorClasses } from '../../../../utils/theme';

export interface MedRadialItem {
  cor: string;
  label: string;
  quantia: number;
  ignoreBarra: boolean;
};

@Component({
  tag: 'med-chart-label',
  styleUrl: 'med-chart-label.scss',
  scoped: true
})
export class MedChartLabel {
  @Prop({reflect: true}) valores: MedRadialItem[] = [];

  /**
   * Define a cor do componente.
   */
  @Prop() color?: Color;

  /**
   * Define a cor neutra do componente.
   */
  @Prop() neutral?: Neutral;

  render() {
    const { color, neutral, } = this;

    return (
      <Host from-stencil class={createColorClasses(color, {
          'med-chart-label': true,
        }, neutral)}
      >
        <ul class="med-chart-label__list">
          {
            this.valores.reverse().map((item: MedRadialItem) => {
              return <li class="med-chart-label__item"><span class={{'med-chart-label__quantia': true, [item.cor]: true}}>{item.quantia}</span> {item.label}</li>
            })
          }
        </ul>
      </Host>
    );
  }

}
