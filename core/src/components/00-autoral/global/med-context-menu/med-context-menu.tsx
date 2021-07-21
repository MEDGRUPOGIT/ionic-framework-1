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

 @Prop() show = false;

 @State() toggleState = false;

 @Method()
 async toggle() {
   if (this.show){
    this.show = !this.show;
   } else{
    this.show = !this.show;
   }
 }

 @Watch('show')
 toggleChanged() {
   this.onStateChange();
 }

 private onStateChange = (event?:Event) => {
  event?.stopPropagation();
  this.toggleState = !this.toggleState;
 }
  render() {
    const { color, neutral, toggleState } = this;

    return (
      <Host
        from-stencil
        class={createColorClasses(color, {
          'med-context-menu': true,
          'med-context-menu--show': toggleState
        }, neutral)}
      >
        <ion-button onClick={(event) => {this.onStateChange(event)}} class="med-context-menu__button" ds-name="icon-only">
          <ion-icon class="med-icon med-context-menu__icon" name="med-context-menu"></ion-icon>
        </ion-button>

        <div class="med-context-menu__content">
          <ion-button  onClick={(event) => {this.onStateChange(event)}} class="med-context-menu__inner-button" ds-name="icon-only">
            <ion-icon class="med-icon med-context-menu__inner-icon" name="med-context-menu"></ion-icon>
          </ion-button>

          <slot></slot>
        </div>

      </Host>
    );
  }

}
