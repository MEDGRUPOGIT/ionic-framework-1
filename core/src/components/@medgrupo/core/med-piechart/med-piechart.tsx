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
    * Define o estado do componente.
    */
  @Prop({ reflect: true }) active = false;

  /**
    * Define o value do componente.
    */
  @Prop({ reflect: true }) value = 0;

  /**
    * Define o texto do componente.
    */
  @Prop({ reflect: true }) text?: string;

  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.active = !this.active;
  }

  render() {
    const { dsColor, active, text, value } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--active': active,
        })}>
         <div class="med-piechart__container">
          <div class="med-piechart__side med-piechart__side--front">
            <med-type class="med-piechart__text" token="p12b">{text}</med-type>
            <svg viewBox="0 0 36 36" style={{'--porcentagem': `${value}`}}>
              <circle class="med-piechart__circle" cx="18" cy="18" r="16"/>
              <circle cx="18" cy="18" r="16" class="med-piechart__circle med-piechart__circle--porcentagem"/>
            </svg>
          </div>
          <div class="med-piechart__side med-piechart__side--back">
            <med-type class="med-piechart__text" token="p12b">{text}</med-type>
          </div>
        </div>
      </Host>
    );
  }

}
