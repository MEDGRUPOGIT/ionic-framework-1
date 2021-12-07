import { Component, Host, h, Prop, Method, State, Watch } from '@stencil/core';
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
    * Define o estado do componente.
    */
  @Prop({ reflect: true }) active = false;

  /**
   * Define o progresso a ser mostrado.
   */
  @Prop({ reflect: true }) progresso = 0;

  // ////////////////////
  // Botão de download
  // ////////////////////

  /**
    * Define a porcentagem de download do botão de download.
    */
  @Prop({ reflect: true }) downloadProgresso = 0;

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) downloading = false;

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) downloaded = false;

  @State() firstFlip = true;
  @State() teste = false;

  /**
    * TODO
    */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.active = !this.active;
  }

  @Watch('active')
  activeChanged() {
    console.log(this.active);

    if (!this.firstFlip) {
      this.teste = !this.teste;
    }

    this.firstFlip = false;
  }

  render() {
    const { dsColor, active, progresso } = this;

    return (
      <Host class={generateMedColor(dsColor, {
          'med-piechart': true,
          'med-piechart--active': active,
          'med-piechart--reverse': this.teste,
        })}>
          <svg viewBox="0 0 36 36"
            style={{'--porcentagem': `${progresso}`}}
            class="draw">
              <circle class="draw__background" cx="18" cy="18" r="16"/>
              <circle class="draw__background draw__background--porcentagem" cx="18" cy="18" r="16"/>
              <text class="draw__text" x="18" y="17">NEF</text>
              <text class="draw__text" x="18" y="27">1</text>
          </svg>
          <div class="draw-flip">
            <med-caption class="draw-flip__text" dsSize="sm">
              <label>NEF</label>
            </med-caption>
            <med-caption class="draw-flip__text" dsSize="sm">
              <label>1</label>
            </med-caption>
          </div>
          {/* <med-download-button class="draw-flip__download" dsColor={dsColor} value={downloadProgresso} downloading={downloading} downloaded={downloaded}></med-download-button> */}
      </Host>
    );
  }

}
