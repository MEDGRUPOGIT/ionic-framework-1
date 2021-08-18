import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-item-aulas',
  styleUrl: 'med-item-aulas.scss',
  shadow: true,
})
export class MedItemAulas {
  /**
    * Define os dados do componente.
    */
  @Prop() dados?: any; // iterface

  render() {
    const { dados } = this;

    return (
      <Host from-stencil
        class={createColorClasses(null, {
          'med-item-aulas': true,
        }, null)}>
        <div class="med-item-aulas__top">
          <med-avatar ds-size="lg" letter={dados.avatar.letra ? dados.avatar.letra : ''} image={dados.avatar.imagem ? dados.avatar.imagem : ''}></med-avatar>
          <div class="med-item-aulas__info">
            <p class="med-item-aulas__professor">Profressor</p>
            <p class="med-item-aulas__nome">{dados.professor}</p>
            <p class="med-item-aulas__total">{dados.porcentagem} concluido - {dados.videos} vídeos</p>
            <med-rate-result excelente={dados.rate.excelente} bom={dados.rate.bom} regular={dados.rate.regular} ruim={dados.rate.ruim}></med-rate-result>
          </div>
          <ion-icon class="med-icon" name="med-direita"></ion-icon>
        </div>
        <div class="med-item-aulas__bottom">
          <ion-progress-bar ds-name="minimalist" value={dados.porcentagem}></ion-progress-bar>
        </div>

      </Host>
    );
  }

}
