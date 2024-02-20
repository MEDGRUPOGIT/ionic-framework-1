import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'med-offline',
  styleUrl: 'med-offline.scss',
  scoped: true,
})
export class MedOffline {
  /**
   * todo
   */
     @Prop({ reflect: true }) titulo: string = 'Página Indisponível';

  /**
   * todo
   */
   @Prop({ reflect: true }) subtitulo: string = 'Você está offline';

  /**
   * todo
   */
   @Prop({ reflect: true }) texto: string = 'Conecte-se à internet para visualizar esse conteúdo';

  /**
   * todo
   */
  @Event() medClick!: EventEmitter<void>;

  private onClick() {
    this.medClick.emit();
  }

  render() {
    const { titulo, subtitulo, texto } = this;

    return (
      <Host from-stencil>
        <div class="wrapper">
          <med-header>
            <med-navbar ds-name="transparent" slot="navbar">
              <ion-button mode="ios" icon-only fill="clear" ds-size="xs" slot="left" onClick={() => this.onClick()}>
                <ion-icon class="med-icon" slot="icon-only" name="med-esquerda"></ion-icon>
              </ion-button>
            </med-navbar>
          </med-header>

          <h1 class="title">{titulo}</h1>

          <div class="wrapper__content">
            <ion-icon class="med-icon med-icon--lg wrapper__icon" name="med-offline2" ></ion-icon>
            <p class="subtitle">{subtitulo}</p>
            <p class="text">{texto}</p>
          </div>
        </div>
      </Host>
    );
  }

}
