import { Component, Host, h, Prop } from '@stencil/core';
import { Color, Neutral } from '../../../../interface';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-context-menu',
  styleUrl: 'med-context-menu.scss',
  shadow: true,
})
export class MedContextMenu {

  /**
   * Define a cor neutra do componente.
   */
 @Prop() neutral?: Neutral;

 /**
   * Define a cor do componente.
   */
 @Prop() color?: Color;

  render() {

    const { color, neutral } = this;

    return (
      <Host
        class={createColorClasses(color, {
        'med-context-menu': true,
        }, neutral)}
      >
        <ion-button class="med-context-menu__button" ds-name="icon-only">
          <ion-icon name="med-context-menu"></ion-icon>
        </ion-button>
        <div class="content">
          <ion-button class="content__button" ds-name="icon-only">
            <ion-icon name="med-context-menu"></ion-icon>
          </ion-button>
          <ul class="content__list">
            <li class="content__item">
              <ion-icon class="content__img" name="med-filtro"></ion-icon>
              <span>Ver filtro selecionado</span>
            </li>
            <li class="content__item">
              <ion-icon class="content__img" name="med-context-menu"></ion-icon>
              <span>Renomear Prova</span>
            </li>
            <li class="content__item">
              <ion-icon class="content__img" name="med-context-menu"></ion-icon>
              <span>Excluir Prova</span>
            </li>
          </ul>
          <p class="content__info">Criada em 30/12/2020</p>
        </div>
      </Host>
    );
  }

}
