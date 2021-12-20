import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-add-card',
  styleUrl: 'med-add-card.scss',
  shadow: true,
})
export class MedAddCard {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) titulo?: string;

  @Prop({ reflect: true }) iconName?: string;

  render() {
    const { dsColor, titulo, iconName } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-add-card': true,
      })}>
        <med-base class="med-add-card__container" spacing-h="s16" spacing-v="s12">
          <ion-icon class="med-icon med-add-card__icon" name={iconName}></ion-icon>
          <med-type token="p14">{titulo}</med-type>
        </med-base>
      </Host>
    );
  }

}
