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
        from-stencil
        class={createColorClasses(color, {
          'med-context-menu': true,
        }, neutral)}
      >
        <ion-button class="med-context-menu__button" ds-name="icon-only">
          <ion-icon name="med-context-menu"></ion-icon>
        </ion-button>

        <div class="med-context-menu__content">
          <ion-button class="med-context-menu__inner-button" ds-name="icon-only">
            <ion-icon name="med-context-menu"></ion-icon>
          </ion-button>

          <ul class="med-context-menu__list">
            <li class="med-context-menu__item">
              <ion-icon class="med-context-menu__icon" name="med-filtro"></ion-icon>
              <span>Ver filtro selecionado</span>
            </li>
            <li class="med-context-menu__item">
              <ion-icon class="med-context-menu__icon" name="med-context-menu"></ion-icon>
              <span>Renomear Prova</span>
            </li>
            <li class="med-context-menu__item">
              <ion-icon class="med-context-menu__icon" name="med-context-menu"></ion-icon>
              <span>Excluir Prova</span>
            </li>
          </ul>
          <p class="med-context-menu__info">Criada em 30/12/2020</p>
        </div>

      </Host>
    );
  }

}
