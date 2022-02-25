import { Component, Host, h, Prop, State } from "@stencil/core";
import { MedImageZoomItemInterface } from "./med-image-zoom-interface";
import { modalController } from "../../../../utils/overlays";

@Component({
  tag: "med-image-zoom",
  styleUrl: "med-image-zoom.scss",
  scoped: true,
})
export class MedImageZoom {
  /**
   * TODO
   */
  @Prop({ mutable: true, reflect: true }) imagens:
    | MedImageZoomItemInterface[]
    | any = [];

  /**
   * TODO
   */
  @Prop({ mutable: true, reflect: true }) marcaAguaSuperior?: string;

  /**
   * TODO
   */
  @Prop({ mutable: true, reflect: true }) marcaAguaInferior?: string;

  /**
   * TODO
   */
  @Prop({ mutable: true, reflect: true }) titulo?: string;

  @State() slider!: any;

  defaultMaxRatio = 13;
  aplicandoZoom = false;
  @State() sliderOpts = this.getSliderOpts(this.defaultMaxRatio);

  getSliderOpts(maxRatio: number) {
    const sliderOpts = {
      zoom: {
        maxRatio,
      },
      intialSlide: 0,
    };
    return sliderOpts;
  }
  async sleep(time: number = 500) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  async zoomIn(increment = 3) {
    if (this.aplicandoZoom) {
      return;
    }
    this.aplicandoZoom = true;
    const zoom = this.slider.swiper.zoom;
    let maxRatio = zoom.currentScale + increment;
    if (maxRatio > this.defaultMaxRatio) {
      maxRatio = this.defaultMaxRatio;
    } else if (maxRatio < 1) {
      maxRatio = 1;
    }

    this.sliderOpts = this.getSliderOpts(maxRatio);
    await this.sleep(45);
    zoom.in();
    await this.sleep(45);
    this.sliderOpts = this.getSliderOpts(this.defaultMaxRatio);
    this.aplicandoZoom = false;
  }

  async zoomOut() {
    this.zoomIn(-3);
  }

  dismiss() {
    modalController.dismiss();
  }

  render() {
    return (
      <Host from-stencil>
        <med-header class="zoom-header">
          <med-navbar slot="navbar" ds-name="transparent" ds-theme="light">
            <span slot="title" innerHTML={this.titulo}></span>

            <ion-button
              ds-name="tertiary"
              slot="right"
              onClick={() => this.dismiss()}
            >
              <ion-icon
                class="med-icon"
                slot="icon-only"
                name="med-fechar"
              ></ion-icon>
            </ion-button>
          </med-navbar>
        </med-header>

        <ion-content class="zoom-content">
          <ion-slides
            ref={(el) => {
              this.slider = el as any;
            }}
            options={this.sliderOpts}
            pager={this.imagens && this.imagens.length > 1}
          >
            {this.imagens.map((img: any) => (
              <ion-slide>
                <span class="marca-agua-superior">
                  {this.marcaAguaSuperior}
                </span>
                <div class="swiper-zoom-container">
                  <img class="zoom-imagem" src={img?.src} />
                  <div class="zoom-legenda-container">
                    <div class="zoom-legenda" innerHTML={img?.legenda}></div>
                  </div>
                </div>
              </ion-slide>
            ))}
          </ion-slides>
          <span class="marca-agua-inferior">{this.marcaAguaInferior}</span>
        </ion-content>
        <div class="zoom-button-container">
          <button class="zoom-button" onClick={() => this.zoomIn()}>
            <ion-icon class="med-icon" name="med-mais"></ion-icon>
          </button>
          <button class="zoom-button" onClick={() => this.zoomOut()}>
            <ion-icon class="med-icon" name="med-menos"></ion-icon>
          </button>
          <button
            class="zoom-button zoom-button--close"
            onClick={() => this.dismiss()}
          >
            <ion-icon class="med-icon" name="med-fechar"></ion-icon>
          </button>
        </div>
      </Host>
    );
  }
}
