import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, State, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-accordion-item',
  styleUrl: 'med-accordion-item.scss',
  shadow: true,
})
export class MedAccordionItem implements ComponentInterface {
  @Element() hostElement!: any;

  public content!: HTMLDivElement;

  private isTransitioning: boolean = false;

  @Prop() border?: 'full';

  @Prop({ reflect: true }) icon?: 'left' | 'right';

  @State() isOpen = false;

  @Event() toggle!: EventEmitter;

  componentDidLoad() {
    this.content = this.hostElement.shadowRoot.querySelector('.content');
  }

  @Listen('click')
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }

    this.isOpen = !this.isOpen;
    this.isTransitioning = true;

    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
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
    const {size, icon} = this;

    return (
      <Host from-stencil class={createColorClasses(null, {
        'med-accordion-item': true,
        }, null)}>
        <div class="header">
          {icon === 'left' && <div class="med-accordion__icon-container med-accordion__icon-container--left" onClick={() => this.onClick()}>
             <ion-icon class="med-icon med-accordion__icon" name="med-baixo"></ion-icon>
          </div>}

          <div class="med-accordion__heading" onClick={() => this.onClick()}>
            <slot name="header"></slot>
          </div>

          {(!icon || icon === 'right') && <div class="med-accordion__icon-container med-accordion__icon-container--right" onClick={() => this.onClick()}>
            <ion-icon class="med-icon med-accordion__icon" name="med-baixo"></ion-icon>
          </div>}
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
