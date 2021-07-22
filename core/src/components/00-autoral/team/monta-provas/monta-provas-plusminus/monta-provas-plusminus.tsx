import { Component, Host, h, Prop, } from '@stencil/core';
import { createColorClasses } from '../../../../../utils/theme';

@Component({
  tag: 'monta-provas-plusminus',
  styleUrl: 'monta-provas-plusminus.scss',
  shadow: true,
})
export class MontaProvasPlusminus {

  @Prop() dsSize?: 'xl';

  render() {
    const { dsSize } = this;

    return (
      <Host
        from-stencil
        class={createColorClasses(null, {
          'monta-provas-plusminus': true,
          [`monta-provas-plusminus--${dsSize}`]: dsSize !== undefined,
        }, null)}
      >
        <ion-icon class="med-icon med-icon--lg icon-minus" name="med-menos-circulo"></ion-icon>
        <slot></slot>
        <ion-icon class="med-icon med-icon--lg icon-plus" name="med-mais-circulo"></ion-icon>
      </Host>
    );
  }

}
