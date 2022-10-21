import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-video-thumbnail',
  styleUrl: 'med-video-thumbnail.scss',
  scoped: true,
})
export class MedVideoThumbnail {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) url?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) value = 0;

  render() {
    const {dsColor, url, value} = this;

    return (
      <Host
         class={generateMedColor(dsColor, {
          'med-video-thumbnail': true
        })}>
        <img class="med-video-thumbnail__img" src={url}/>
        <ion-icon class="med-icon med-icon--lg med-video-thumbnail__icon" name="med-play"></ion-icon>
        <ion-progress-bar ds-color={dsColor} class="med-video-thumbnail__progress" ds-name="minimalist" value={value}></ion-progress-bar>
      </Host>
    );
  }
}
