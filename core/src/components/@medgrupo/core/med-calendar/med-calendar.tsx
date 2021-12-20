import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-calendar',
  styleUrl: 'med-calendar.scss',
  shadow: true,
})
export class MedCalendar {
  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {'med-calendar': true})}>
        <div class="week">
          <div class="week__day">Seg</div>
          <div class="week__day">Ter</div>
          <div class="week__day">Qua</div>
          <div class="week__day">Qui</div>
          <div class="week__day">Sex</div>
          <div class="week__day">Sab</div>
        </div>
        <div class="body">
          <ion-slides>
            <ion-slide>
              <div class="month__grid">
                <button class="week__day">1</button>
                <button class="week__day">2</button>
                <button class="week__day">3</button>
                <button class="week__day">4</button>
                <button class="week__day">5</button>
                <button class="week__day">6</button>
                <button class="week__day">7</button>
                <button class="week__day">8</button>
                <button class="week__day">9</button>
                <button class="week__day">10</button>
                <button class="week__day">11</button>
                <button class="week__day">12</button>
                <button class="week__day">13</button>
                <button class="week__day">14</button>
                <button class="week__day">15</button>
                <button class="week__day">16</button>
                <button class="week__day">17</button>
                <button class="week__day">18</button>
                <button class="week__day">19</button>
                <button class="week__day">20</button>
                <button class="week__day">21</button>
                <button class="week__day">22</button>
                <button class="week__day">23</button>
                <button class="week__day">24</button>
                <button class="week__day">25</button>
                <button class="week__day">26</button>
                <button class="week__day">27</button>
                <button class="week__day">28</button>
                <button class="week__day">29</button>
                <button class="week__day">30</button>
                <button class="week__day">31</button>
              </div>
            </ion-slide>
            <ion-slide>
              <div class="month__grid">
                <button class="week__day">1</button>
                <button class="week__day">2</button>
                <button class="week__day">3</button>
                <button class="week__day">4</button>
                <button class="week__day">5</button>
                <button class="week__day">6</button>
                <button class="week__day">7</button>
                <button class="week__day">8</button>
                <button class="week__day">9</button>
                <button class="week__day">10</button>
                <button class="week__day">11</button>
                <button class="week__day">12</button>
                <button class="week__day">13</button>
                <button class="week__day">14</button>
                <button class="week__day">15</button>
                <button class="week__day">16</button>
                <button class="week__day">17</button>
                <button class="week__day">18</button>
                <button class="week__day">19</button>
                <button class="week__day">20</button>
                <button class="week__day">21</button>
                <button class="week__day">22</button>
                <button class="week__day">23</button>
                <button class="week__day">24</button>
                <button class="week__day">25</button>
                <button class="week__day">26</button>
                <button class="week__day">27</button>
                <button class="week__day">28</button>
                <button class="week__day">29</button>
                <button class="week__day">30</button>
                <button class="week__day">31</button>
              </div>
            </ion-slide>
          </ion-slides>
        </div>
      </Host>
    );
  }

}
