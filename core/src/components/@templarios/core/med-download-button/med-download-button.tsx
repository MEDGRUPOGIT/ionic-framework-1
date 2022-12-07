import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-download-button',
  styleUrl: 'med-download-button.scss',
  shadow: true,
})
export class MedDownloadButton {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) value = 0;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) downloading = false;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) downloaded = false;

  /**
   * remover
   */
  @Prop({ reflect: true }) index?: number;

  /**
   * remover
   */
  @Prop({ reflect: true }) identification?: string|number|undefined;

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
   @Prop({ reflect: true }) dsSize?: 'lg';

  /**
   * todo
   */
  //@Event() medDownloaded!: EventEmitter;

  /**
   * todo
   */
  //@Event() medCancelar!: EventEmitter;

  /**
   * todo
   */
  //@Event() medDownloading!:EventEmitter;

  /**
   * todo
   */
  @Event() medDownloadRequested!:EventEmitter;

  /* @Watch('downloaded')
  downloadedChanged() {
    this.medDownloaded.emit(
      {
        downloaded: this.downloaded,
        id: this.identification,
        index: this.index
      }
      );
  } */

  /* @Watch('downloading')
  downloadingChange(){
    console.log('fuck');

    this.medDownloading.emit({
      downloading: this.downloading,
      id: this.identification,
      index: this.index
    });
  } */

  /* @Watch('value')
  valueChanged() {
    if (this.value !== 0 && this.value !== 100) {
      this.initial = false;
      this.downloaded = false;
      this.downloading = true;

      this.medDownloading.emit({
        downloading: this.downloading,
        id: this.identification,
        index: this.index
      });
    }

    if (this.value === 0) {
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
    }

    if (this.value === 100) {
      this.downloaded = true;
      this.downloading = false;

      this.medDownloaded.emit(
        {
          downloaded: this.downloaded,
          id: this.identification,
          index: this.index
        }
      );
    }
  } */

  toggle(event?: Event) {
    event?.stopPropagation();
    this.medDownloadRequested.emit()

    /* if(this.downloaded){
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
    } else if (this.initial) {
      this.initial = false;

      if (this.value !== 100) {
        this.downloaded = false;
        this.downloading = true;

        this.medDownloading.emit({
          downloading: this.downloading,
          id: this.identification,
          index: this.index
        });
      } else if (this.value === 100) {
        this.downloaded = true;
        this.downloading = false;

        this.medDownloaded.emit({
          downloaded:this.downloaded,
          id: this.identification,
          index: this.index
        });
      }
    }  else {
      this.medCancelar.emit({
        id: this.identification,
        index: this.index
      });

      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
      this.value = 0
    } */
  }

  render() {
    const { dsColor, value, downloading, downloaded, dsSize } = this;

    return (
      <Host
        onClick={(event: any) => { this.toggle(event)} }
        class={generateMedColor(dsColor, {
          'med-download-button': true,
          'med-download-button--downloading': downloading && !downloaded,
          'med-download-button--downloaded': downloaded,
          [`med-download-button--${dsSize}`]: dsSize !== undefined,
        })}>
        <div class="med-download-button__icon">
          <svg viewBox="0 0 36 36" class="med-download-button__svg">
            <circle cx="18" cy="18" r="16" class="med-download-button__circle" />
            <circle cx="18" cy="18" r="16" class="med-download-button__circle med-download-button__circle--value" style={{ '--value': `${value}` }} />
          </svg>
        </div>
      </Host>
    );
  }
}
