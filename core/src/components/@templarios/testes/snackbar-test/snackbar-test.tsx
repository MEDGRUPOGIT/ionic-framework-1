import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'snackbar-test',
  styleUrl: 'snackbar-test.scss',
  scoped: true,
})
export class SnackbarTest {

  render() {
    return (
      <Host>
        <div class="tp-snackbar__container">
          <ion-avatar ds-size="xxs"></ion-avatar>

          <med-type class="tp-snackbar__text" token="p16b">1.341 alunos fizeram o simulado</med-type>

          <ion-button class="tp-snackbar__button" mode="ios" icon-only fill="clear" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </div>
      </Host>
    );
  }
}
