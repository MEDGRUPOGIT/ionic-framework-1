import { Component, Host, h } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-item-aulas',
  styleUrl: 'med-item-aulas.scss',
  shadow: true,
})
export class MedItemAulas {

  render() {

    const { } = this;

    return (
      <Host from-stencil
        class={createColorClasses(null, {
          'med-item-aulas': true,
        }, null)}>
        <div class="med-item-aulas__top">
          <med-avatar ds-size="lg" letter="A"></med-avatar>
          <div class="med-item-aulas__info">
            <p class="med-item-aulas__professor">Profressor</p>
            <p class="med-item-aulas__nome">Nome do professor</p>
            <p class="med-item-aulas__total">20% concluido - 15 vídeos</p>
            <med-rate-result excelente="1k" bom="123" regular="22" ruim="1"></med-rate-result>
          </div>
          <ion-icon class="med-icon" name="med-direita"></ion-icon>
        </div>
        <div class="med-item-aulas__bottom">
          <ion-progress-bar ds-name="minimalist"></ion-progress-bar>
        </div>

      </Host>
    );
  }

}
