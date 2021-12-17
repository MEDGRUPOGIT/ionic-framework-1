import { Component, Host, h, Prop } from '@stencil/core';
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
    * Define o estado do componente.
    */
  @Prop({ reflect: true }) active = false;;

  /**
    * Define a skin do componente.
    */
  @Prop({ reflect: true }) skin?: 'lista';

  render() {
    const { dsColor, active, skin } = this;

    let textContainerEl;
    let piechartContainerEl;

    textContainerEl = (
      <div class="med-semana__heading-container">
        <div class="med-semana__text-container">
          <med-type class="med-semana__text" ds-color="neutral-10" token="p10">Semana</med-type>
          <med-type class="med-semana__text" ds-color="neutral-10" token="p16b">01</med-type>
        </div>
        <div class="med-semana__icon"></div>
      </div>
    );

    piechartContainerEl = (
      <div class="med-semana__chart-container med-scrollbar">
        <med-piechart class="med-semana__chart" ds-color={dsColor} text="nef 01" value={25}></med-piechart>
        <med-piechart class="med-semana__chart" ds-color={dsColor} text="nef 01" value={75}></med-piechart>
      </div>
    );

    if (skin) {
      textContainerEl = (
        <div class="med-semana__heading-container">
          <div class="med-semana__text-container">
            <med-type class="med-semana__text" ds-color="neutral-10" token="p16b">Semana</med-type>
            <med-type class="med-semana__text med-semana__text--number" ds-color="neutral-10" token="p16b">01</med-type>

            <div class="med-semana__week-container">
              <med-type class="med-semana__auxiliar" ds-color="neutral-7" token="p14">De</med-type>
              <med-type class="med-semana__auxiliar" ds-color="neutral-7" token="p14">24/08</med-type>
              <med-type class="med-semana__auxiliar" ds-color="neutral-7" token="p14">até</med-type>
              <med-type class="med-semana__auxiliar" ds-color="neutral-7" token="p14">24/08</med-type>
            </div>
          </div>
        </div>
      );

      piechartContainerEl = (
        <div class="med-semana__chart-container med-scrollbar">
          <div class="med-semana__chart-row">
            <med-piechart class="med-semana__chart" ds-color={dsColor} text="nef 01" value={25}></med-piechart>
            <med-type class="med-semana__description" token="p14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum.
            </med-type>
            <med-type ds-color="neutral-10" token="p14">2h30</med-type>
            <med-download-button ds-color={dsColor}></med-download-button>
          </div>
          <div class="med-semana__chart-row">
            <med-piechart class="med-semana__chart" ds-color={dsColor} text="nef 01" value={75}></med-piechart>
            <med-type class="med-semana__description" token="p14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies tortor a pharetra rutrum.
            </med-type>
            <med-type ds-color="neutral-10" token="p14">2h30</med-type>
            <med-download-button ds-color={dsColor}></med-download-button>
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
