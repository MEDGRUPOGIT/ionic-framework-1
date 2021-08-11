import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-vote',
  styleUrl: 'med-vote.scss',
  shadow: true,
})
export class MedVote {

  /**
    * Define o conteúdo de texto do componente.
    */
  @Prop() titulo?: string;

  /**
    * Define o conteúdo de texto do componente.
    */
  @Prop() cabe?: number;

  /**
    * Define o conteúdo de texto do componente.
    */
  @Prop() naoCabe?: number;

  render() {
    const { titulo, cabe, naoCabe } = this;

    return (
      <Host
        from-stencil
        class={createColorClasses(null, {
          'med-vote': true,
        }, null)}>
        <div class="med-vote__row">
          <div class="med-vote__icon-container">
            <ion-icon class="med-icon med-vote__icon med-vote__icon--cabe" name="med-positivo"></ion-icon>
            <div class="med-vote__badge med-vote__badge--cabe">{cabe ? cabe : '0'}</div>
          </div>
          <h3 class="med-vote__heading" innerHTML={titulo}></h3>
          <div class="med-vote__icon-container">
            <div class="med-vote__badge med-vote__badge--nao-cabe">{naoCabe ? naoCabe : '0'}</div>
            <ion-icon class="med-icon med-vote__icon med-vote__icon--nao-cabe" name="med-negativo"></ion-icon>
          </div>
        </div>
        <div class="med-vote__row">
          <div class="med-vote__chart med-vote__chart--cabe"></div>
          <div class="med-vote__chart med-vote__chart--nao-cabe"></div>
        </div>
      </Host>
    );
  }

}
