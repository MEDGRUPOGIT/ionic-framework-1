import { Component, h, Host, Listen, Method, Prop } from '@stencil/core';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-context-menu',
  styleUrl: 'med-context-menu.scss',
  scoped: true,
})
export class MedContextMenu {
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  @Listen('click', { target: 'window' })
  handleClick(event?: Event) {
    if (!this.collapsed) {
      this.toggle(event);
    }
  }

  render() {
    return (
      <Host
        from-stencil
        class={generateMedColor(null, {
          'med-context-menu': true,
          'med-context-menu--collapsed': this.collapsed
        })}
      >
        <ion-button mode="ios" icon-only onClick={(event) => {this.toggle(event)}} class="med-context-menu__button" fill="clear" ds-size="sm">
          <ion-icon slot="icon-only" class="med-icon med-context-menu__icon" name="med-context-menu"></ion-icon>
        </ion-button>

        <div class="med-context-menu__content">
          <ion-button mode="ios" icon-only onClick={(event) => {this.toggle(event)}} class="med-context-menu__inner-button" fill="clear" ds-size="sm">
            <ion-icon slot="icon-only" class="med-icon med-context-menu__inner-icon" name="med-context-menu"></ion-icon>
          </ion-button>

          <slot></slot>
        </div>
      </Host>
    );
  }

}
