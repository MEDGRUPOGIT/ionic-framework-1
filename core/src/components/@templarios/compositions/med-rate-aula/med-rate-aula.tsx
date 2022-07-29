import { Component, h, Host, Method, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-rate-aula',
  styleUrl: 'med-rate-aula.scss',
  scoped: true,
})
export class MedRateAula {

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) collapsed = false;

  /**
   * todo
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
            <med-type token="p12" class="med-rate-aula__label" ds-color="fb-success">Ótimo</med-type>
          </div>
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--bom">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--bom" name="med-bom"></ion-icon>
            </button>
            <med-type token="p12" class="med-rate-aula__label" ds-color="fb-attention">Bom</med-type>
          </div>
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--regular">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--regular" name="med-regular"></ion-icon>
            </button>
            <med-type token="p12" class="med-rate-aula__label" ds-color="fb-caution">Regular</med-type>
          </div>
          <div class="med-rate-aula__item">
            <button class="med-rate-aula__button med-rate-aula__button--ruim">
              <ion-icon class="med-icon med-rate-aula__icon med-rate-aula__icon--ruim" name="med-ruim"></ion-icon>
            </button>
            <med-type token="p12" class="med-rate-aula__label" ds-color="fb-warning">Ruim</med-type>
          </div>

          <div class="med-rate-aula__button-fechar" onClick={(event: any) => { this.toggle(event) }}>
            <ion-button mode="ios" icon-only ds-size="xs">
              <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="med-rate-aula__end" onClick={(event: any) => { this.toggle(event) }}>
          <ion-button mode="ios" icon-only ds-size="xs" fill="clear">
            <ion-icon slot="icon-only" class="med-rate-aula__icon-abrir" name="med-avaliar"></ion-icon>
          </ion-button>
          <med-type token="p12">Avalie</med-type>
        </div>
      </Host>
    );
  }

}
