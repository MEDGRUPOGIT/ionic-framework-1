import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { Color } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

/**
  * @slot header - Define o conteúdo do header do componente.
  * @slot button - Se houver botões no componente eles devem ser inseridos nesse slot.
  * @slot content - Define o conteúdo do componente.
  * @slot auxiliar - Define o conteúdo auxiliar do componente.
  * @slot progress - Slot destinado a progress-bar.
  */
@Component({
  tag: 'med-accordion-item',
  styleUrl: 'med-accordion-item.scss',
  shadow: true,
})
export class MedAccordionItem implements ComponentInterface {
  @Element() hostElement!: any;

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: Color;

  /**
    * Define a posição do ícone de abertura do componente.
    */
  @Prop({ reflect: true }) icon?: 'left' | 'right';

  /**
    * Define a variação da borda do componente.
    */
  @Prop({ reflect: true }) noBorder = false;

  /**
    * Define se o componente irá ter background quando aberto.
    */
  @Prop({ reflect: true }) background = false;

  /**
   * Internal
   */
  @Event() toggle!: EventEmitter;

  @Event() opened!: EventEmitter;

  @State() isOpen = false;

  private content!: HTMLDivElement;

  private header!: HTMLDivElement;

  private isTransitioning = false;

  private onClick = () => {
    this.toggleOpen();
  }

  private toggleOpen() {
    if (this.isTransitioning) {
      return;
    }

    this.isOpen = !this.isOpen;
    this.opened.emit(this.isOpen);
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
        this.opened.emit(this.isOpen);
      },
    });
  }

  render() {
    const { dsColor, noBorder, isOpen, background } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-accordion-item': true,
          'med-accordion-item--no-border': noBorder,
          'med-accordion-item--open': isOpen,
          'med-accordion-item--background': background,
        })}>
        <div class="med-accordion-item__header" ref={(el) => this.header = el as HTMLDivElement}>

          <div class="med-accordion-item__header-container" onClick={() => this.onClick()}>
            <slot name="start"></slot>
            <slot name="middle"></slot>
            <slot name="end"></slot>
          </div>

          <div>
            <slot name="auxiliar"></slot>
          </div>
        </div>

        <div class="med-accordion-item__content" ref={(el) => this.content = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
