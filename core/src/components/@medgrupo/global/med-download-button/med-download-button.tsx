import { Component, Host, h, Prop, Method, Watch } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-download-button',
  styleUrl: 'med-download-button.scss',
  shadow: true,
})
export class MedDownloadButton {
  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

   /**
    * Define o valor da progress bar do componente.
    */
  @Prop({ reflect: true }) value = 0;

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) downloading = false;

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) downloaded = false;

  @Watch('value')
  valueChanged() {
    if (this.value === 100) {
      this.downloaded = true;
      this.downloading = false;
    } else {
      this.downloaded = false;
      this.downloading = true;
    }
  }

  /**
   * Define o estado do componente programaticamente.
   */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.downloading = !this.downloading;

    if (this.value === 100) {
      this.downloaded = true;
      this.downloading = false;
    }
  }

  render() {
    const { dsColor, value, downloading, downloaded } = this;

    return (
      <Host
      onClick={(event: any) => {this.toggle(event)}}
        class={generateMedColor(dsColor, {
          'med-download-button': true,
          'med-download-button--downloading': downloading,
          'med-download-button--downloaded': downloaded
        })}>
        <div class="download-icon">
          <svg viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16"/>
            <circle cx="18" cy="18" r="16" class="porcentagem"
            style={{
              '--porcentagem': `${value}`,
            }}/>
          </svg>
        </div>
      </Host>
    );
  }

}

