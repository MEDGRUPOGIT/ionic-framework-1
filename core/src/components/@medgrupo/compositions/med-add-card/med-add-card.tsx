import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-add-card',
  styleUrl: 'med-add-card.scss',
  shadow: true,
})
export class MedAddCard {
  /**
    * Define o titulo.
    */
  @Prop({ reflect: true }) titulo?: string;

  /**
    * Define o icone.
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
