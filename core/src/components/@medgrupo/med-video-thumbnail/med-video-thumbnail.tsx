import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../interface';
import { generateMedColor } from '../../../utils/med-theme';

@Component({
  tag: 'med-video-thumbnail',
  styleUrl: 'med-video-thumbnail.scss',
  shadow: true,
})
export class MedVideoThumbnail {

  /**
    * TODO
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * TODO
    */
  @Prop({ reflect: true }) url?: string;

  /**
    * TODO
    */
  @Prop({ reflect: true }) value = 0;

  render() {
    const {url, value, dsColor} = this;

    return (
      <Host
         class={generateMedColor(dsColor, {
        'med-video-thumbnail': true,
      })}>
        <img class="med-video-thumbnail__img" src={url}/>
        <ion-icon class="med-icon med-icon--lg med-video-thumbnail__icon" name="med-play"></ion-icon>
        <ion-progress-bar ds-color={dsColor} class="med-video-thumbnail__progress" ds-name="minimalist" value={value}></ion-progress-bar>
      </Host>
    );
  }
}
