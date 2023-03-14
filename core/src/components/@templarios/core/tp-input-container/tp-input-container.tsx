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
  @State() selectClicked: boolean = false;
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
    this.selectClicked =
      this.host.contains(target) &&
      this.host.querySelector("ion-select") !== null;
    // querySelector vai garantir que só seja afetado o tp-input-container usado como container de um ion-select
    if (this.selectClicked) {
      this.hostWidth = this.host.clientWidth + this.selectAndPopoverDiffWidth;
    }
  }

  @Listen("click")
  catchSelectIconClick(e: MouseEvent) {
    const target = e.target as Node;
    const shouldPropagateClick =
      this.host.contains(target) &&
      (target.nodeName === "ION-ICON" ||
        target.nodeName === "TP-INPUT-CONTAINER");

    if (shouldPropagateClick) {
      const event = new MouseEvent("click", {
        view: window,
        bubbles: true,
      });
      const ionSelect = this.host.querySelector("ION-SELECT");
      ionSelect?.dispatchEvent(event);
    }
  }

  @Listen("resize", { target: "window" })
  setPopoverWidthOnResize() {
    if (!this.selectClicked) return;

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
      if (!this.selectClicked) return;

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

      if (this.inverted) {
        popoverElement.classList.add("tp-popover--inverted");
        const { top, left } = this.host.getBoundingClientRect();
        popoverElement?.style.setProperty("--left", `${left}px`);
        popoverElement?.style.setProperty(
          "--bottom",
          `${window.innerHeight - top}px`
        );
      }
    }, 0);
  }

  @Listen("ionPopoverWillDismiss", { target: "body" })
  unsetClikedState() {
    if (!this.selectClicked) return;

    this.selectClicked = false;
  }

  componentDidLoad() {
    if (this.host.querySelector("ION-SELECT")) {
      this.pointerOnSelect = true;
    }
  }

  render() {
    const {
      dsColor,
      dsName,
      selectClicked,
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
          [`tp-input-container--select-clicked`]: selectClicked,
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
