import { Component, Host, h, Prop, Method } from '@stencil/core';
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
    * Define o valor do progresso do componente.
    */
  @Prop({ reflect: true, mutable: true }) value = 0;

  /**
    * Define a porcentagem a ser mostrada.
    */
  @Prop({ reflect: true }) label?: string;

  /**
   * Define o estado do componente programaticamente.
   */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.download = !this.download;
  }

  render() {
    const { dsColor, dsSize, download, downloaded, label, value } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--download': download,
        'med-piechart--downloaded': downloaded,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
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

            <med-download-button class="med-piechart__button" ds-color={dsColor} value={value} downloaded={downloaded}></med-download-button>
          </div>
        </div>
      </Host>
    );
  }

}
