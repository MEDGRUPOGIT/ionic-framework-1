import { Component, Host, h, Prop, Element } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';
import { hostContext } from '../../../../utils/theme';

@Component({
  tag: 'med-aula-professor',
  styleUrl: 'med-aula-professor.scss',
  scoped: true,
})
export class MedAulaProfessor {

  @Element() el!: HTMLElement;

   /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * TO DO
    */
  @Prop({ reflect: true }) active = false;

  /**
    * TO DO
    */
  @Prop({ reflect: true }) icon!: string;

  /**
  * TO DO
  */
  @Prop({ reflect: true }) titulo!: string;

  /**
  * TO DO
  */
  @Prop({ reflect: true }) professores!: string;

  /**
  * TO DO
  */
  @Prop({ reflect: true }) videos!: string;

  /**
  * TO DO
  */
  @Prop({ reflect: true }) value!: number;

  render() {
    const { dsColor, icon, titulo, professores, videos, value, active } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-aula-professor': true,
        'med-aula-professor--active': active,
        'in-accordion': hostContext('med-accordion-item', this.el),
      })}>
        <div class="med-aula-professor__base">
          <div class="med-aula-professor__container">
            <ion-icon class="med-aula-professor__icon med-icon" name={icon}></ion-icon>

            <div class="med-aula-professor__middle">
            <med-type token="p16b">{titulo}</med-type>
            <med-type class="med-aula-professor__caption" token="p14">{professores} Professor, {videos} Vídeos</med-type>
            <med-type token="p10">{value * 100}% Concluído</med-type>
            </div>

            <div class="med-aula-professor__end">
              <slot></slot>
            </div>
          </div>
          <ion-progress-bar ds-name="minimalist" ds-color={dsColor} value={value}></ion-progress-bar>
        </div>
      </Host>
    );
  }
}
