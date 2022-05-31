import { Component, Host, h } from '@stencil/core';

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
          <ion-button ds-name="tertiary" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
          </ion-button>
        </ion-header>
        <div class="tp-dialog-container">
          <med-type class="tp-dialog-heading" token="h20x">Lorem ipsum dolor sit.</med-type>
          <med-type ds-color="neutral-8" token="h14x">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!</med-type>

          <div class="tp-dialog-footer">
            <ion-button ds-name="secondary">Salvar</ion-button>
            <ion-button>Salvar</ion-button>
          </div>
        </div>
      </Host>
    );
  }

}
