import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-video-list-item',
  styleUrl: 'med-video-list-item.scss',
  scoped: true
})

export class MedVideoListItem {

  /**
  * Define a cor do componente.
  */
  @Prop({ reflect: true }) dsColor?: Color;

  render() {

    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-video-list-item': true,
      })}>
        <div class="med-video-list-item__text-container">
          <ion-icon class="med-icon med-video-list-item__icon" name="med-play"></ion-icon>
          <med-type class="med-video-list-item__title" token="p12x" ds-color="neutral-9" >Taquiarritmias</med-type>
          <med-type token="p12x" ds-color={dsColor}>00:42:25</med-type>
        </div>
        <ion-button class="med-video-list-item__avancar" ds-color={dsColor} ds-name="tertiary">
          <ion-icon class="med-icon" slot="icon-only" name="med-direita"></ion-icon>
        </ion-button>
      </Host>
    );
  }

}
