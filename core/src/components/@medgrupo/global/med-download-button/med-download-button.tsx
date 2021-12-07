import { Component, Host, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';
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
    * TODO.
    */
  @Prop({ reflect: true }) downloaded = false;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) downloading = false;

  /**
    * TODO.
    */
  @Prop({ reflect: true, mutable: true }) initial = true;

  /**
    * TODO.
    */
  @Event() medDownloaded!: EventEmitter;

  /**
    * TODO.
    */
  @Event() medCancelar!: EventEmitter;

  @Watch('downloaded')
  downloadedChanged() {
    this.medDownloaded.emit();
  }

  @Watch('value')
  valueChanged() {
    if (this.value !== 0 && this.value !== 100) {
      this.initial = false;
      this.downloaded = false;
      this.downloading = true;
    }

    if (this.value === 0) {
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
    }

    if (this.value === 100) {
      this.downloaded = true;
      this.downloading = false;
      this.medDownloaded.emit();
    }
  }

  toggle(event?: Event) {
    event?.stopPropagation();
    if (this.initial) {
      this.initial = false;

      if (this.value !== 100) {
        this.downloaded = false;
        this.downloading = true;
      } else if (this.value === 100) {
        this.downloaded = true;
        this.downloading = false;
        this.medDownloaded.emit();
      }
    } else {
      this.medCancelar.emit();
    }
  }

  render() {
    const { dsColor, value, initial, downloading, downloaded } = this;

    return (
      <Host
        onClick={(event: any) => { this.toggle(event)} }
        class={generateMedColor(dsColor, {
          'med-download-button': true,
          'med-download-button--downloading': downloading && !initial,
          'med-download-button--downloaded': downloaded && !initial
        })}>
        <div class="download-icon">
          <svg viewBox="0 0 36 36" class="download-icon__svg">
            <circle cx="18" cy="18" r="16" class="download-icon__circle" />
            <circle cx="18" cy="18" r="16" class="download-icon__circle download-icon__circle--value" style={{ '--value': `${value}` }} />
          </svg>
        </div>
      </Host>
    );
  }

}
