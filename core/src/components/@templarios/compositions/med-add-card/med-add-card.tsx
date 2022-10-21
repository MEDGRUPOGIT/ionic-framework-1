import { Component, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-add-card',
  styleUrl: 'med-add-card.scss',
  scoped: true,
})
export class MedAddCard {

  /**
   * todo
   */
  @Prop({ reflect: true }) titulo?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) iconName?: string;

  render() {
    const { titulo, iconName } = this;

    return (
      <Host class={generateMedColor(null, {
        'med-add-card': true,
      })}>
        <med-base class="med-add-card__container" spacing-h="s16" spacing-v="s16">
          <ion-icon class="med-icon med-add-card__icon" name={iconName}></ion-icon>
          <med-type token="p16x">{titulo}</med-type>
        </med-base>
      </Host>
    );
  }

}
