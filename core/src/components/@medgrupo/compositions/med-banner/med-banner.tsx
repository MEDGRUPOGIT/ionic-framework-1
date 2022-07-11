import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-banner',
  styleUrl: 'med-banner.scss',
  scoped: true,
})
export class MedBanner {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define o título do componente.
    */
  @Prop() titulo?: string;

  /**
    * Define o texto do componente.
    */
  @Prop() texto?: string;

  /**
    * Define o texto do botão esquerdo, se existir.
    */
  @Prop() btnLeft!: string;

  /**
    * Define o texto do botão direito, se existir.
    */
  @Prop() btnRight!: string;

  /**
    * Define o icone, se existir.
    */
  @Prop() icon!: string;

  /**
    * Define a url da imagem, se existir.
    */
  @Prop() image!: string;

  /**
    * Emitido quando há um click no botão esquerdo.
    */
  @Event() btnLeftClick!: EventEmitter<void>;

  /**
    * Emitido quando há um click no botão direito.
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
