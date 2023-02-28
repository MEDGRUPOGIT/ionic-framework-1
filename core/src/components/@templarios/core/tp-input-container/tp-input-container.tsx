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
  @State() clicked: boolean = false;

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
  @Prop({ reflect: true }) hasButton?: "start" | "end" | "both";

  /**
   * todo
   */
  @Prop({ reflect: true }) hasIcon?: "start" | "end" | "both";

  @Listen("click", { target: "body" })
  getTpInputContainerWidth(e: MouseEvent) {
    this.clicked = this.host.contains(e.target as Node);
    this.hostWidth = this.host.clientWidth + 2;
  }

  @Listen("resize", { target: "window" })
  setPopoverWidthOnResize() {
    if (!this.clicked) return;

    const popoverElement = document.querySelector(
      ".select-popover"
    ) as HTMLElement;
    popoverElement?.style.setProperty(
      "--width",
      `${this.host.clientWidth + 2}px`
    );
  }

  @Listen("ionPopoverWillPresent", { target: "body" })
  setPopoverWidth() {
    if (!this.clicked) return;

    const popoverElement = document.querySelector(
      ".select-popover"
    ) as HTMLElement;
    popoverElement?.style.setProperty("--width", `${this.hostWidth}px`);
  }

  @Listen("ionPopoverWillDismiss", { target: "body" })
  unsetClikedState() {
    if (!this.clicked) return;

    this.clicked = false;
  }

  render() {
    const { dsColor, dsName, disabled, feedback, hasButton, hasIcon } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
          "tp-input-container": true,
          [`tp-input-container--clicked`]: this.clicked,
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
