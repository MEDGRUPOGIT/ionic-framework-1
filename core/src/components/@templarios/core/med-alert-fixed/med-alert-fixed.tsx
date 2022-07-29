import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-alert-fixed',
  styleUrl: 'med-alert-fixed.scss',
  shadow: true,
})
export class MedAlertFixed {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsName?: 'offline' | 'atualizar';

  /**
   * todo
   */
  @Prop({ reflect: true }) labelOffline = 'Você está offline. Conecte-se para acessar o conteúdo.';

  /**
   * todo
   */
  @Prop({ reflect: true }) labelAtualizar = 'Versão desatualizada';

  render() {
    const { dsColor, dsName, labelOffline, labelAtualizar } = this;

    return (
      <Host
        class={generateMedColor(dsColor, {
        'med-alert-fixed': true,
        [`med-alert-fixed--${dsName}`]: dsName !== undefined,
      })}>
        {(dsName === 'offline') &&
          <div class="med-alert-fixed__container">
            <ion-icon class="med-icon" name="med-offline"></ion-icon>
            <med-type class="med-alert-fixed__text">{labelOffline}</med-type>
          </div>
        }
        {(dsName === 'atualizar') &&
          <div class="med-alert-fixed__container">
            <ion-icon class="med-icon" name="med-alerta"></ion-icon>
            <med-type class="med-alert-fixed__text">{labelAtualizar}</med-type>
          </div>
        }
        <slot></slot>
      </Host>
    );
  }

}
