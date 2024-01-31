import { Component, h, Host, Prop } from '@stencil/core';
import { MedSkin } from '../../../@templarios/templarios';
import { MedColor } from '../../../@templarios/types/color.type';
import {
  MedAlternativaInterface,
  MedAlternativasInterface
} from '../../../@templarios/interfaces/alternativas.interface';

@Component({
  tag: 'med-alternativas',
  styleUrl: 'med-alternativas.scss',
  shadow: true
})
export class MedAlternativas implements MedAlternativasInterface {
  @Prop() dsColor?: MedColor;

  @Prop({ mutable: true }) alternativas: MedAlternativaInterface | any = [];

  @Prop() dsSkinConfig!: any;

  @Prop() keyAlternativa = 'Alternativa';

  @Prop() keyEnunciado = 'Enunciado';

  @Prop() keyImagem = 'Imagem';

  @Prop() keyPorcentagem = 'Porcentagem';

  @Prop() keyRiscada = 'Riscada';

  @Prop({ mutable: true, reflect: true }) respostaCorreta!: string;

  @Prop({ mutable: true, reflect: true }) mostraResposta!: boolean;

  @Prop({ mutable: true, reflect: true }) alternativaSelecionada!: string;

  @Prop({ mutable: true }) permiteRiscar = true;

  @Prop({ mutable: true }) permiteDesmarcar = false;

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
      permiteDesmarcar
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
          ></med-alternativas-b>
        )}
      </Host>
    );
  }
}
