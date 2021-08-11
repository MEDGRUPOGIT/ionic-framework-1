import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-rating',
  styleUrl: 'med-rating.scss',
  shadow: true,
})
export class MedRating {

   /**
   * Define a variação do componente.
   */
  @Prop() dsName?: 'medgrupo' | 'banca';

  /**
    * Define o conteúdo de texto do componente.
    */
  @Prop() name?: string;
  @Prop() date?: string;
  @Prop() concurso?: string;
  @Prop() texto?: string;

  /**
  * Define o conteúdo de texto do componente.
  */
  @Prop() cabe = true;


    render() {
      //const { dsName, name, date, concurso, texto, cabe } = this;
      const { cabe } = this;

      return (
        <Host from-stencil
          class={createColorClasses(null, {
            'med-rating': true,
            'med-rating--cabe': cabe,
            'med-rating--nao-cabe': !cabe,
            //[`med-rating--${cabe}`]: dsName !== undefined,
          }, null)}>

            <div class="med-rating__left">
              <ion-icon name="med-negativo" class="med-icon med-rating__icon"></ion-icon>
            </div>

            <div class="med-rating__right">
              <span class="med-rating__name">Name</span> <span class="med-rating__date">Date</span>
              <p class="med-rating__concurso">UF-AREA</p>
              <span class="med-rating__text">Rating text</span>
            </div>

        </Host>
      );
    }

}
