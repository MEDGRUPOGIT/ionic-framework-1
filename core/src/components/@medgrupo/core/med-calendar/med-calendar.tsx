import { Component, Host, h, Element, Prop, Event, EventEmitter, State } from '@stencil/core';
import { MedColor } from '../../../../interface';
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

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) calendario?: string;

  @State() choice = 'Semana';

  @Event() medChoiceClick!: EventEmitter;

  @Event() medMonthClick!: EventEmitter;

  private onChoiceClick() {
    this.choice = this.choice === 'Semana' ? 'Mês' : 'Semana';
    console.log(this.choice);
    this.medChoiceClick.emit(this.choice);
  }

  private onMonthClick(type: string) {
    console.log(type);
    this.medMonthClick.emit(type);
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
              <ion-icon slot="end" class="med-icon header__button-icon" name="med-baixo"></ion-icon>
            </ion-button>
            <ion-icon class="med-icon header__icon" name="med-grafico"></ion-icon>
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
          <div class="content__container">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
