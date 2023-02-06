import { Component, h, Host, Prop, Element, Watch } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-toggle',
  styleUrl: 'med-toggle.scss',
  shadow: true,
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

  componentDidLoad() {
    this.element = this.host.shadowRoot?.querySelector('.med-toggle__content')!;
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

  render() {
    const { collapsed, dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-toggle': true,
        'med-toggle--collapsed': collapsed
      })}
      onClick={() => {this.collapsed = !this.collapsed;}}>
        <div class="med-toggle__content">
          <slot></slot>
        </div>
        <ion-icon class="med-icon med-toggle__icon" name="med-cima"></ion-icon>
      </Host>
    );
  }
}
