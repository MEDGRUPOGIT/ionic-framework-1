import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { AnimationBuilder, MedColor, RouterDirection } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-nav-item',
  styleUrl: 'med-nav-item.scss',
  shadow: true,
})
export class MedNavItem {
  @Element() hostElement!: HTMLElement;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

   /**
     * TODO.
     */
  @Prop({ reflect: true, mutable: true }) active = false;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) text?: string;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) icon?: string;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) disabled = false;

  /**
    * TODO.
    */
  @Prop() routerDirection: RouterDirection = 'forward';

  /**
    * TODO.
    */
  @Prop() routerAnimation: AnimationBuilder | undefined;

  /**
    * TODO.
    */
   @Prop({ reflect: true }) iconOnly = false;

  /**
    * TODO.
    */
  @Event() medFocus!: EventEmitter<void>;

  /**
    * TODO.
    */
  @Event() medBlur!: EventEmitter<void>;

  /**
    * TODO.
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
