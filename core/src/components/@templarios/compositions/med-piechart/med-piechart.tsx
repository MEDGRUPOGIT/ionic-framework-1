import { Component, h, Host, Listen, Method, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-piechart',
  styleUrl: 'med-piechart.scss',
  shadow: true,
})
export class MedPiechart {

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
  @Prop({ reflect: true }) download = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) downloaded = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) value = 0;

  /**
   * todo
   */
  @Prop({reflect: true, mutable:true })  downloadProgress = 0;

  /**
   * todo
   */
  @Prop({ reflect: true }) index?: number;

  /**
   * todo
   */
  @Prop({ reflect: true }) identification?: string | number | undefined;

  /**
   * todo
   */
  @Prop({ reflect: true }) hideDownload = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.download = !this.download;
  }

  /**
   * todo
   */
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
