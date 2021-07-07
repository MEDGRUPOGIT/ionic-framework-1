import { Component, Host, h, Prop, State, Method } from '@stencil/core';
import { Color } from '../../../../interface';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-accordion',
  styleUrl: 'med-accordion.scss',
  shadow: true,
})
export class MedAccordion {

  @Prop() color?: Color;
  @Prop() size?: 'full';
  @State() toggleState = false;

  private contentEl!: HTMLDivElement;

  @Method()
  async toggle() {
    this.toggleContent();
    this.toggleState = this.toggleState ? !this.toggleState : !this.toggleState;
  }

  onClick = () => {
    this.toggleContent();
    this.toggleState = this.toggleState ? !this.toggleState : !this.toggleState;
  }

  private toggleContent = () => {
    if (this.toggleState) {
      this.contentEl.style.maxHeight = '0';
    } else {
      this.contentEl.style.maxHeight = this.contentEl.scrollHeight + "px";
    }
  }

  render() {
    const {color, size} = this;
    return (
      <Host from-stencil class={createColorClasses(color, {'med-accordion--full': size !== undefined, 'med-accordion--toggle': this.toggleState})}>
        <div class="med-accordion__header" onClick={this.onClick}>
          <slot name="header"></slot>
          <ion-icon class="med-accordion__icon" name="med-arrow-down"></ion-icon>
        </div>
        <div class="med-accordion__content" ref={(el) => this.contentEl = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>

      </Host>
    );
  }

}
