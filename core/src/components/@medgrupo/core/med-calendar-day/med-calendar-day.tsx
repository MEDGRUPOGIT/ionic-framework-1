import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-calendar-day',
  styleUrl: 'med-calendar-day.scss',
  shadow: true,
})
export class MedCalendarDay {

  @Event() medDayClick!: EventEmitter;

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) active = false;

  private onDayClick() {
    this.medDayClick.emit();
  }

  render() {
    const { dsColor, active } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-calendar-day': true,
          'med-calendar-day--active': active
        })}
        onClick={() => this.onDayClick()}
        >
        <div class="date">
          <div class="date__container">
            <med-type class="date__type"><slot></slot></med-type>
          </div>
        </div>
      </Host>
    );
  }

}
