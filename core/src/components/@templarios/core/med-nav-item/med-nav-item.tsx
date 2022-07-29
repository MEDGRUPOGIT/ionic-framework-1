import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { AnimationBuilder, RouterDirection } from '../../../../interface';

@Component({
  tag: 'med-nav-item',
  styleUrl: 'med-nav-item.scss',
  shadow: true,
})
export class MedNavItem {
  @Element() hostElement!: HTMLElement;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) active = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) text?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) icon?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
  @Prop() routerDirection: RouterDirection = 'forward';

  /**
   * todo
   */
  @Prop() routerAnimation: AnimationBuilder | undefined;

  /**
   * todo
   */
   @Prop({ reflect: true }) iconOnly = false;

  /**
   * todo
   */
  @Event() medFocus!: EventEmitter<void>;

  /**
   * todo
   */
  @Event() medBlur!: EventEmitter<void>;

  /**
   * todo
   */
  @Event() medClick!: EventEmitter<void>;

  componentDidLoad() {
    if(this.hostElement.classList.contains('button')) {
      this.hostElement.classList.remove('button');
    }
  }

  private onFocus = () => {
    this.medBlur.emit();
  }

  private onBlur = () => {
    this.medClick.emit();
  }

  render() {
    const { dsColor, active, text, icon, disabled, iconOnly } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-nav-item': true,
        'med-nav-item--active': active,
        'med-nav-item--icon-only': iconOnly,
        'button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true,
        })}>
        <button
          type='button'
          class="med-nav-item__button"
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <ion-icon class="med-nav-item__icon med-icon" name={icon}></ion-icon>
          <med-type class="med-nav-item__text" token="p14">{text}</med-type>
        </button>

      </Host>
    );
  }

}
