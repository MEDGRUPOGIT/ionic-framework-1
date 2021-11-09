import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

/**
  * @slot imagem - Posiciona um elemento imagem ou icone a esquerda do banner.
  * @slot content - Define o conetudo de texto do banner.
  */
@Component({
  tag: 'med-banner',
  styleUrl: 'med-banner.scss',
  shadow: true,
})
export class MedBanner {
  /**
   * Define o título do banner.
   */
  @Prop() header!: string;

  /**
   * Define o texto do botão esquerdo, se existir.
   */
  @Prop() btnLeft!: string;

  /**
   * Define o texto do botão direito.
   */
  @Prop() btnRight!: string;

  /**
   * Define o texto texto do botão direito, se existir.
   */
  @Event() btnLeftClick!: EventEmitter<void>;

  /**
   * Emitido quando é feito um click no botão direito.
   */
  @Event() btnRightClick!: EventEmitter<void>;

  private onBtnLeftClick = () => {
    this.btnLeftClick.emit();
  }

  private onBtnRightClick = () => {
    this.btnRightClick.emit();
  }

  render() {
    const { header, btnLeft, btnRight } = this;

    return (
      <Host from-stencil>
        <div class="content">
          <div class="content__top">
            <div class="content__left">
              <slot name="imagem"></slot>
            </div>
            <div class="content__right">
              <h4 class="header">{header}</h4>
              <slot name="content"></slot>
            </div>
          </div>
          <div class="content__bottom">
            {btnLeft && <button class="button button--left" onClick={this.onBtnLeftClick}> {btnLeft} </button>}
            {btnRight && <button class="button button--right" onClick={this.onBtnRightClick}> {btnRight} </button>}
          </div>
        </div>
      </Host>
    );
  }
}
