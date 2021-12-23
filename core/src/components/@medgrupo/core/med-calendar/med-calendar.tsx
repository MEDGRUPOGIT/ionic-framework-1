import { Component, Host, h, Element, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

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

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();

  createYear!: any;
  months!: any;
  days!: any;

  private monthAndYear!: any;
  private selectYear!: any;
  private selectMonth!: any;
  private calendarHead!: any;
  private calendarBody!: any;

  componentDidLoad() {
    this.createYear = this.generate_year_range(1970, 2050);
    this.selectYear.innerHTML = this.createYear;

    this.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    this.days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

    this.days.forEach((day:any) => {
      this.calendarHead.insertAdjacentHTML('afterbegin', `
        <div class="content__week-day">
          <med-type class="content__week-type" token="p12" ds-color="neutral-8" data-days="${day}">${day}</med-type>
        </div>
      `);
    });

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  private generate_year_range = (start: any, end: any) => {
    let years = '';

    for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
    }

    return years;
  }

  private next = () => {
    this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  private previous = () => {
    this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  private jump = () => {
    this.currentYear = parseInt(this.selectYear.value);
    this.currentMonth = parseInt(this.selectMonth.value);

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  private showCalendar = (month: any, year: any) => {
    const firstDay = ( new Date( year, month ) ).getDay();

    this.calendarBody.innerHTML = '';

    this.monthAndYear.innerHTML = this.months[month] + ' ' + year;
    this.selectYear.value = year;
    this.selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {

        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          this.calendarBody.insertAdjacentHTML('afterbegin', `
            <div data-date="${date}" data-month="${month + 1}" data-year="${year}" data-month-name="${this.months[month]}" class="date">
              <med-type tokeb="p12b" ds-color="neutral-10">${date}</med-type>
            </div>
          `);

          if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
            this.calendarBody.insertAdjacentHTML('afterbegin', `
              <div data-date="${date}" data-month="${month + 1}" data-year="${year}" data-month-name="${this.months[month]}" class="date date__active">
                <med-type tokeb="p12b" ds-color="neutral-10">${date}</med-type>
              </div>
            `);
          }

          date++;
        }
      }
    }
  }

  private daysInMonth = (iMonth: any, iYear: any) => {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {'med-badge': true })}>

          <div class="header">
            <div class="header__left">
              <ion-button ds-name="tertiary" onClick={() => this.previous()}>
                <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
              </ion-button>

              <med-type class="header__type" token="p16b" ref={(el) => this.monthAndYear = el as any}></med-type>

              <ion-button ds-name="tertiary" onClick={() => this.next()}>
                <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
              </ion-button>
            </div>
            <div class="header__right">
              <div></div>
              <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
            </div>
          </div>

          <div class="content">
            <div class="content__header" ref={(el) => this.calendarHead = el as any}></div>
            <div class="content__container" ref={(el) => this.calendarBody = el as any}></div>
          </div>

          <div class="footer">
            <label htmlFor="month">Jump To: </label>
            <select id="month" class="month" onChange={() => this.jump()} ref={(el) => this.selectMonth = el as any}>
              <option value="0">Jan</option>
              <option value="1">Feb</option>
              <option value="2">Mar</option>
              <option value="3">Apr</option>
              <option value="4">May</option>
              <option value="5">Jun</option>
              <option value="6">Jul</option>
              <option value="7">Aug</option>
              <option value="8">Sep</option>
              <option value="9">Oct</option>
              <option value="10">Nov</option>
              <option value="11">Dec</option>
            </select>
            <select id="year" class="year" onChange={() => this.jump()} ref={(el) => this.selectYear = el as any}></select>
          </div>

      </Host>
    );
  }

}
