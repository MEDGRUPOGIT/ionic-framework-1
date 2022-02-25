import { Component, Host, h, Prop, Method } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-agrupador',
  styleUrl: 'med-agrupador.scss',
  shadow: true,
})
export class MedAgrupador {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define o texto no estado default.
    */
  @Prop({ reflect: true }) labelDefault = 'Expandir a lista';

  /**
    * Define o texto no estado active.
    */
  @Prop({ reflect: true }) labelAlternativo = 'Ocultar a lista';

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) collapsed = false;

  /**
    * Define o estado do componente programaticamente.
    */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  render() {
    const { dsColor, collapsed, labelDefault, labelAlternativo } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-agrupador': true,
          'med-agrupador--collapsed': collapsed
        })}
        onClick={(event: any) => { this.toggle(event) }}>
        <div class="med-agrupador__expandir">{labelDefault}</div>
        <div class="med-agrupador__ocultar">{labelAlternativo}</div>
        <ion-icon class="med-icon med-agrupador__icon" name="med-baixo"></ion-icon>
      </Host>
    );
  }

}

