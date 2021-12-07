import { Component, Host, h } from '@stencil/core';
import { modalController } from '../../../../../utils/overlays';

@Component({
  tag: 'filtro-dashboard',
  styleUrl: 'filtro-dashboard.scss',
  shadow: true,
})
export class FiltroDashboard {

  private async openModal() {
    const modal: HTMLIonModalElement =
      await modalController.create({
        component: 'filtro-modal',
        cssClass: 'dashboard-filtro-modal',
        backdropDismiss: false
      });
    await modal.present();
  }

  render() {
    return (
      <Host class="dashboard-filtro">
        <med-base class="dashboard-filtro__base" spacing-v="s16" spacing-h="s16" radius="s08">
          <div slot="start">
            <med-heading ds-size="xs" ds-color="neutral-10" class="dashboard-filtro__heading">
              <h3>Personalize seu dashboard com modal</h3>
            </med-heading>
          </div>
          <div slot="end">
            <ion-button ds-name="tertiary" onClick={() => this.openModal()}>
              <ion-icon slot="icon-only" class="med-icon dashboard-filtro__icon" name="med-filtro"></ion-icon>
            </ion-button>
          </div>
        </med-base>
      </Host>
    );
  }
}
