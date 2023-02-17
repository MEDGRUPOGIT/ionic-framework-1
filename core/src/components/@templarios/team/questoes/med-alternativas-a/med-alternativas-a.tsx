import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { MedColor } from '../../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../../@templarios/utilities/color';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';
import { MedAlternativaInterface, MedAlternativasInternoInterface } from '../../../../../@templarios/interfaces/alternativas.interface';

@Component({
  tag: 'med-alternativas-a',
  styleUrl: 'med-alternativas-a.scss',
  shadow: true,
})
export class MedAlternativasA implements MedAlternativasInternoInterface {
  @Element() hostElement!: HTMLElement;

  /**
   * todo
   */
  @Prop() dsSkin?: any;

  /**
   * todo
   */
  @Prop() dsSkinConfig?: any;

  /**
   * todo
   */
  @Prop() dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ mutable: true }) alternativas: MedAlternativaInterface | any = [];

  /**
   * todo
   */
  @Prop() keyAlternativa = 'Alternativa';

  /**
   * todo
   */
  @Prop() keyEnunciado = 'Enunciado';

  /**
   * todo
   */
  @Prop() keyImagem = 'Imagem';

  /**
   * todo
   */
  @Prop() keyPorcentagem = 'Porcentagem';

  /**
   * todo
   */
  @Prop() keyRiscada = 'Riscada';

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) respostaCorreta!: string;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) mostraResposta!: boolean;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) alternativaSelecionada!: string;

  /**
   * todo
   */
  @Prop({ mutable: true }) permiteRiscar = true;

  /**
   * todo
   */
  @Event() medChange!: EventEmitter<MedAlternativaInterface>;

  /**
   * todo
   */
  @Event() medRiscada!: EventEmitter<MedAlternativaInterface>;

  /**
   * todo
   */
  @Event() medGalleryRequest!: EventEmitter<MedAlternativaInterface>;

  @State() permiteAlterar = true;
  @State() riscarAtivoIndice = -1;

  baseClass = new MedAlternativasBase(this);

  @Listen('click', { target: 'window' })
  handleClick(event: any) {
    this.baseClass.handleClick(event);
  }

  @Watch('alternativas')
  onAlternativasChanged(newValue: MedAlternativaInterface | any, oldValue: MedAlternativaInterface | any) {
    this.baseClass.onAlternativasChanged(newValue, oldValue)
  }

  render() {
    const { dsColor, permiteRiscar, mostraResposta, alternativaSelecionada } = this;
    const exibeAcerto = this.alternativaSelecionada && mostraResposta;
    let hasImage = false;

    if (this.alternativas) {
      this.alternativas.forEach((element: any) => {
        if (element.Imagem) hasImage = true;
      });
    }

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-alternativas': true,
        })}>
        <div class={`
           med-alternativas__list
           ${hasImage ? 'med-alternativas__list--has-image' : ''}
           `} role="list">

          {this.alternativas.map((alternativa: any, indice: number) => (
            <div role="listitem"
              onTouchStart={(event) => this.baseClass.onTouchStart(event, indice)}
              onTouchEnd={(event) => this.baseClass.onTouchEnd(event, alternativa)}
              onMouseDown={(event) => this.baseClass.onTouchStart(event, indice)}
              onMouseUp={(event) => this.baseClass.onTouchEnd(event, alternativa)}
              class={`
                med-alternativas__item med-alternativas__item--${alternativa[this.keyAlternativa]}
                ${permiteRiscar ? 'med-alternativas__item--permite-riscar' : ''}
                ${indice === this.riscarAtivoIndice && permiteRiscar ? 'med-alternativas__item--show' : ''}
                ${alternativa[this.keyRiscada] && permiteRiscar ? 'med-alternativas__item--riscado' : ''}
                ${exibeAcerto && alternativa[this.keyAlternativa] === this.respostaCorreta && this.respostaCorreta === this.alternativaSelecionada ? 'med-alternativas__item--correta' : ''}
                ${exibeAcerto && alternativa[this.keyAlternativa] === this.respostaCorreta && this.respostaCorreta !== this.alternativaSelecionada ? 'med-alternativas__item--certa' : ''}
                ${exibeAcerto && alternativa[this.keyAlternativa] !== this.respostaCorreta && alternativa[this.keyAlternativa] === this.alternativaSelecionada ? 'med-alternativas__item--incorreta' : ''}
                ${!exibeAcerto && alternativa[this.keyAlternativa] === this.alternativaSelecionada ? 'med-alternativas__item--selecionada' : ''}
              `}
            >
              <div class="med-alternativas__wrapper">
                <div class="med-alternativas__container">
                  <div class="med-alternativas__left">

                    <div class="option">
                      <span class="option__fake"></span>
                      <span class="option__letter">{alternativa[this.keyAlternativa]}</span>
                    </div>

                  </div>
                  <div class="med-alternativas__right">
                    <span class="med-alternativas__span" innerHTML={alternativa[this.keyEnunciado]}>
                    </span>

                    {alternativa[this.keyImagem] &&
                      <div class={`image-container ${alternativa[this.keyEnunciado] ? 'image-container--margin' : ''}`} onClick={(event) => this.baseClass.imageRequest(event, alternativa)}>
                        <div class='image-container__wrapper'>
                          <img class='image-container__image' src={alternativa[this.keyImagem]} />
                        </div>
                      </div>
                    }

                    <med-chart-bar-horizontal label class={`
                      med-alternativas__progress-bar
                      ${mostraResposta && alternativaSelecionada ? 'med-alternativas__progress-bar--toggle' : ''}
                    `} value={Math.round(alternativa[this.keyPorcentagem] * 100)}></med-chart-bar-horizontal>

                    {/* <ion-progress-bar percentage class={`
                      med-alternativas__progress-bar
                      ${mostraResposta && alternativaSelecionada ? 'med-alternativas__progress-bar--toggle' : ''}
                    `}
                      value={alternativa[this.keyPorcentagem]}>
                    </ion-progress-bar> */}

                  </div>
                  <div class={`med-alternativas__riscar ${indice === this.riscarAtivoIndice && permiteRiscar ? 'med-alternativas__riscar--show' : ''}`}
                    onClick={(event) => { this.baseClass.riscar(event, alternativa) }}>
                    <ion-icon class="med-alternativas__riscar-icon med-icon" name="med-riscar"></ion-icon>
                    <div class="med-alternativas__riscar-span">
                      {(alternativa[this.keyRiscada] ? 'Restaurar ' : 'Riscar ')}
                      <span class="med-alternativas__riscar-desktop"> alternativa</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          ))}

        </div>
      </Host>
    );
  }

}
