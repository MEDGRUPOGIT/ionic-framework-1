import { Component, h, Host, Prop, State } from '@stencil/core';
import { ItensInterface, MedSemanaInterface } from '../../../../@templarios/interfaces/semana.interface';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: "med-semana",
  styleUrl: "med-semana.scss",
  scoped: true,
})
export class MedSemana {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsSize?: 'sm';

  /**
   * todo
   */
  @Prop({ reflect: true }) active = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) skin?: 'lista';

  /**
   * todo
   */
  @Prop({ reflect: true }) content!: MedSemanaInterface;

  /**
   * todo
   */
  @Prop({ reflect: true }) hideDownload = false;

  /**
   * todo
   */
  @State() flipped = false;

  private handleFlip() {
    this.flipped = !this.flipped;
  }

  private createTextContainerEl(
    content: MedSemanaInterface,
    skin?: string
  ) {
    if (skin === "lista") {
      return (
        <div class="med-semana__heading-container">
          <div class="med-semana__text-container">
            <med-type class="med-semana__text">{content?.Title}</med-type>
            <med-type class="med-semana__text med-semana__text--number">
              {content?.Numero}
            </med-type>

            <div class="med-semana__week-container">
              <med-type token="p16" ds-color="neutral-7" class="med-semana__auxiliar">De</med-type>
              <med-type token="p16" ds-color="neutral-7" class="med-semana__auxiliar">
                {content?.DataInicio}
              </med-type>
              <med-type token="p16" ds-color="neutral-7" class="med-semana__auxiliar">até</med-type>
              <med-type token="p16" ds-color="neutral-7" class="med-semana__auxiliar">
                {content?.DataFim}
              </med-type>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="med-semana__heading-container">
          <div class="med-semana__text-container">
            <div
              class={`med-semana__text-animate med-semana__text-animate--default ${
                this.flipped ? "med-semana__text-animate--flipped" : ""
              }`}
            >
              <med-type class="med-semana__semana">{content?.Title}</med-type>
              <med-type class="med-semana__numero">{content?.Numero}</med-type>
            </div>
            <div
              class={`med-semana__text-animate med-semana__text-animate--back ${
                this.flipped ? "med-semana__text-animate--flipped" : ""
              }`}
            >
              <med-type class="med-semana__back">
                {content?.DataInicio}
              </med-type>
              <med-type class="med-semana__back">{content?.DataFim}</med-type>
            </div>
          </div>
          <div
            class={`med-semana__button-flip ${
              this.flipped ? "med-semana__button-flip--active" : ""
            }`}
            role="button"
            onClick={() => this.handleFlip()}
          ></div>
        </div>
      );
    }
  }

  private createPieChartEl(Itens: ItensInterface[], skin?: string) {

    if (skin === "lista") {
      return (
        <div class="med-semana__chart-container">
          {Itens?.map((item: ItensInterface, index:number) => (
            <div class="med-semana__chart-row">
              <med-piechart
                class="med-semana__chart"
                ds-color={this.dsColor}
                ds-size={this.dsSize}
                label={item.Nome}
                value={item.PercentLido}
                download-progress={item.DownloadProgress}
                downloaded={item.Downloaded}
                download={this.flipped}
                disabled={this.disabled}
                index={index}
                identification={item.Id}
                hide-download
              ></med-piechart>
              <med-type class="med-semana__description">
                {item.Descricao}
              </med-type>
              <div class="med-semana__tempo-container">
                <med-type class="med-semana__tempo">{item?.Time}</med-type>
                <med-download-button
                  class="med-semana__download-button"
                  ds-color={this.dsColor}
                  value={item.DownloadProgress}
                  downloaded={item.Downloaded}
                  disabled={this.disabled}
                  index={index}
                  identification={item.Id}
                ></med-download-button>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div class="med-semana__chart-container">
          {Itens?.map((item: any) => (
            <med-piechart
              class="med-semana__chart"
              ds-color={this.dsColor}
              ds-size={this.dsSize}
              label={item.Nome}
              value={item.PercentLido}
              download-progress={item.DownloadProgress}
              downloaded={item.Downloaded}
              download={this.flipped}
              disabled={this.disabled}
            ></med-piechart>
          ))}
        </div>
      );
    }
  }

  render() {
    const { dsColor, dsSize, active, skin, content, hideDownload} = this;
    let textContainerEl;
    let piechartContainerEl;

    textContainerEl = this.createTextContainerEl(content, skin);
    piechartContainerEl = this.createPieChartEl(content.Itens, skin);

    return (
      <Host
        class={generateMedColor(dsColor, {
          "med-semana": true,
          "med-semana--active": active,
          "med-semana--hide-download": hideDownload,
          [`med-semana--skin-${skin}`]: skin !== undefined,
          [`med-semana--${dsSize}`]: dsSize !== undefined,
        })}
      >
        {textContainerEl}
        {piechartContainerEl}
      </Host>
    );
  }
}
