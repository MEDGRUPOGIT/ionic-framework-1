import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-nav-simple',
  styleUrl: 'med-nav-simple.scss',
  shadow: true,
})
export class MedNavSimple {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

   /**
   * TODO.
   */
  @Event() close!: EventEmitter;

  private clickHandle() {
    this.close.emit();
  }

  render() {

    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-nav-simple': true,
      })}>

        <nav class="med-nav-simple__wrapper">
          <div class="med-nav-simple__logo">
            <div class="med-nav-simple__icon-wrapper">
              <ion-icon class="med-nav-simple__icon med-icon med-icon--sm" name="med-logo"></ion-icon>
            </div>
          </div>

          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-play" active></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-apostila"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-concursos"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-orientacao"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-metricas"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-qrcode"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-slidedeaula"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-duvidasacademicas"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-cronograma"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-bonus"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-drogas"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-anotacao"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-multimidia"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-concursos"></med-nav-item>
          <med-nav-item ds-color={dsColor} class="med-nav-simple__item" icon="med-montaprovas"></med-nav-item>
          <ion-button ds-color={dsColor} class="med-nav__toggle" ds-name="tertiary" onClick={() => this.clickHandle()}>
            <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
          </ion-button>
        </nav>

      </Host>
    );
  }

}
