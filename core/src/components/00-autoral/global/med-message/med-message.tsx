import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';

@Component({
  tag: 'med-message',
  styleUrl: 'med-message.scss',
  shadow: true,
})
export class MedMessage {

 /**
   * Define a variação do componente.
   */
  @Prop() dsName?: 'medgrupo' | 'response' | 'comment' | 'user-message';

  /**
    * Define o nome do aluno.
    */
  @Prop() nome?: string;

  /**
    * Define o nome do concurso.
    */
  @Prop() concurso?: string;

  /**
    * Define o conteúdo de texto.
    */
  @Prop() texto?: string;

  /**
    * Define o id da mensagem.
    */
  @Prop() messageId?: string;

    render() {
      const { dsName, nome, concurso, texto, messageId } = this;

      return (
        <Host from-stencil
          class={createColorClasses(null, {
            'med-message': true,
            [`med-message--${dsName}`]: dsName !== undefined,
          }, null)}>
          <div class="med-message__balao"></div>
          <div class="med-message__content">
            <div class="med-message__header">
              <div class="med-message__avatar">
                A
                {/* {(dsName === 'medgrupo') && <ion-icon name="med-logo" class="med-icon med-rating__icon-medgrupo"></ion-icon>} */}
              </div>
              <div class="med-message__id">
                <p class="med-message__nome">{nome} - {concurso}</p>
                <p class="med-message__number">{messageId}</p>
              </div>
              <div class="med-message__controls">
                <med-tooltip content="Possui resposta da Equipe Acadêmica" placement="top" position="end">
                  <ion-icon slot="icon" class="med-icon med-message__icon" name="med-equipe-homologada"></ion-icon>
                 </med-tooltip>
                <slot name="menu"></slot>
              </div>
            </div>

            <slot></slot>

            <p class="med-message__texto">{texto}</p>
          </div>

          <div class="med-message__footer">
            <slot name="footer"></slot>
          </div>

        </Host>
      );
    }

}
