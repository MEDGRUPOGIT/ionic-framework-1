import { Component, ComponentInterface, h, Host, Element, Event, EventEmitter, State, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true,
})
export class AccordionItem implements ComponentInterface {
  @Element() hostElement!: HTMLElement;

  /**
    * Define se o componente irá ter background quando aberto.
    */
  @Prop({ reflect: true }) background = false;

  /**
    * Desabilita o componente.
    */
  @Prop({ reflect: true }) disable = false;

  /**
    * Abre programaticamente o componente.
    */
  @Prop({ reflect: true }) open = false;

  /**
    * Desabilita o componente.
    */
  @Prop({ reflect: true }) headerToggle = true;

  @State() isOpen: boolean = false;

  /**
   * Internal
   */
  @Event() toggle!: EventEmitter;

  @Watch('open')
  watchPropHandler(newValue: boolean) {
    if (newValue !== this.isOpen) { }
    this.toggleOpen();
  }

  componentDidLoad() {
    if (this.open) {
      this.toggleOpen();
    }
  }

  public contentElement!: HTMLDivElement;

  private itemId = `accordion-item-${itemId++}`;
  private isTransitioning: boolean = false;

  private onClick = () => {
    if (this.disable) return;

    if (this.headerToggle) {
      this.toggleOpen();
    }
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
    const { itemId, isOpen, background } = this;

    return (
      <Host id={itemId}
        from-stencil
        class={{
          'accordion-item': true,
          'accordion-item--background': background,
          'accordion-item--open': isOpen,
        }}
      >
        <div class="accordion-item__header" onClick={() => this.onClick()}>
          <slot name="header"></slot>
        </div>
        <div class="accordion-item__content" ref={(el) => this.contentElement = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }
}

let itemId = 0;
