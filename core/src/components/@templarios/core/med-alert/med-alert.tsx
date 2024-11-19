import { Component, h, Host, Prop } from '@stencil/core';
import { modalController } from "../../../../utils/overlays";
import { sanitizeDOMString } from '../../../../utils/sanitization';

@Component({
  tag: 'med-alert',
  styleUrl: 'med-alert.scss',
  scoped: true,
})
export class MedAlert {

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) heading?: string;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) message?: string;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) cancelText?: string;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) confirmText?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) disableSanitize = false;

  /**
  * todo
  */
  @Prop({ reflect: true }) canClose = true;

  dismiss(role: string) {
    modalController.dismiss(null, role);
  }

  render() {
    const { heading, message, cancelText, confirmText, disableSanitize, canClose } = this;

    return (
      <Host>
        {canClose && <ion-header class="tp-dialog-header">
             <ion-button mode="ios" icon-only fill="clear" ds-size="xxs" onClick={() => this.dismiss('close')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-fechar"></ion-icon>
            </ion-button>
          </ion-header>}
          <div class="tp-dialog-container">
            <med-type class="tp-dialog-heading" token="h20x" innerHTML={!disableSanitize ? sanitizeDOMString(heading) : heading}></med-type>
            <med-type ds-color="neutral-8" token="h14x" innerHTML={!disableSanitize ? sanitizeDOMString(message) : message}></med-type>

            <div class="tp-dialog-footer">
              {cancelText && <ion-button mode="ios" fill="outline" onClick={() => this.dismiss('cancel')}>{cancelText}</ion-button>}
              {confirmText && <ion-button mode="ios" onClick={() => this.dismiss('confirm')}>{confirmText}</ion-button>}
            </div>
          </div>
      </Host>
    );
  }

}
