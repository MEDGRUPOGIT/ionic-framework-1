import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-calendar-day',
  styleUrl: 'med-calendar-day.scss',
  shadow: true,
})
export class MedCalendarDay {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) active = false;

  render() {
    const { dsColor, active } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-calendar-day': true,
          'med-calendar-day--active': active
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
