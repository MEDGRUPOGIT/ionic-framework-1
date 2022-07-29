import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { MedTema } from '../../../../@templarios/interfaces/themes.interface';

@Component({
  tag: 'med-themes',
  styleUrl: 'med-themes.scss',
  scoped: true,
})
export class MedThemes {

  /**
   * todo
   */
  @Prop({ reflect: true }) ativo?: 'theme-gold' | 'theme-recursos' | string;

  /**
   * todo
   */
  @Prop({ reflect: true }) temas?: MedTema[];

  /**
   * todo
   */
  @Event() medChange!: EventEmitter<string>;

  temaSelecionado(temaAtivo: any) {
    this.ativo = temaAtivo;
    this.medChange.emit(this.ativo);
  }

  render() {
    const { temas } = this;

    return (
      <Host from-stencil>
        <ion-radio-group onIonChange = {ev => this.temaSelecionado(ev.detail.value)} value={this.ativo}>
          {temas?.map((tema:MedTema) => (
            <div class={`med-theme med-theme--${tema.value}`} onClick={() => this.ativo = tema.value}>
              <div class="med-theme__left">
                <div class="med-theme__circle"></div>
              </div>
              <div class="med-theme__right">
                <div class="med-theme__bar"></div>
                <div class="med-theme__bar med-theme__bar--small"></div>
                <div class="med-theme__wrapper">
                  <ion-radio value={tema.value} class="med-theme__radio"></ion-radio>
                  <span class="med-theme__name">{tema.label}</span>
                </div>
              </div>
            </div>
          ))}
        </ion-radio-group>
      </Host>
    );
  }

}
