import { Component, Host, h, Prop, Element } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

/**
 * @slot  Slot default.
 */
@Component({
  tag: 'med-chart-bar',
  styleUrl: 'med-chart-bar.scss',
  shadow: true,
})
export class MedChartBar {
  @Element() hostElement!: HTMLElement;

  private hostHeight = 0;
  private hostResizeObserver!: ResizeObserver;

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a valor do componente.
    */
  @Prop({ reflect: true }) value = 0;

  /**
    * Define o height em px do componente.
    */
  @Prop({ reflect: true }) height = 50;

  /**
    * Define o width em px do componente.
    */
  @Prop({ reflect: true }) width = 24;

  componentDidLoad() {
    this.setSize();
  }

  disconnectedCallback() {
    if(this.hostResizeObserver){
      this.hostResizeObserver.disconnect();
    }
  }

  private setSize() {
    this.hostResizeObserver = new ResizeObserver(() => {
      let newHostHeight = Number(this.hostElement?.getBoundingClientRect().height);

      if (newHostHeight !== this.hostHeight) {
        this.hostHeight = newHostHeight;
      }
    });

    this.hostResizeObserver.observe(this.hostElement);
  }

  render() {
    const { dsColor, value, height, width } = this;

    const percentage = value === 0 ? height : height - ((height * value) / 100);

    return (
      <Host
        class={generateMedColor(dsColor, {'med-chart-bar': true})}
        style={{ '--value': `${percentage}`, '--height': `${height}`, '--width': `${width}` }}
      >
        <div class="med-chart-bar__container">
          <div class="med-chart-bar__label">
            <slot></slot>
          </div>
          <div class="med-chart-bar__progress"></div>
        </div>
      </Host>
    );
  }

}
