import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-nav-simple',
  styleUrl: 'med-nav-simple.scss',
  scoped: true,
})
export class MedNavSimple {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Event() close!: EventEmitter;

  private clickHandle() {
    this.close.emit();
  }

  render() {

    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-nav-simple': true,
      })}>

        <nav class="med-nav-simple__wrapper">
          <div class="med-nav-simple__logo">
            <div class="med-nav-simple__icon-wrapper">
              <ion-icon class="med-nav-simple__icon med-icon med-icon--sm" name="med-logo"></ion-icon>
            </div>
          </div>

          <slot></slot>

          <ion-button mode="ios" icon-only ds-color={dsColor} class="med-nav__toggle" fill="clear" onClick={() => this.clickHandle()}>
            <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
          </ion-button>
        </nav>

      </Host>
    );
  }

}
