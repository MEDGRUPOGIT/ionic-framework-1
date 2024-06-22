import { Component, h, Host, Prop, State } from "@stencil/core";
import {
  MedAlternativaInterface,
  MedAlternativasInterface,
} from "../../../../../@templarios/interfaces/alternativas.interface";
import { MedSkin } from "../../../../../@templarios/templarios";
import { MedColor } from "../../../../../@templarios/types/color.type";

@Component({
  tag: "med-alternativas",
  styleUrl: "med-alternativas.scss",
  shadow: true,
})
export class MedAlternativas implements MedAlternativasInterface {
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
  @Prop() dsSkinConfig!: any;

  /**
   * todo
   */
  @Prop() keyAlternativa = "Alternativa";

  /**
   * todo
   */
  @Prop() keyEnunciado = "Enunciado";

  /**
   * todo
   */
  @Prop() keyImagem = "Imagem";

  /**
   * todo
   */
  @Prop() keyPorcentagem = "Porcentagem";

  /**
   * todo
   */
  @Prop() keyRiscada = "Riscada";

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
  @Prop({ mutable: true }) permiteDesmarcar = false;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) mostrarProgressBar = true;

  /**
   * todo
   */
  @State() blockMouseEvents = false;

  render() {
    const {
      dsSkinConfig,
      dsColor,
      alternativas,
      keyAlternativa,
      keyEnunciado,
      keyImagem,
      keyPorcentagem,
      keyRiscada,
      respostaCorreta,
      mostraResposta,
      alternativaSelecionada,
      permiteRiscar,
      permiteDesmarcar,
      mostrarProgressBar,
    } = this;

    return (
      <Host from-stencil>
        {dsSkinConfig.alternativas === MedSkin.A && (
          <med-alternativas-a
            dsSkinConfig={dsSkinConfig}
            dsColor={dsColor}
            alternativas={alternativas}
            keyAlternativa={keyAlternativa}
            keyEnunciado={keyEnunciado}
            keyImagem={keyImagem}
            keyPorcentagem={keyPorcentagem}
            keyRiscada={keyRiscada}
            respostaCorreta={respostaCorreta}
            mostraResposta={mostraResposta}
            alternativaSelecionada={alternativaSelecionada}
            permiteRiscar={permiteRiscar}
            permiteDesmarcar={permiteDesmarcar}
            mostrarProgressBar={mostrarProgressBar}
          ></med-alternativas-a>
        )}

        {dsSkinConfig.alternativas === MedSkin.B && (
          <med-alternativas-b
            dsSkinConfig={dsSkinConfig}
            dsColor={dsColor}
            alternativas={alternativas}
            keyAlternativa={keyAlternativa}
            keyEnunciado={keyEnunciado}
            keyImagem={keyImagem}
            keyPorcentagem={keyPorcentagem}
            keyRiscada={keyRiscada}
            respostaCorreta={respostaCorreta}
            mostraResposta={mostraResposta}
            alternativaSelecionada={alternativaSelecionada}
            permiteRiscar={permiteRiscar}
            permiteDesmarcar={permiteDesmarcar}
            mostrarProgressBar={mostrarProgressBar}
          ></med-alternativas-b>
        )}
      </Host>
    );
  }
}
