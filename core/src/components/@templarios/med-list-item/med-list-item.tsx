import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-list-item',
  styleUrl: 'med-list-item.scss',
  shadow: true,
})
export class MedListItem {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop() titulo?: string;

  @Prop() label?: string;

  @Prop({ reflect:true }) selected = false;

  @Prop() dsSize?: 'xs' | 'sm' | 'md';

  @Prop({ reflect:true }) border = false;

  @Prop({ reflect: true }) disabled = false;

  render() {
    const { dsColor, titulo, label, selected, dsSize, border, disabled } = this;
    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-list-item': true,
          'med-list-item--selected': selected,
          'med-list-item--disabled': disabled,
          'med-list-item--border-radius': border,
          [`med-list-item--${dsSize}`]: dsSize !== undefined,
        })}>
        <slot name="start"></slot>
        <div class="med-list-item__content">
          <h3 class="med-list-item__title" innerHTML={titulo}></h3>
          <h4 class="med-list-item__label" innerHTML={label}></h4>
        </div>
        <slot name="end"></slot>
      </Host>
    );
  }

}
