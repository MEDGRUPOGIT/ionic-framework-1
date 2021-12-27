import { Component, Host, h, Element, Prop, Event, EventEmitter, State } from '@stencil/core';
import { Gesture, MedColor } from '../../../../interface';
import { createGesture } from '../../../../utils/gesture';
import { generateMedColor } from '../../../../utils/med-theme';

export interface MedCalendar {
  date: number
  month: number
  year: number
  monthName: string
}

@Component({
  tag: 'med-calendar',
  styleUrl: 'med-calendar.scss',
  shadow: true,
})
export class MedCalendar {
  @Element() hostElement!: any;

  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) calendario?: string;

  @State() choice = 'Semana';

  @Event() medClick!: EventEmitter;

  @Event() medChoiceClick!: EventEmitter;

  @Event() medMonthClick!: EventEmitter;

  @Event() medSwipe!: EventEmitter;

  private container!: HTMLElement;

  componentDidLoad() {
    let direction: string;

    const swipeGesture: Gesture = createGesture({
      el: this.container,
      gestureName: 'swipe',
      onStart: () => {
      },
      onMove: (event) => {
        if (event.deltaX > 0) {
          direction = 'right';
        } else {
          direction = 'left';
        }
      },
      onEnd: () => {
        console.log(direction);

        this.medSwipe.emit(direction);
      }
    });

    swipeGesture.enable();
  }

  private onChoiceClick() {
    this.choice = this.choice === 'Semana' ? 'Mês' : 'Semana';
    this.medClick.emit(this.choice);
  }

  private onMonthClick(type: string) {
    this.medClick.emit(type);
  }

  render() {
    const { dsColor, calendario } = this;

    return (
      <Host class={generateMedColor(dsColor, {'med-calendar': true })}>

        <div class="header">
          <div class="header__left">
            <ion-button ds-name="tertiary" onClick={() => this.onMonthClick('prev')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
            </ion-button>

            <med-type class="header__type" token="p16b">
              {calendario}
            </med-type>

            <ion-button ds-name="tertiary" onClick={() => this.onMonthClick('next')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
            </ion-button>
          </div>

          <div class="header__right">
            <ion-button ds-name="tertiary" onClick={() => this.onChoiceClick()}>
              <med-type class="choice__type">{this.choice}</med-type>
              <ion-icon class="med-icon header__icon" name="med-grafico"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="content">
          <div class="content__header">
            <div class="content__week-day">
              <med-type class="content__week-type">Seg</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Ter</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Qua</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Qui</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Sex</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Sab</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Dom</med-type>
            </div>

          </div>
          <div class="content__container" ref={(el) => { this.container = el as any }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
