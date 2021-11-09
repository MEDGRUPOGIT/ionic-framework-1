import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-rate-aula',
  styleUrl: 'med-rate-aula.scss',
  shadow: true,
})
export class MedRateAula {

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) collapsed = false;

  /**
    * Define o estado do componente programaticamente.
    */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  render() {
    const { collapsed } = this;

    return (
      <Host
      class={generateMedColor(null, {
        'med-rate-aula': true,
        'med-rate-aula--collapsed': collapsed
      })}>
        <div class="med-rate-aula__container">
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--otimo">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--otimo" name="med-excelente"></ion-icon>
            </button>
            <h4 class="med-rate-aula__label med-rate-aula__label--otimo">Ótimo</h4>
          </div>
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--bom">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--bom" name="med-bom"></ion-icon>
            </button>
            <h4 class="med-rate-aula__label med-rate-aula__label--bom">Bom</h4>
          </div>
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--regular">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--regular" name="med-regular"></ion-icon>
            </button>
            <h4 class="med-rate-aula__label med-rate-aula__label--regular">Regular</h4>
          </div>
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--ruim">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--ruim" name="med-ruim"></ion-icon>
            </button>
            <h4 class="med-rate-aula__label med-rate-aula__label--ruim">Rium</h4>
          </div>

          <div class="med-rate-aula__button-fechar" onClick={(event: any) => {this.toggle(event)}}>
            <ion-button ds-size="xs" ds-name="primary" class="">
              <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="med-rate-aula__end" onClick={(event: any) => {this.toggle(event)}}>
          <ion-button ds-size="xs" ds-name="tertiary">
            <ion-icon slot="icon-only" class="med-rate-aula__icon-abrir" name="med-avaliar"></ion-icon>
          </ion-button>
        </div>
      </Host>
    );
  }

}
