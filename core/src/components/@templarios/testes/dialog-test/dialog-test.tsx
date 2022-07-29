import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'dialog-test',
  styleUrl: 'dialog-test.scss',
  scoped: true,
})
export class DialogTest {

  render() {
    return (
      <Host>
        <ion-header class="tp-dialog-header">
          <ion-button mode="ios" icon-only fill="clear" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
        <div class="tp-dialog-container">
          <med-type class="tp-dialog-heading" token="h20x">Lorem ipsum dolor sit.</med-type>
          <med-type ds-color="neutral-8" token="p14x">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!</med-type>

          <div class="tp-dialog-footer">
            <ion-button mode="ios" fill="outline" ds-size="sm">Fechar</ion-button>
            <ion-button mode="ios" ds-size="sm">Salvar</ion-button>
          </div>
        </div>
      </Host>
    );
  }

}
