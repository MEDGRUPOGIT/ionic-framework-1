import { Component, Host, h, Prop, State } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-semana',
  styleUrl: 'med-semana.scss',
  scoped: true,
})
export class MedSemana {
  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a variação de tamanho do componente.
    */
  @Prop() dsSize?: 'sm';

  /**
    * Define o estado active do componente.
    */
  @Prop({ reflect: true }) active = false;;

  /**
    * Define a skin do componente.
    */
  @Prop({ reflect: true }) skin?: 'lista';

  @State() flipped = false;

  private handleFlip() {
    this.flipped = !this.flipped;
  }

  render() {
    const { dsColor, active, skin } = this;

    let textContainerEl;
    let piechartContainerEl;

    textContainerEl = (
      <div class="med-semana__heading-container">
        <div class="med-semana__text-container">
          <div class={`med-semana__text-animate med-semana__text-animate--default ${this.flipped ? 'med-semana__text-animate--flipped' : ''}`}>
            <med-type class="med-semana__semana">Semana</med-type>
            <med-type class="med-semana__numero">01</med-type>
          </div>
          <div class={`med-semana__text-animate med-semana__text-animate--back ${this.flipped ? 'med-semana__text-animate--flipped' : ''}`}>
            <med-type class="med-semana__back">16/08</med-type>
            <med-type class="med-semana__back">24/08</med-type>
          </div>
        </div>
        <div
          class={`med-semana__button-flip ${this.flipped ? 'med-semana__button-flip--active' : ''}`}
          role="button"
          onClick={() => this.handleFlip()}>
        </div>
      </div>
    );

    piechartContainerEl = (
      <div class="med-semana__chart-container med-scrollbar">
        <med-piechart class="med-semana__chart" ds-color={dsColor} label="nef 01" value={25} download={this.flipped}></med-piechart>
        <med-piechart class="med-semana__chart" ds-color={dsColor} label="nef 01" value={75} download={this.flipped} downloaded></med-piechart>
      </div>
    );

    if (skin) {
      textContainerEl = (
        <div class="med-semana__heading-container">
          <div class="med-semana__text-container">
            <med-type class="med-semana__text">Semana</med-type>
            <med-type class="med-semana__text med-semana__text--number">01</med-type>

            <div class="med-semana__week-container">
              <med-type class="med-semana__auxiliar">De</med-type>
              <med-type class="med-semana__auxiliar">24/08</med-type>
              <med-type class="med-semana__auxiliar">até</med-type>
              <med-type class="med-semana__auxiliar">24/08</med-type>
            </div>
          </div>
        </div>
      );

      piechartContainerEl = (
        <div class="med-semana__chart-container med-scrollbar">
          <div class="med-semana__chart-row">
            <med-piechart class="med-semana__chart" ds-color={dsColor} label="nef 01" value={25}></med-piechart>
            <med-type class="med-semana__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum.
            </med-type>
            <div class="med-semana__tempo-container">
              <med-type class="med-semana__tempo">2h30</med-type>
              <med-download-button class="med-semana__download-button" ds-color={dsColor}></med-download-button>
            </div>
          </div>
          <div class="med-semana__chart-row">
            <med-piechart class="med-semana__chart" ds-color={dsColor} label="nef 01" value={75}></med-piechart>
            <med-type class="med-semana__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum.
            </med-type>
            <div class="med-semana__tempo-container">
              <med-type class="med-semana__tempo">2h30</med-type>
              <med-download-button class="med-semana__download-button" ds-color={dsColor}></med-download-button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Host class={generateMedColor(dsColor, {
        'med-semana': true,
        'med-semana--active': active,
        [`med-semana--skin-${skin}`]: skin !== undefined,
        })}>
          {textContainerEl}
          {piechartContainerEl}
      </Host>
    );
  }
}
