import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-titulo-materia',
  styleUrl: 'med-titulo-materia.scss',
  shadow: true,
})
export class MedTituloMateria {

  /**
    * Define o titulo do item.
    */
  @Prop() titulo?: string;

  /**
    * Define o descricao do item.
    */
   @Prop() descricao?: string;

  render() {

    const { titulo, descricao } = this;

    return (
      <Host from-stencil
        class={createColorClasses(null, {
          'med-titulo-materia': true,
        }, null)}>
        <slot name="start"></slot>
        <div class="med-titulo-materia__content">
          <h3 class="med-titulo-materia__titulo">{titulo}</h3>
          <p class="med-titulo-materia__descricao">{descricao}</p>
        </div>
        <slot name="end"></slot>
      </Host>
    );
  }

}
