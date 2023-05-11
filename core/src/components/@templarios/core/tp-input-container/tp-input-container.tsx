import {
  Component,
  h,
  Host,
  Prop,
  Element,
  Listen,
  State,
} from "@stencil/core";
import { MedColor } from "../../../../@templarios/types/color.type";
import { generateMedColor } from "../../../../@templarios/utilities/color";

@Component({
  tag: "tp-input-container",
  styleUrl: "tp-input-container.scss",
  scoped: true,
})
export class TpInputContainer {
  @Element() host!: HTMLElement;
  hostWidth: number | undefined;
  @State() selectWithPopoverClicked: boolean = false;
  @State() pointerOnSelect: boolean = false;
  readonly selectAndPopoverDiffWidth: number = 2;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsName?: "secondary";

  /**
   * todo
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) feedback = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) inverted = false;

  /**
   * todo
   */
  @Prop({ reflect: true }) hasButton?: "start" | "end" | "both";

  /**
   * todo
   */
  @Prop({ reflect: true }) hasIcon?: "start" | "end" | "both";

  @Listen("click", { target: "body" })
  getTpInputContainerWidth(e: MouseEvent) {
    if (this.disabled) return;

    const target = e.target as Node;
    const ionSelect = this.host.querySelector(
      "ion-select"
    ) as HTMLIonSelectElement;

    this.selectWithPopoverClicked =
      this.host.contains(target) &&
      ionSelect !== null &&
      ionSelect.interface === "popover";
    // querySelector vai garantir que só seja afetado o tp-input-container usado como container de um ion-select
    if (this.selectWithPopoverClicked) {
      this.hostWidth = this.host.clientWidth + this.selectAndPopoverDiffWidth;
    }
  }

  @Listen("click")
  catchSelectIconClick(e: MouseEvent) {
    const target = e.target as Node;
    const ionSelect = this.host.querySelector(
      "ion-select"
    ) as HTMLIonSelectElement;
    const shouldOpenOverlay =
      this.host.contains(target) &&
      ionSelect.hasAttribute("interface") &&
      (target.nodeName === "ION-ICON" ||
        target.nodeName === "TP-INPUT-CONTAINER");

    if (shouldOpenOverlay) {
      ionSelect.open(e);
    }
  }

  @Listen("resize", { target: "window" })
  setPopoverWidthOnResize() {
    if (!this.selectWithPopoverClicked) return;

    const popoverElement = document.querySelector(
      ".select-popover"
    ) as HTMLElement;
    popoverElement?.style.setProperty(
      "--width",
      `${this.host.clientWidth + this.selectAndPopoverDiffWidth}px`
    );
  }

  @Listen("ionPopoverWillPresent", { target: "body" })
  setPopoverCharacteristics() {
    // setTimeout para animação acontecer de forma suave
    setTimeout(() => {
      if (!this.selectWithPopoverClicked) return;

      const popoverElement = document.querySelector(
        ".select-popover"
      ) as HTMLElement;
      popoverElement?.style.setProperty("--width", `${this.hostWidth}px`);

      if (this.dsName === "secondary") {
        popoverElement.classList.add("tp-popover--secondary");
      }

      if (popoverElement.classList.contains("popover-bottom")) {
        this.inverted = true;
      }

      const { top, left } = this.host.getBoundingClientRect();
      if (this.inverted) {
        popoverElement.classList.add("tp-popover--inverted");
        popoverElement?.style.setProperty("--left", `${left}px`);
        popoverElement?.style.setProperty(
          "--bottom",
          `${window.innerHeight - top}px`
        );
      } else {
        popoverElement?.style.setProperty("--left", `${left + 1}px`);
      }
    }, 0);
  }

  @Listen("ionPopoverWillDismiss", { target: "body" })
  unsetClikedState() {
    if (!this.selectWithPopoverClicked) return;

    this.selectWithPopoverClicked = false;
  }

  componentDidLoad() {
    const ionSelect = this.host.querySelector(
      "ION-SELECT"
    ) as HTMLIonSelectElement;

    if (ionSelect) {
      this.pointerOnSelect = true;

      if (!ionSelect.hasAttribute("interface")) {
        ionSelect.interfaceOptions = { cssClass: "tp-hide" };
      }
    }
  }

  render() {
    const {
      dsColor,
      dsName,
      selectWithPopoverClicked,
      pointerOnSelect,
      inverted,
      disabled,
      feedback,
      hasButton,
      hasIcon,
    } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          "tp-input-container": true,
          "tp-input-container--with-select": pointerOnSelect,
          [`tp-input-container--select-popover-clicked`]:
            selectWithPopoverClicked,
          [`tp-input-container--inverted`]: inverted,
          "tp-input-container--disabled": disabled,
          "tp-input-container--feedback": feedback,
          [`tp-input-container--${dsName}`]: dsName !== undefined,
          [`tp-input-container--has-button-${hasButton}`]:
            hasButton !== undefined,
          [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
        })}
      >
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </Host>
    );
  }
}
