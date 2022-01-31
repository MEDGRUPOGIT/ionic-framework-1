import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-nav',
  styleUrl: 'med-nav.scss',
  shadow: true,
})
export class MedNav {
  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, { 'med-nav': true })}>
         <nav class="med-nav__container">
          <div class="med-nav__logo">
            <div class="med-nav__icon-wrapper">
              <ion-icon class="med-nav__icon med-icon med-icon--sm" name="med-logo"></ion-icon>
            </div>
            <med-type token="h24" ds-color="neutral-10">MEDSoft</med-type>
          </div>

          <slot></slot>
        </nav>
        <ion-button class="med-nav__toggle" ds-name="tertiary">
          <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
        </ion-button>
      </Host>
    );
  }

}
