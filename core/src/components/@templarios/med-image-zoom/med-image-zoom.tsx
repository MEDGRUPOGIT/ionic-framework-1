import { Component, h, Host, Prop, State } from "@stencil/core";
import { MedImageZoomItemInterface } from "../../../@templarios/interfaces/image-zoom.interface";
import { modalController } from "../../../utils/overlays";

@Component({
  tag: "med-image-zoom",
  styleUrl: "med-image-zoom.scss",
  scoped: true,
})
export class MedImageZoom {
  @Prop({ mutable: true, reflect: true }) imagens:
    | MedImageZoomItemInterface[]
    | any = [];

  @Prop({ mutable: true, reflect: true }) marcaAguaSuperior?: string;

  @Prop({ mutable: true, reflect: true }) marcaAguaInferior?: string;

  @Prop({ mutable: true, reflect: true }) titulo?: string;

  @Prop({ mutable: true, reflect: true }) initialSlide? = 0;

  @State() slider!: any;

  defaultMaxRatio = 4;
  aplicandoZoom = false;

  @State() sliderOpts = this.getSliderOpts(this.defaultMaxRatio);

  getSliderOpts(maxRatio: number) {
    const sliderOpts = {
      zoom: {
        maxRatio,
      },
      initialSlide: this.initialSlide,
    };
    return sliderOpts;
  }

  async zoomOut() {
    const zoom = this.slider.swiper.zoom;
    zoom.out();
  }
  async zoomIn() {
    const zoom = this.slider.swiper.zoom;
    zoom.in();
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
              mode="ios"
              fill="clear"
              slot="right"
              icon-only
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
            ref={(el: any) => {
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
