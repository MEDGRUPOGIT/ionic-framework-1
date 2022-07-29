import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-banner',
  styleUrl: 'med-banner.scss',
  scoped: true,
})
export class MedBanner {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() titulo?: string;

  /**
   * todo
   */
  @Prop() texto?: string;

  /**
   * todo
   */
  @Prop() btnLeft!: string;

  /**
   * todo
   */
  @Prop() btnRight!: string;

  /**
   * todo
   */
  @Prop() icon!: string;

  /**
   * todo
   */
  @Prop() image!: string;

  /**
   * todo
   */
  @Event() btnLeftClick!: EventEmitter<void>;

  /**
   * todo
   */
  @Event() btnRightClick!: EventEmitter<void>;

  private onButtonLeftClick = () => {
    this.btnLeftClick.emit();
  }

  private onButtonRightClick = () => {
    this.btnRightClick.emit();
  }

  render() {
    const { dsColor, titulo, texto, btnLeft, btnRight, icon, image } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-notification': true,
      })}>
        {(titulo || texto) && <div class="med-notification__content">
          <div class="med-notification__left">
            <div class="med-notification__header">
              {titulo && <med-type class="med-notification__titulo"> {titulo} </med-type>}
              {icon && <ion-icon class="med-notification__icon med-icon" name={icon}></ion-icon>}
            </div>
            {texto && <med-type class="med-notification__texto"> {texto} </med-type>}
          </div>
          {image && <div class="med-notification__right">
             <img class="med-notification__image" src={image}></img>
          </div>}
        </div>}
        {(btnLeft || btnRight) && <div class="med-notification__footer">
          {btnLeft && <ion-button class="med-notification__button" mode="ios" ds-color={dsColor} fill="clear" ds-size="xs" onClick={this.onButtonLeftClick}> {btnLeft} </ion-button>}
          {btnRight && <ion-button class="med-notification__button" mode="ios" ds-color={dsColor} fill="clear" ds-size="xs" onClick={this.onButtonRightClick}> {btnRight} </ion-button>}
        </div>}
      </Host>
    );
  }

}
