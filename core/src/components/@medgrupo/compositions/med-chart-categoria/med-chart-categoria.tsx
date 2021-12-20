import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-chart-categoria',
  styleUrl: 'med-chart-categoria.scss',
  scoped: true,
})
export class MedChartCategoria {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define o valor do componente.
    */
  @Prop({ reflect: true }) value = 0;

  render() {
    const { dsColor, value } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-chart-categoria': true,
      })}>
        <div class="med-chart-categoria__header">
          <med-type token="p12b">Assistir Videoaulas</med-type>

          <div class="med-chart-categoria__info">
            <div class="med-chart-categoria__meta">
              <med-type token="p10" dsColor="neutral-8">Meta</med-type>
              <med-type token="p10b">100h</med-type>
            </div>

            <div class="med-chart-categoria__realizado">
              <med-type token="p10" dsColor="neutral-8">Realizado</med-type>
              <med-type class="med-chart-categoria__tempo-realizado" token="p10b">85h</med-type>
            </div>
          </div>
        </div>
        <med-chart-bar-horizontal class="med-chart-categoria__chart" dsColor={dsColor} value={value}></med-chart-bar-horizontal>
      </Host>
    );
  }

}
