import { Component, Host, h, Prop, Method, Watch, State } from '@stencil/core';
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

  @Prop({ reflect: true, mutable: true }) collapsed = false;

  @State() collapsedState = true;

  @Method()
  async toggle() {
    this.expandContent();
  }

  @Watch('collapsed')
  collapsedChanged() {
    this.expandContent();
  }

  private expandContent() {
    if (this.collapsedState) {
      this.collapsedState = !this.collapsedState;
    } else {
      this.collapsedState = !this.collapsedState;
    }
  }

  private onClick = (event: Event) => {
    console.log('med-context-menu', new Date().getTime());
    console.log('med-context-menu', event);

    event?.stopPropagation();
    this.expandContent();
  }

  render() {
    const { color, neutral, collapsedState: collapsed } = this;

    return (
      <Host
        from-stencil
        class={createColorClasses(color, {
          'med-context-menu': true,
          'med-context-menu--collapsed': collapsed
        }, neutral)}
      >
        <ion-button onClick={(event) => {this.onClick(event)}} class="med-context-menu__button" ds-name="icon-only">
          <ion-icon class="med-icon med-context-menu__icon" name="med-context-menu"></ion-icon>
        </ion-button>

        <div class="med-context-menu__content">
          <ion-button  onClick={(event) => {this.onClick(event)}} class="med-context-menu__inner-button" ds-name="icon-only">
            <ion-icon class="med-icon med-context-menu__inner-icon" name="med-context-menu"></ion-icon>
          </ion-button>

          <slot></slot>
        </div>
      </Host>
    );
  }

}
