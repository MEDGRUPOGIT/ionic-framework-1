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
    * Define o estado do componente quando download tiver concluído.
    */
  @Prop({ reflect: true }) downloaded = false;

  /**
    * Define o estado do componente durante o download.
    */
  @Prop({ reflect: true }) downloading = false;

  /**
    * Define o estado inicial do componente.
    */
  @Prop({ reflect: true, mutable: true }) initial = true;

  /**
    * Emitido quando download está concluído.
    */
  @Event() medDownloaded!: EventEmitter;

  /**
    * Emitido quando download for cancelado.
    */
  @Event() medCancelar!: EventEmitter;

  /**
  * Emitido quando download for iniciado.
  */
  @Event() medDownloading!:EventEmitter;


  @Watch('downloaded')
  downloadedChanged() {
    this.medDownloaded.emit({downloaded:this.downloaded});
  }

  @Watch('downloading')
  downloadingChange(){
    this.medDownloading.emit();
  }

  @Watch('value')
  valueChanged() {
    console.log('value',this.value)
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
    }
  }

  toggle(event?: Event) {
    event?.stopPropagation();
    console.log('toggle',this.value)
    if(this.downloaded){
      console.log('emitiu medDownload-button')
      this.medDownloaded.emit({downloaded:this.downloaded})

    } else if (this.initial) {
      this.initial = false;

      if (this.value !== 100) {
        this.downloaded = false;
        this.downloading = true;
      }
      else if (this.value === 100) {
        this.downloaded = true;
        this.downloading = false;
        this.medDownloaded.emit({downloaded:this.downloaded});
      }
    }  else {
      this.medCancelar.emit();
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
      this.value = 0
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
          'med-download-button--downloaded': downloaded
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
