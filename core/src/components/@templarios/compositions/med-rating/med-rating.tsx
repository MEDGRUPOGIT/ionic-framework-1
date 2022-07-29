import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-rating',
  styleUrl: 'med-rating.scss',
  shadow: true,
})
export class MedRating {

  /**
   * todo
   */
 @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsName?: 'medgrupo' | 'banca';

  /**
   * todo
   */
  @Prop() nome?: string;

  /**
   * todo
   */
  @Prop() data?: string;

  /**
   * todo
   */
  @Prop() concurso?: string;

  /**
   * todo
   */
  @Prop() texto?: string;

  /**
   * todo
   */
  @Prop() cabe = false;

  render() {
    const { dsColor, dsName, nome, data, concurso, texto, cabe } = this;

    return (
      <Host from-stencil
        class={generateMedColor(dsColor, {
          'med-rating': true,
          'med-rating--cabe': cabe,
          'med-rating--nao-cabe': !cabe,
          [`med-rating--${dsName}`]: dsName !== undefined,
        })}>
        <div class="med-rating__left">
          <ion-icon name={cabe ? "med-positivo" : "med-negativo"} class="med-icon med-rating__icon"></ion-icon>
        </div>

        <div class="med-rating__right">
          <med-type class="med-rating__name">{nome}</med-type> <med-type class="med-rating__date">{data}</med-type>
          <med-type class="med-rating__concurso">{concurso}</med-type>
          <med-type class="med-rating__text">{texto}</med-type>
          {(dsName === 'medgrupo') && <ion-icon name="med-logo" class="med-icon med-rating__icon-medgrupo"></ion-icon>}
          {(dsName === 'banca' && cabe) && <med-type class="med-rating__banca">RECURSO CONCEDIDO</med-type>}
          {(dsName === 'banca' && !cabe) && <med-type class="med-rating__banca">RECURSO NÃO CONCEDIDO</med-type>}
        </div>
      </Host>
    );
  }
}
