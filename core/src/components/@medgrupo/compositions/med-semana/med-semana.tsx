import { Component, Host, h, Prop, State } from "@stencil/core";
import { MedColor } from "../../../../interface";
import { generateMedColor } from "../../../../utils/med-theme";

@Component({
  tag: "med-semana",
  styleUrl: "med-semana.scss",
  scoped: true,
})
export class MedSemana {
  private A = {
    Title: "semana",
    Numero: "01",
    DataInicio: "16/08",
    DataFim: "24/08",
    Itens: [
      {
        Nome: "nef 1",
        PercentLido: 75,
        Downloaded: false,
        DownloadProgress: 0,
        Time: "2h30m",
        Descricao: "Lorem Ipslum at lanium",
      },
    ],
  };

  /**
   * Define a cor do componente.
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * Define a variação de tamanho do componente.
   */
  @Prop() dsSize?: "sm";

  /**
   * Define o estado active do componente.
   */
  @Prop({ reflect: true }) active = false;

  /**
   * Define a skin do componente.
   */
  @Prop({ reflect: true }) skin?: "lista";

  @Prop({ reflect: true }) content: any = this.A;

  @State() flipped = false;

  private handleFlip() {
    this.flipped = !this.flipped;
  }

  private createTextContainerEl(
    content: {
      Title: string;
      Numero: number;
      DataInicio: string;
      DataFim: string;
    },
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
              <med-type class="med-semana__auxiliar">De</med-type>
              <med-type class="med-semana__auxiliar">
                {content?.DataInicio}
              </med-type>
              <med-type class="med-semana__auxiliar">até</med-type>
              <med-type class="med-semana__auxiliar">
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

  private createPieChartEl(Itens: any, skin?: string) {
    if (skin === "lista") {
      return (
        <div class="med-semana__chart-container med-scrollbar">
          {Itens?.map((item: any) => (
            <div class="med-semana__chart-row">
              <med-piechart
                class="med-semana__chart"
                ds-color={this.dsColor}
                label={item.Nome}
                value={item.ChartProgress}
                download-progress={item.DownloadProgress}
                downloaded={item.Downloaded}
                download={this.flipped}
              ></med-piechart>
              <med-type class="med-semana__description">
                {item.Description}
              </med-type>
              <div class="med-semana__tempo-container">
                <med-type class="med-semana__tempo">{item?.Time}</med-type>
                <med-download-button
                  class="med-semana__download-button"
                  ds-color={this.dsColor}
                ></med-download-button>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div class="med-semana__chart-container med-scrollbar">
          {Itens?.map((item: any) => (
            <med-piechart
              class="med-semana__chart"
              ds-color={this.dsColor}
              label={item.Nome}
              value={item.ChartProgress}
              download-progress={item.DownloadProgress}
              downloaded={item.Downloaded}
              download={this.flipped}
            ></med-piechart>
          ))}
        </div>
      );
    }
  }

  render() {
    const { dsColor, active, skin, content } = this;
    console.log(this.A);
    let textContainerEl;
    let piechartContainerEl;
    textContainerEl = this.createTextContainerEl(content, skin);
    piechartContainerEl = this.createPieChartEl(content.Itens, skin);
    return (
      <Host
        class={generateMedColor(dsColor, {
          "med-semana": true,
          "med-semana--active": active,
          [`med-semana--skin-${skin}`]: skin !== undefined,
        })}
      >
        {textContainerEl}
        {piechartContainerEl}
      </Host>
    );
  }
}
