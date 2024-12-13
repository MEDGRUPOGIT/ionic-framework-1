import { Component, h, Host,  Listen,  Prop } from "@stencil/core";
import { MedFontSize } from "../../../../@templarios/templarios";
import { RangeValue } from "../../../range/range-interface";

@Component({
  tag: "med-font-zoom",
  styleUrl: "med-font-zoom.scss",
  scoped: true,
})
export class MedFontZoom {

  /**
   * todo
   */
  @Prop() emitter!: { emit: (value: MedFontSize) => void };

  /**
   * todo
   */
  @Prop({mutable: true}) value: MedFontSize = MedFontSize.XS;

  /**
  * todo
   */
  @Prop({ reflect: true }) step = false;

  readonly min: number = 1;
  readonly max: number = 5;

  fontSizeToValue = (fontSize: MedFontSize): RangeValue => {
    switch (fontSize) {
      case MedFontSize.XXXS:
        return 1;
      case MedFontSize.XXS:
        return 2;
      case MedFontSize.XS:
        return 3;
      case MedFontSize.SM:
        return 4;
      case MedFontSize.MD:
        return 5;
    }
  };

  onRangeChange = (rangeValue: RangeValue): void => {
    if (this.emitter) {
      switch (rangeValue) {
        case 1:
          this.value = MedFontSize.XXXS;
          break;
        case 2:
          this.value = MedFontSize.XXS;
          break;
        case 3:
          this.value = MedFontSize.XS;
          break;
        case 4:
          this.value = MedFontSize.SM;
          break;
        case 5:
          this.value = MedFontSize.MD;
          break;
        default:
          this.value = MedFontSize.XS;
      }

      this.emitter.emit(this.value);
    }
  };

  // fix para conflito com popover API do chrome
  // pode remover depois de migração pro ionic 7
  @Listen('ionPopoverDidPresent', { target: 'body' })
  fixPopover() {
    const popover = document.querySelector('med-font-zoom');

    if (!popover) return;

    if (popover?.hasAttribute('popover')) {
      popover.removeAttribute('popover');
    }

    popover.style.opacity = '1';
  }

  render() {
    return (
      <Host from-stencil>
        <ion-range
          onIonChange={(ev) => this.onRangeChange(ev.detail.value)}
          min={this.min}
          max={this.max}
          step={this.step ? (this.max - this.min) / 4 : 1}
          snaps={this.step}
          value={this.fontSizeToValue(this.value)}
          class="container"
        >
          <ion-icon class="med-icon" slot="start" name="med-fontemenor"></ion-icon>
          <ion-icon class="med-icon" slot="end" name="med-fontemaior"></ion-icon>
        </ion-range>
      </Host>
    );
  }
}
