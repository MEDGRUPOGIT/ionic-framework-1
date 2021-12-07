import { Component, ComponentInterface, h, Host, Element, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true,
})
export class AccordionItem implements ComponentInterface {
  @Element() hostElement!: HTMLElement;

  @State() isOpen: boolean = false;

  /**
   * Internal
   */
  @Event() toggle!: EventEmitter;

  public contentElement!: HTMLDivElement;

  private itemId = `accordion-item-${itemId++}`;
  private isTransitioning: boolean = false;

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
      elementId: this.itemId,
      content: this.contentElement,
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
    const { itemId } = this;

    return (
      <Host id={itemId}>
        <div class="header" onClick={() => this.onClick()}>
          <slot name="header"></slot>
        </div>
        <div class="content" ref={(el) => this.contentElement = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }
}

let itemId = 0;
