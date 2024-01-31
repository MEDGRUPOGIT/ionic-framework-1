import { Component, h, Host, Method, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-list-item-accordion',
  styleUrl: 'med-list-item-accordion.scss',
  scoped: true,
})
export class MedListItemAccordion {
  @Prop() titulo?: string;

  @Prop() label?: string;

  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) selected = false;

  @Prop() dsSize?: 'xs' | 'sm' | 'md';

  @Prop() margin?: 'xs' | 'sm' | 'md' | 'lg';

  @Prop({ reflect: true }) border = false;

  @Prop({ reflect: true, mutable: true }) collapsed = true;

  @Prop({ reflect: true }) disabled = false;

  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  render() {
    const { dsColor, titulo, label, selected, dsSize, border, margin, collapsed, disabled } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-list-item-accordion': true,
          'med-list-item-accordion--disabled': disabled,
          'med-list-item-accordion--selected': selected,
          'med-list-item-accordion--border-radius': border,
          [`med-list-item-accordion--${dsSize}`]: dsSize !== undefined,
          [`med-list-item-accordion--${margin}`]: margin !== undefined,
          'med-list-item-accordion--collapsed': collapsed
        })}>
        <div class="med-list-item-accordion__item">
          <slot name="start"></slot>

          <div class="med-list-item-accordion__content">
            <h3 class="med-list-item-accordion__title">{titulo}</h3>
            <h4 class="med-list-item-accordion__label">{label}</h4>
          </div>

          <ion-button mode="ios" icon-only class="med-list-item-accordion__button" ds-color={dsColor} fill="clear" ds-size="xs" slot="left" onClick={(event: any) => {this.toggle(event)}}>
            <ion-icon slot="icon-only" class="med-icon" name="med-cima"></ion-icon>
          </ion-button>
        </div>

        <div class="med-list-item-accordion__sub-item">
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
