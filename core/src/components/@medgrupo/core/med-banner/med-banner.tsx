import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-banner',
  styleUrl: 'med-banner.scss',
  shadow: true,
})
export class MedBanner {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * Define a variação de tamanho do componente.
   */
  @Prop({ reflect: true }) dsSize?: 'sm' | 'md' = 'sm';

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
    * Emitido quando há um click no botão esquerdo.
    */
  @Event() btnLeftClick!: EventEmitter<void>;

  /**
    * Emitido quando há um click no botão direito.
    */
  @Event() btnRightClick!: EventEmitter<void>;

  private onBtnLeftClick = () => {
    this.btnLeftClick.emit();
  }

  private onBtnRightClick = () => {
    this.btnRightClick.emit();
  }

  render() {
    const { dsColor, dsSize, titulo, texto, btnLeft, btnRight } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-notification': true,
        [`med-notification--${dsSize}`]: dsSize !== undefined,
      })}>
        {(titulo || texto) && <div class="med-notification__content">
          <div class="med-notification__left">
            {titulo && <med-type class="med-notification__titulo" token={dsSize === 'md' ? 'h20' : 'p16b'}>{titulo}</med-type>}
            {texto && <med-type class="med-notification__texto" token={dsSize === 'md' ? 'p16x' : 'p14x'}>{texto}</med-type>}
          </div>
          <div class="med-notification__right">
            <slot name="imagem"></slot>
          </div>
        </div>}
        {(btnLeft || btnRight) && <div class="med-notification__footer">
          {btnLeft && <ion-button class="med-notification__button" ds-color={dsColor} ds-name="tertiary" ds-size={dsSize} onClick={this.onBtnLeftClick}> {btnLeft} </ion-button>}
          {btnRight && <ion-button class="med-notification__button" ds-color={dsColor} ds-name="tertiary" ds-size={dsSize} onClick={this.onBtnRightClick}> {btnRight} </ion-button>}
        </div>}
      </Host>
    );
  }

}
