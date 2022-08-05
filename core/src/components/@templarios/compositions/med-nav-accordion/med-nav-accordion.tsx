import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-nav-accordion',
  styleUrl: 'med-nav-accordion.scss',
  shadow: true,
})
export class MedNavAccordion {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) titulo?: MedColor;

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-nav-accordion': true,
        })}>
        <med-accordion-list class="med-nav-accordion__list" single-open="false">

          <med-accordion-item class="med-nav-accordion__item" color="aula" background>
            <div class="med-nav-accordion__header" slot="full-header">
              <med-type token="p16b">{this.titulo}</med-type>
              <ion-icon class="med-icon med-nav-accordion__icon" name="med-baixo"></ion-icon>
            </div>

            <div slot="content">

              <slot></slot>

            </div>
          </med-accordion-item>

        </med-accordion-list>
      </Host>
    );
  }

}
