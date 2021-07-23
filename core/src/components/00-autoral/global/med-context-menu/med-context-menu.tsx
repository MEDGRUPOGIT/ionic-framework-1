import { Component, Host, h, Prop, Method } from '@stencil/core';
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

  @Prop({ reflect: true, mutable: true }) collapsed = true;

  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  render() {
    const { color, neutral, collapsed } = this;

    return (
      <Host
        from-stencil
        class={createColorClasses(color, {
          'med-context-menu': true,
          'med-context-menu--collapsed': collapsed
        }, neutral)}
      >
        <ion-button onClick={(event) => {this.toggle(event)}} class="med-context-menu__button" ds-name="icon-only">
          <ion-icon class="med-icon med-context-menu__icon" name="med-context-menu"></ion-icon>
        </ion-button>

        <div class="med-context-menu__content">
          <ion-button  onClick={(event) => {this.toggle(event)}} class="med-context-menu__inner-button" ds-name="icon-only">
            <ion-icon class="med-icon med-context-menu__inner-icon" name="med-context-menu"></ion-icon>
          </ion-button>

          <slot></slot>
        </div>
      </Host>
    );
  }

}
