import { Component, Host, h, Prop, Method, Element, State, Watch } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

/**
 * @slot header - Define o conteudo do header.
 * @slot button - Se houver algum botão deve ser colocado nesse slot.
 * @slot content-fake - Conteúdo que vai aparecer com reticiências.
 * @slot content - Conteúdo do componente.
 */
@Component({
  tag: 'med-accordion',
  styleUrl: 'med-accordion.scss',
  shadow: true,
})
export class MedAccordion {
  @Element() el!: HTMLElement;

  /**
   * Define a variação de estilo do componente.
   */
  @Prop() size?: 'full';

  /**
   * Define o posicionamento do icone do componente.
   */
  @Prop({ reflect: true }) icon?: 'left' | 'right';

  /**
   * Define o estado do componente.
   */
  @Prop({ reflect: true, mutable: true }) collapsed = true;

  @State() collapsedState = true;

  private contentEl!: HTMLDivElement;
  private contentFakeEl!: HTMLDivElement;
  private fakeHeight!: number;

  componentDidLoad() {
    this.contentEl.style.maxHeight = '0';
    this.fakeHeight = this.contentFakeEl.scrollHeight;
  }

  @Method()
  async toggle() {
    this.expandContent();
  }

  @Watch('collapsed')
  collapsedChanged() {
    this.expandContent();
  }

  private onClick = () => {
    this.expandContent();
  }

  private expandContent = async () => {
    if (this.collapsedState) {
      this.contentFakeEl.style.display = 'block';
      this.fakeHeight = this.contentFakeEl.scrollHeight;
      this.collapsedState = !this.collapsedState;
      this.contentEl.style.maxHeight = `${this.fakeHeight}px`;
      this.contentFakeEl.style.maxHeight = '0';
      this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
      this.contentEl.style.transition = 'max-height 0.2s ease-out';
    } else {
      this.contentFakeEl.style.display = 'none';
      this.contentFakeEl.style.maxHeight = `${this.fakeHeight}px`;
      this.contentEl.style.maxHeight = `${this.fakeHeight}px`;
      await this.sleep(200);
      this.contentEl.style.transition = 'unset';
      this.contentEl.style.maxHeight = '0px';
      this.contentFakeEl.style.display = 'block';
      this.collapsedState = !this.collapsedState;
    }
  }

  private sleep = async (timeout: number) => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, timeout);
    })
  }

  render() {
    const {size, icon, collapsedState} = this;

    return (
      <Host from-stencil class={createColorClasses(null, {
        'med-accordion': true,
        [`med-accordion--${size}`]: size !== undefined,
        'med-accordion--collapsed': collapsedState,
        }, null)}>
        <div class="med-accordion__header">
          {icon === 'left' && <div class="med-accordion__icon-container med-accordion__icon-container--left" onClick={() => this.onClick()}>
             <ion-icon class="med-icon med-accordion__icon" name="med-baixo"></ion-icon>
          </div>}

          <div class="med-accordion__heading" onClick={() => this.onClick()}>
            <slot name="header"></slot>
          </div>

          <slot name="button"></slot>

          {(!icon || icon === 'right') && <div class="med-accordion__icon-container med-accordion__icon-container--right" onClick={() => this.onClick()}>
            <ion-icon class="med-icon med-accordion__icon" name="med-baixo"></ion-icon>
          </div>}
        </div>

        <div class="med-accordion__content--fake" ref={(el) => this.contentFakeEl = el as HTMLDivElement}>
          <slot name="content-fake"></slot>
        </div>

        <div class="med-accordion__content" ref={(el) => this.contentEl = el as HTMLDivElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
