import { Component, Event, EventEmitter, h, Host, Listen, Method, Prop} from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-tooltip',
  styleUrl: 'med-tooltip.scss',
  scoped: true,
})
export class MedTooltip {

  @Prop() enableHover?: boolean;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) placement?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * todo
   */
  @Prop({ reflect: true }) position?: 'start' | 'center' | 'end';

  /**
   * todo
   */
  @Prop({ reflect: true }) titulo?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) content?: string;

  /**
   * todo
   */
  @Prop() btnLeft?: string;

  /**
   * todo
   */
  @Prop() btnRight?: string;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  /**
   * todo
   */
  @Event() btnLeftClick!: EventEmitter<void>;

  /**
   * todo
   */
  @Event() btnRightClick!: EventEmitter<void>;

  /**
   * todo
   */
  @Method()
  async toggle(event?: any) {
    if(!this.enableHover) {
      event?.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }

  @Method()
  async toggleOnHover(event?: any) {
    if(this.enableHover) {
      event?.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }

  @Listen('click', { target: 'window' })
  handleClick(event?: any) {
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
        onMouseenter={(event: any) => {this.toggleOnHover(event)}}
        onMouseleave={(event: any) => {this.toggleOnHover(event)}}
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
            <ion-button mode="ios" icon-only class="med-tooltip__button-fechar" ds-color={!dsColor ? 'neutral-10' : dsColor} fill="clear" ds-size="xxs" onClick={(event: any) => {this.toggle(event)}}>
              <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
            </ion-button>
          </div>}

          {content && <med-type class="med-tooltip__text">{content}</med-type>}

          <slot name="content"></slot>

          {(btnLeft || btnRight) && <div class="med-tooltip__footer">
            {btnLeft && <ion-button mode="ios" class="med-tooltip__button" ds-color={!dsColor ? 'neutral-10' : dsColor} ds-size="xxs" fill="clear" onClick={this.onBtnLeftClick}> {btnLeft} </ion-button>}
            {btnRight && <ion-button mode="ios" class="med-tooltip__button" ds-color={!dsColor ? 'neutral-10' : dsColor} ds-size="xxs" fill="clear" onClick={this.onBtnRightClick}> {btnRight} </ion-button>}
          </div>}
        </div>
      </Host>
    );
  }

}
