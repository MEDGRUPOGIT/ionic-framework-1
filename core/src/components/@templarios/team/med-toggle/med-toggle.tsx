import { Component, h, Host, Prop, Element, Watch } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-toggle',
  styleUrl: 'med-toggle.scss',
  scoped: true,
})
export class MedToggle {
  @Element() host!: HTMLElement;
  element?: HTMLElement;

  /**
  * todo
  */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
  * todo
  */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  /**
  * todo
  */
  @Prop({ reflect: true, mutable: true }) iconClick = false;

  componentDidLoad() {
    (this.element as HTMLElement) = this.host.querySelector('.med-toggle__content')!;
  }

  setHeight() {
    const elementHeight = this.element?.scrollHeight;
    (this.element as HTMLElement).style.maxHeight = `${elementHeight}px`;
  }

  open() {
    this.setHeight();
    setTimeout(() => {
      (this.element as HTMLElement).style.maxHeight = '100%';
    }, 300);
  }

  close() {
    this.setHeight();
    setTimeout(() => {
      (this.element as HTMLElement).style.maxHeight = 'var(--initial-max-height)';
    }, 350);
  }

  @Watch('collapsed')
  toggle() {
    if (!this.collapsed) {
      this.open();
    } else {
      this.close();
    }
  }

  onClickComponent() {
    if (!this.iconClick) {
      this.collapsed = !this.collapsed;
    }
  }

  onClickIcon() {
    if (this.iconClick) {
      this.collapsed = !this.collapsed;
    }
  }

  render() {
    const { collapsed, dsColor, iconClick } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-toggle': true,
        'med-toggle--collapsed': collapsed,
        'med-toggle--icon-click': iconClick
      })}
      onClick={() => {this.onClickComponent()}}>
        <div class="med-toggle__content">
          <slot></slot>
        </div>
        <div class="med-toggle__bottom" onClick={() => {this.onClickIcon()}}>
          <ion-icon class="med-icon med-toggle__icon" name="med-cima"></ion-icon>
        </div>
      </Host>
    );
  }
}
