import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-nav-accordion',
  styleUrl: 'med-nav-accordion.scss',
  shadow: true,
})
export class MedNavAccordion {
  @Prop({ reflect: true }) dsColor?: MedColor;

  render() {
    const { dsColor } = this;

    return (
      <Host class={generateMedColor(dsColor, {
        'med-nav-accordion': true,
        })}>
        <med-accordion-list class="med-nav-accordion__list" single-open="false">

          <med-accordion-item class="med-nav-accordion__item" color="aula" background>
            <div class="med-nav-accordion__header" slot="full-header">
              <med-type token="p16b">Mentoria</med-type>
              <ion-icon class="med-icon med-nav-accordion__icon" name="med-baixo"></ion-icon>
            </div>

            <div slot="content">

              <med-nav-item icon="med-orientacao" text="Orientações"></med-nav-item>
              <med-nav-item icon="med-metricas" text="Desempenho"></med-nav-item>

            </div>
          </med-accordion-item>

          <med-accordion-item class="med-nav-accordion__item" color="aula" background>
            <div class="med-nav-accordion__header" slot="full-header">
              <med-type token="p16b">Geral</med-type>
              <ion-icon class="med-icon med-nav-accordion__icon" name="med-baixo"></ion-icon>
            </div>

            <div class="" slot="content">

              <med-nav-item icon="med-qrcode" text="Medcode"></med-nav-item>
              <med-nav-item icon="med-slidedeaula" text="Slides de Aula"></med-nav-item>
              <med-nav-item icon="med-duvidasacademicas" text="Dúvidas Acadêmicas"></med-nav-item>
              <med-nav-item icon="med-cronograma" text="Cronograma"></med-nav-item>
              <med-nav-item icon="med-bonus" text="Bônus"></med-nav-item>
              <med-nav-item icon="med-drogas" text="Drogas"></med-nav-item>

            </div>
          </med-accordion-item>

          <med-accordion-item class="med-nav-accordion__item" color="aula" background>
            <div class="med-nav-accordion__header" slot="full-header">
              <med-type token="p16b">Treinamento</med-type>
              <ion-icon class="med-icon med-nav-accordion__icon" name="med-baixo"></ion-icon>
            </div>

            <div class="" slot="content">

              <med-nav-item icon="med-anotacao" text="Simulados"></med-nav-item>
              <med-nav-item icon="med-multimidia" text="Multimedia"></med-nav-item>
              <med-nav-item icon="med-concursos" text="Concurso na Integra"></med-nav-item>
              <med-nav-item icon="med-montaprovas" text="Monta Provas"></med-nav-item>

            </div>
          </med-accordion-item>

        </med-accordion-list>
      </Host>
    );
  }

}
