import { Component, Host, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <Host>
        <ul class="list">
          {
            this.valores.map((item: MedRadialItem) => {
              return <li class="item"><span class={{'quantia': true, [item.cor]: true}}>{item.quantia}</span> {item.label}</li>
            })
          }
        </ul>
      </Host>
    );
  }

}
