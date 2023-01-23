import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-question',
  styleUrl: 'med-question.scss',
  shadow: true,
})
export class MedQuestion {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) collapsed = false;

  /**
   * todo
   */
  @Prop() texto?: string;

  /**
   * todo
   */
  toggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
    const { collapsed, texto, dsColor } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-question': true,
          'med-question--collapsed': collapsed
        },)}
        onClick={() => {this.toggle()}}>
          {texto && <div class="med-question__text" innerHTML={texto}></div>}
          <div class="med-question__text">
            <slot></slot>
          </div>
          <ion-icon class="med-icon med-question__icon" name="med-baixo"></ion-icon>
      </Host>
    );
  }

}
