import { Component, Host, h, Element, Prop, Event, EventEmitter, State } from '@stencil/core';
import { GestureConfig, Gesture, MedColor } from '../../../../interface';
import { createGesture } from '../../../../utils/gesture';
import { generateMedColor } from '../../../../utils/med-theme';

declare var ResizeObserver: any;

@Component({
  tag: 'med-calendar',
  styleUrl: 'med-calendar.scss',
  shadow: true,
})
export class MedCalendar {
  @Element() hostElement!: any;

  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop({ reflect: true }) mes?: string;

  @Prop({ reflect: true }) ano?: string;

  @State() choice = 'Semana';

  @State() width = 166;

  @Event() medClick!: EventEmitter;

  @Event() medSwipe!: EventEmitter;

  private gesture!: Gesture;

  private container!: HTMLElement;

  connectedCallback() {
    const resizeObserver = new ResizeObserver(() => {
      this.init();
    });

    resizeObserver.observe(document.body);
  }

  init() {
    const windowWidth = window.innerWidth;

    if(windowWidth < 1200) {
      this.width = windowWidth / 7;
    }
  }

  componentDidLoad() {
    let direction: string;

    const options: GestureConfig = {
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
        this.medSwipe.emit(direction);
      }
    };

    this.gesture = createGesture(options);
    this.gesture.enable();
  }

  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
    }
  }

  private onChoiceClick() {
    this.choice = this.choice === 'Semana' ? 'Mês' : 'Semana';
    this.medClick.emit(this.choice);
  }

  private onMonthClick(type: string) {
    this.medClick.emit(type);
  }

  private onGraficoClick() {
    this.medClick.emit('graph');
  }

  render() {
    const { dsColor, mes, ano } = this;

    return (
      <Host from-stencil
        class={generateMedColor(dsColor, {'med-calendar': true })}
        style={{ '--width': `${this.width}` }}>
        <div class="header">
          <div class="header__left">
            <ion-button ds-name="tertiary" onClick={() => this.onMonthClick('prev')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
            </ion-button>

            <med-type class="header__type" token="p16b">
              {mes} {ano}
            </med-type>

            <ion-button ds-name="tertiary" onClick={() => this.onMonthClick('next')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
            </ion-button>
          </div>

          <div class="header__right">
            <ion-button ds-name="tertiary" onClick={() => this.onChoiceClick()}>
              <med-type class="choice__type">{this.choice}</med-type>
              <ion-icon class="med-icon header__icon" name="med-baixo"></ion-icon>
            </ion-button>

            <ion-button ds-name="tertiary" onClick={() => this.onGraficoClick()}>
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
