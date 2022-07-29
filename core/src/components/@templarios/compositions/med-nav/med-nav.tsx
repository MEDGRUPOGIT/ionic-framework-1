import { Component, h, Host, Listen, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-nav',
  styleUrl: 'med-nav.scss',
  scoped: true,
})
export class MedNav {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) active = false;

  @Listen('close')
  async watchClick() {
    this.active = !this.active;
  }

  private clickHandle() {
    this.active = !this.active;
  }

  render() {
    const { dsColor, active } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-nav': true,
        'med-nav--active': active
      })}>

         <nav class="med-nav__container">
          <div class="med-nav__logo">
            <div class="med-nav__icon-wrapper">
              <ion-icon class="med-nav__icon med-icon med-icon--sm" name="med-logo"></ion-icon>
            </div>
            <med-type token="h24" ds-color="neutral-10">MEDSoft</med-type>
          </div>

          <slot></slot>

          <ion-button mode="ios" icon-only ds-color={dsColor} class="med-nav__toggle" fill="clear" onClick={() => this.clickHandle()}>
            <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
          </ion-button>
        </nav>

        <med-nav-simple ds-color={dsColor}></med-nav-simple>
      </Host>
    );
  }

}
