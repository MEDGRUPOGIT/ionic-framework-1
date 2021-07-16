import { Component, Host, h, Element, Event, EventEmitter, Prop } from '@stencil/core';
import ResizeObserver from "resize-observer-polyfill";
import { navbarResizeEventDetail } from './med-navbar-interface';
import { Color, Neutral } from '../../../../interface';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-navbar',
  styleUrl: 'med-navbar.scss',
  shadow: true,
})
export class MedNavbar {
  @Element() el!: HTMLElement;

  @Prop() color?: Color;
  @Prop() neutral?: Neutral;

  @Prop() dsName?: 'solid' | 'secondary' | 'transparent';

  @Event() medResize!: EventEmitter<navbarResizeEventDetail>;

  private leftEl!: HTMLDivElement;
  private rightEl!: HTMLDivElement;
  private centerEl!: HTMLDivElement;

  private sidesResizeObserver!: ResizeObserver;

  componentDidLoad() {
    this.setSize();
  }

  disconnectedCallback() {
    this.sidesResizeObserver.disconnect();
  }

  private setSize() {
    this.sidesResizeObserver = new ResizeObserver((entries: any) => {
      for (let entry of entries) {
        const rightWidth = Number(this.rightEl.getBoundingClientRect().width);
        const leftWidth = Number(this.leftEl.getBoundingClientRect().width);
        const leftDiff = entry.contentRect.width - rightWidth;
        const rightDiff = entry.contentRect.width - leftWidth;

        let marginLeft = 0;
        let marginRight = 0;

        if (rightWidth !== leftWidth) {
          if (entry.target.id === 'left') {
            if (leftDiff > 0) {
              marginRight = leftDiff;
            } else {
              marginLeft = rightDiff - leftDiff;
              if (marginLeft < 0) {
                marginLeft *= -1;
              }
            }
          } else if (entry.target.id === 'right') {
            if (rightDiff > 0) {
              marginLeft = rightDiff;
            } else {
              marginRight = rightDiff - leftDiff;
              if (marginRight < 0) {
                marginRight *= -1;
              }
            }
          }
        }

        this.centerEl.style.setProperty('--padding-left',`${marginLeft}px`);
        this.centerEl.style.setProperty('--padding-right',`${marginRight}px`);
      }
    });

    this.sidesResizeObserver.observe(this.leftEl);
    this.sidesResizeObserver.observe(this.rightEl);
  }

  render() {
    const { color, neutral, dsName } = this;

    return (
      <Host from-stencil class={createColorClasses(color, {
        'med-navbar': true,
        'med-navbar--solid': dsName === 'solid',
        'med-navbar--secondary': dsName === 'secondary',
        'med-navbar--transparent': dsName === 'transparent'
        }, neutral)}>
        <header class="med-navbar__header">
          <slot name="top"></slot>

          <div class="med-navbar__container">
            <div id="left" class="med-navbar__left" ref={(el) => this.leftEl = el as HTMLDivElement}>

              <slot name="left"></slot>

            </div>

            <div class="med-navbar__center" ref={(el) => this.centerEl = el as HTMLDivElement}>

              <slot name="title"></slot>
              <slot name="subtitle"></slot>

            </div>

            <div id="right" class="med-navbar__right" ref={(el) => this.rightEl = el as HTMLDivElement}>

              <slot name="right"></slot>

            </div>
          </div>
        </header>
      </Host>
    );
  }
}
