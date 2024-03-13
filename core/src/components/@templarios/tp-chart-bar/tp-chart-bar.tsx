import { Component, Element, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';
import { TpChartBarItem } from '../../../@templarios/interfaces/chart-bar.interface';

@Component({
  tag: 'med-chart-bar-2',
  styleUrl: 'tp-chart-bar.scss',
  scoped: true,
})
export class MedChartBarTwo {
  @Element() host!: HTMLElement;

  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) dsName?: 'secondary';

  @Prop({ reflect: true }) label?: string;

  @Prop({ reflect: true }) labelSize = 10;

  @Prop({ reflect: true }) height = 200;

  @Prop({ reflect: true }) bar: TpChartBarItem = {
    color: 'med-color-brand-4',
    value: 0,
  };

  @Prop({ reflect: true }) hasMarker = false;

  @Prop({ reflect: true }) deactivated = false;

  @Prop({ reflect: true }) marker: TpChartBarItem = {
    color: 'med-color-fb-caution',
    value: 0,
  };

  render() {
    const { dsColor, dsName, label, labelSize, height, bar, hasMarker, deactivated, marker } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'tp-chart-bar': true,
          'tp-chart-bar--no-marker': !hasMarker,
          'tp-chart-bar--secondary': dsName === 'secondary',
          'tp-chart-bar--deactivated': deactivated,
        })}
        style={{
          '--label-size': `${labelSize}px`,
          '--height': `${height}px`,
          '--value-bar': `${bar.value}%`,
          '--value-marker': `${marker.value}%`,
        }}
      >
        <div class="tp-chart-bar__bar-container">
          <div class={{ 'tp-chart-bar__bar': true, [bar.color]: true }}></div>
          <div class={{ 'tp-chart-bar__marker': true, [marker.color]: true }}></div>
        </div>

        {label && (
          <ion-label class="tp-chart-bar__label" ds-color="neutral-95">
            {label}
          </ion-label>
        )}
      </Host>
    );
  }
}
