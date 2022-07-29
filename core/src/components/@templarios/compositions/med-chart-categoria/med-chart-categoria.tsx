import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-chart-categoria',
  styleUrl: 'med-chart-categoria.scss',
  scoped: true,
})
export class MedChartCategoria {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) value = 0;

  /**
   * todo
   */
  @Prop({ reflect: true }) titulo?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) meta?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) realizado?: string;

  render() {
    const { dsColor, value, titulo, meta, realizado } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-chart-categoria': true,
      })}>
        <div class="med-chart-categoria__header">
          <med-type token="p12b">{titulo}</med-type>

          <div class="med-chart-categoria__info">
            <div class="med-chart-categoria__meta">
              <med-type token="p10" dsColor="neutral-8">Meta</med-type>
              <med-type class="med-chart-categoria__info-type" token="p10b">{meta}</med-type>
            </div>

            <div class="med-chart-categoria__realizado">
              <med-type token="p10" dsColor="neutral-8">Realizado</med-type>
              <med-type class="med-chart-categoria__info-type med-chart-categoria__info-type--realizado" token="p10b">{realizado}</med-type>
            </div>
          </div>
        </div>
        <med-chart-bar-horizontal class="med-chart-categoria__chart" dsColor={dsColor} value={value}></med-chart-bar-horizontal>
      </Host>
    );
  }

}
