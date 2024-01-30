import { Component, h, Host, Method, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-agrupador',
  styleUrl: 'med-agrupador.scss',
  shadow: true,
})
export class MedAgrupador {

  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) labelDefault = 'Expandir a lista';

  @Prop({ reflect: true }) labelAlternativo = 'Ocultar a lista';

  @Prop({ reflect: true, mutable: true }) collapsed = false;

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

