import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, State, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-accordion-item',
  styleUrl: 'med-accordion-item.scss',
  shadow: true,
})
export class MedAccordionItem implements ComponentInterface {
  @Element() hostElement!: any;

  @Prop({ reflect:true }) noBorder = false;

  @Prop({ reflect: true }) icon?: 'left' | 'right';

  @State() isOpen = false;

  @Event() toggle!: EventEmitter;

  public content!: HTMLDivElement;
  public header!: HTMLDivElement;

  private isTransitioning = false;

  private onClick = () => {
    this.toggleOpen();
  }

  private toggleOpen() {
    if (this.isTransitioning) {
      return;
    }

    this.isOpen = !this.isOpen;
    this.isTransitioning = true;

    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
      header: this.header,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
      },
    });
  }

  render() {
    const { noBorder, icon } = this;

    return (
      <Host from-stencil class={createColorClasses(null, {
        'med-accordion-item': true,
        'med-accordion-item--no-border': noBorder,
        }, null)}>
        <div class="med-accordion-item__header" ref={(el) => this.header = el as HTMLDivElement}>
          {icon === 'left' && <div class="med-accordion-item__icon-container med-accordion-item__icon-container--left" onClick={() => this.onClick()}>
             <ion-icon class="med-icon med-accordion-item__icon" name="med-baixo"></ion-icon>
          </div>}

          <div class="med-accordion-item__heading" onClick={() => this.onClick()}>
            <slot name="header"></slot>
          </div>

          {(!icon || icon === 'right') && <div class="med-accordion-item__icon-container med-accordion-item__icon-container--right" onClick={() => this.onClick()}>
            <ion-icon class="med-icon med-accordion-item__icon" name="med-baixo"></ion-icon>
          </div>}
        </div>
        <div class="med-accordion-item__content" ref={(el) => this.content = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
