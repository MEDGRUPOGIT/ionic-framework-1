import { Component, Host, h, Prop, Method, Listen } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-piechart',
  styleUrl: 'med-piechart.scss',
  shadow: true,
})
export class MedPiechart {
  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a variação de tamanho do componente.
    */
  @Prop() dsSize?: 'sm';

  /**
    * Define o estado de download do componente.
    */
  @Prop({ reflect: true }) download = false;

  /**
    * Define o estado de downloaded do componente.
    */
  @Prop({ reflect: true }) downloaded = false;

  /**
    * Define a porcentagem a ser mostrada.
    */
  @Prop({ reflect: true }) label?: string;

  /**
    * Define o valor do progresso do componente do piechart.
    */
  @Prop({ reflect: true, mutable: true }) value = 0;

    /**
    * Define o valor do progresso do componente de download.
    */
  @Prop({reflect: true, mutable:true })  downloadProgress = 0;

  /**
    * Define qual a posição do array se encontra esse chart. Opcional.
    */
  @Prop({ reflect: true }) index?: number;

  /**
    * Identificador do pie-chart para emissão de eventos.
    */
  @Prop({ reflect: true }) identification?: string | number | undefined;

  /**
    * Esconde o download do pie-chart.
    */
  @Prop({ reflect: true }) hideDownload = false;

  /**
   * Define o estado habilitado ou desabilitado do componente.
   */
   @Prop({ reflect: true }) disabled = false;

  /**
    * Define o estado do componente programaticamente.
    */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.download = !this.download;
  }

  @Listen('medDownloaded')
  Isdownloaded(event?:CustomEvent){
    this.downloaded = event?.detail?.downloaded
  }

  render() {
    const { dsColor, dsSize, download, downloaded, label, value, downloadProgress, identification, index, hideDownload,disabled } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--download': download,
        'med-piechart--downloaded': downloaded,
        [`med-piechart--${dsSize}`]: dsSize !== undefined,
        })}>
         <div class="med-piechart__container">
          <div class="med-piechart__side med-piechart__side--front">
            <med-type class="med-piechart__text">{label}</med-type>

            <svg viewBox="0 0 36 36" style={{'--porcentagem': `${value}`}}>
              <circle class="med-piechart__circle" cx="18" cy="18" r="16"/>
              <circle cx="18" cy="18" r="16" class="med-piechart__circle med-piechart__circle--porcentagem"/>
            </svg>
          </div>

          <div class="med-piechart__side med-piechart__side--back">
            <med-type class="med-piechart__text med-piechart__text--back">{label}</med-type>

            {!hideDownload && <med-download-button class="med-piechart__button"
              ds-color={dsColor}
              index={index}
              value={downloadProgress}
              downloaded={downloaded}
              disabled={disabled}
              identification={identification}>
              </med-download-button>
            }
          </div>
        </div>
      </Host>
    );
  }

}
