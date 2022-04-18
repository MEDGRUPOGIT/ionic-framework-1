import { Component, Host, h, Prop, Method, Listen, Event, EventEmitter } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
import { MedColor } from '../../../../interface';

@Component({
  tag: 'med-tooltip',
  styleUrl: 'med-tooltip.scss',
  shadow: true,
})
export class MedTooltip {
  /**
    * TODO
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * TODO
    */
  @Prop({ reflect: true }) placement?: 'top' | 'bottom' | 'left' | 'right';

  /**
    * TODO
    */
  @Prop({ reflect: true }) position?: 'start' | 'center' | 'end';

  /**
    * TODO
    */
  @Prop({ reflect: true }) titulo?: string;

  /**
    * TODO
    */
  @Prop({ reflect: true }) content?: string;

  /**
    * Define o texto do botão esquerdo, se existir.
    */
  @Prop() btnLeft?: string;

  /**
    * Define o texto do botão direito, se existir.
    */
  @Prop() btnRight?: string;

  /**
    * TODO
    */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  /**
    * TODO
    */
  @Event() btnLeftClick!: EventEmitter<void>;

  /**
    * TODO
    */
  @Event() btnRightClick!: EventEmitter<void>;

  /**
    * Define o estado do componente programaticamente.
    */
  @Method()
  async toggle(event?: any) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  @Listen('click', { target: 'window' })
  handleClick(event?: any) {
    console.log(event);

    if(event?.target.localName !== 'med-tooltip' && this.titulo) {
      if (!this.collapsed) {
        this.toggle(event);
      }
    } else if (!this.titulo){
      if (!this.collapsed) {
        this.toggle(event);
      }
    }
  }

  private onBtnLeftClick = () => {
    this.btnLeftClick.emit();
  }

  private onBtnRightClick = () => {
    this.btnRightClick.emit();
  }

  render() {
    const { dsColor, placement, position, collapsed, titulo, content, btnLeft, btnRight } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-tooltip': true,
          [`med-tooltip--${placement}`]: placement !== undefined,
          [`med-tooltip--${position}`]: position !== undefined,
          'med-tooltip--collapsed': collapsed
        })}
      >
        <div class="med-tooltip__input-container" onClick={(event: any) => {this.toggle(event)}}>
          <slot name="input"></slot>
        </div>

        <div class="med-tooltip__content">
          {titulo && <div class="med-tooltip__header">
            <med-type class="med-tooltip__titulo">{titulo}</med-type>
            <ion-button class="med-tooltip__button-fechar" ds-color={!dsColor ? 'neutral-3' : dsColor} ds-name="tertiary" ds-size="xxs" onClick={(event: any) => {this.toggle(event)}}>
              <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
            </ion-button>
          </div>}

          {content && <med-type class="med-tooltip__text">{content}</med-type>}

          <slot name="content"></slot>

          {(btnLeft || btnRight) && <div class="med-tooltip__footer">
            {btnLeft && <ion-button class="med-tooltip__button" ds-color={!dsColor ? 'neutral-3' : dsColor} ds-size="xxs" ds-name="tertiary" onClick={this.onBtnLeftClick}> {btnLeft} </ion-button>}
            {btnRight && <ion-button class="med-tooltip__button" ds-color={!dsColor ? 'neutral-3' : dsColor} ds-size="xxs" ds-name="tertiary" onClick={this.onBtnRightClick}> {btnRight} </ion-button>}
          </div>}
        </div>
      </Host>
    );
  }

}
