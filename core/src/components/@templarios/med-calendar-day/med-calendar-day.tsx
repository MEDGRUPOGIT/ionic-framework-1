import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-calendar-day',
  styleUrl: 'med-calendar-day.scss',
  shadow: true,
})
export class MedCalendarDay {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) active = false;

  @Prop({ reflect: true }) fill?: 'outline';

  render() {
    const { dsColor, active, fill } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-calendar-day': true,
          'med-calendar-day--active': active,
          [`med-calendar-day--${fill}`]: fill !== undefined
        })}>
        <div class="date">
          <div class="date__container">
            <med-type class="date__type"><slot></slot></med-type>
          </div>
        </div>
      </Host>
    );
  }

}
