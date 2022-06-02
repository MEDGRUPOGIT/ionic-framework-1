import { Component, Host, h, Prop } from '@stencil/core';
import { modalController } from "../../../../utils/overlays";
import { sanitizeDOMString } from '../../../../utils/sanitization';

@Component({
  tag: 'med-alert',
  styleUrl: 'med-alert.scss',
  scoped: true,
})
export class MedAlert {

  @Prop({ mutable: true, reflect: true }) heading?: string;

  @Prop({ mutable: true, reflect: true }) message?: string;

  @Prop({ mutable: true, reflect: true }) cancelText?: string;
  
  @Prop({ mutable: true, reflect: true }) confirmText?: string;

  dismiss(role: string) {
    modalController.dismiss(null, role);
  }

  render() {
    const { heading, message, cancelText, confirmText } = this;

    return (
      <Host>
        <ion-header class="tp-dialog-header">
            <ion-button ds-name="tertiary" ds-size="xxs" onClick={() => this.dismiss('cancel')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
            </ion-button>
          </ion-header>
          <div class="tp-dialog-container">
            <med-type class="tp-dialog-heading" token="h20x" innerHTML={sanitizeDOMString(heading)}></med-type>
            <med-type ds-color="neutral-8" token="h14x" innerHTML={sanitizeDOMString(message)}></med-type>

            <div class="tp-dialog-footer">
              {cancelText && <ion-button ds-name="secondary" onClick={() => this.dismiss('cancel')}>{cancelText}</ion-button>}
              {confirmText && <ion-button onClick={() => this.dismiss('confirm')}>{confirmText}</ion-button>}
            </div>
          </div>
      </Host>
    );
  }

}
