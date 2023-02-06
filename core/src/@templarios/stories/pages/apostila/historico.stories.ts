import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Apostila',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <med-header>
        <med-navbar slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label slot="title" token="p16b">HISTÓRICO</ion-label>
          <ion-label slot="subtitle" ds-color="brand" token="p12xb">NEF 1</ion-label>

          <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xs">
            <ion-icon slot="icon-only" class="med-icon" name="med-busca"></ion-icon>
          </ion-button>
        </med-navbar>
      </med-header>

      <ion-content class="historico">
        <div class="busca-apostila busca-apostila--historico busca-apostila--dark">
          <div class="busca-apostila__search">
            <div class="busca-apostila__icon">
              <ion-icon class="med-icon" name="med-busca"></ion-icon>
            </div>

            <ion-input class="busca-apostila__input" ds-color="neutral-25" mode="md" placeholder="Digite o que deseja buscar..."></ion-input>

            <ion-button class="busca-apostila__close" mode="ios" ds-color="neutral-5" icon-only fill="clear" ds-size="xxs">
              <ion-icon class="med-icon" slot="icon-only" name="med-fechar"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="filtro-limpo">
          <div class="filtro-limpo__container">
            <ion-icon class="med-icon" name="med-limparfiltro"></ion-icon>
            <ion-label token="p16xb">Ainda não há marcações para esse filtro.</ion-label>
          </div>
        </div>

        <div class="resultados">
          <ion-item
            class="resultados__item"
            ds-color="neutral-2"
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            detail="false">
            <ion-icon class="med-icon" slot="start" name="med-textoselecionar"></ion-icon>
            <div class="resultados__container-text">
              <div class="resultados__informacao">
                <ion-label class="resultados__data">24/01/2023 - 16:23</ion-label>
                <div class="resultados__cor resultados__cor--warning">&nbsp;</div>
              </div>
              <ion-label class="resultados__text" ds-color="neutral-8">Texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado</ion-label>
            </div>
            <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
              <ion-icon class="med-icon" slot="icon-only" name="med-lixeira"></ion-icon>
            </ion-button>
          </ion-item>

          <ion-item
            class="resultados__item"
            ds-color="neutral-2"
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            detail="false">
            <ion-icon class="med-icon" slot="start" name="med-textosublinhar"></ion-icon>
            <div class="resultados__container-text">
              <div class="resultados__informacao">
                <ion-label class="resultados__data">24/01/2023 - 16:23</ion-label>
                <div class="resultados__cor resultados__cor--warning" style="display: none;">&nbsp;</div>
              </div>
              <ion-label class="resultados__text" ds-color="neutral-8">Texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado</ion-label>
            </div>
            <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
              <ion-icon class="med-icon" slot="icon-only" name="med-lixeira"></ion-icon>
            </ion-button>
          </ion-item>

          <ion-item
            class="resultados__item"
            ds-color="neutral-2"
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            detail="false">
            <ion-icon class="med-icon" slot="start" name="med-nopapo"></ion-icon>
            <div class="resultados__container-text">
              <div class="resultados__informacao">
                <ion-label class="resultados__data">24/01/2023 - 16:23</ion-label>
                <div class="resultados__cor resultados__cor--warning" style="display: none;">&nbsp;</div>
              </div>
              <ion-label class="resultados__text" ds-color="neutral-8">Texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado</ion-label>
            </div>
            <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
              <ion-icon class="med-icon" slot="icon-only" name="med-lixeira"></ion-icon>
            </ion-button>
          </ion-item>

          <ion-item
            class="resultados__item"
            ds-color="neutral-2"
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            detail="false">
            <ion-icon class="med-icon" slot="start" name="med-marcar"></ion-icon>
            <div class="resultados__container-text">
              <div class="resultados__informacao">
                <ion-label class="resultados__data">24/01/2023 - 16:23</ion-label>
                <div class="resultados__cor resultados__cor--warning" style="display: none;">&nbsp;</div>
              </div>
              <ion-label class="resultados__text" ds-color="neutral-8">Texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado</ion-label>
            </div>
            <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
              <ion-icon class="med-icon" slot="icon-only" name="med-lixeira"></ion-icon>
            </ion-button>
          </ion-item>

          <ion-item
            class="resultados__item"
            ds-color="neutral-2"
            radius="s08"
            gap="s16"
            mode="ios"
            lines="none"
            detail="false">
            <ion-icon class="med-icon" slot="start" name="med-duvidas"></ion-icon>
            <div class="resultados__container-text">
              <div class="resultados__informacao">
                <ion-label class="resultados__data">24/01/2023 - 16:23</ion-label>
                <div class="resultados__cor resultados__cor--warning" style="display: none;">&nbsp;</div>
              </div>
              <ion-label class="resultados__text" ds-color="neutral-8">Texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado texto selecionado</ion-label>
            </div>
            <ion-button slot="end" ds-size="xxs" mode="ios" fill="clear" icon-only>
              <ion-icon class="med-icon" slot="icon-only" name="med-lixeira"></ion-icon>
            </ion-button>
          </ion-item>
        </div>
      </ion-content>

      <div class="marcador marcador--open">
        <div class="marcador__item marcador__item--warning">&nbsp;</div>
        <div class="marcador__item marcador__item--attention">&nbsp;</div>
        <div class="marcador__item marcador__item--success">&nbsp;</div>
        <div class="marcador__item marcador__item--brand">&nbsp;</div>
        <div class="seletor-marcadores">
          <div class="seletor-marcadores__container">
            <div class="seletor-marcadores__item seletor-marcadores__item--warning">&nbsp;</div>
            <div class="seletor-marcadores__item seletor-marcadores__item--attention">&nbsp;</div>
          </div>
          <div class="seletor-marcadores__container">
            <div class="seletor-marcadores__item seletor-marcadores__item--success">&nbsp;</div>
            <div class="seletor-marcadores__item seletor-marcadores__item--brand">&nbsp;</div>
          </div>
        </div>
      </div>

      <ion-footer>
        <ion-segment class="historico-footer" value="tab-1" scrollable>
          <ion-segment-button class="historico-footer__item" value="tab-1">
            <ion-label token="p14b">TODOS</ion-label>
          </ion-segment-button>

          <ion-segment-button class="historico-footer__item" mode="md" value="tab-2">
            <ion-icon class="med-icon" name="med-textoselecionar"></ion-icon>
          </ion-segment-button>

          <ion-segment-button class="historico-footer__item" mode="md" value="tab-3">
            <ion-icon class="med-icon" name="med-textosublinhar"></ion-icon>
          </ion-segment-button>

          <ion-segment-button class="historico-footer__item" mode="md" value="tab-4">
            <ion-icon class="med-icon" name="med-nopapo"></ion-icon>
          </ion-segment-button>

          <ion-segment-button class="historico-footer__item" value="tab-5">
            <ion-icon class="med-icon historico-footer__marcador-rotate" name="med-marcar"></ion-icon>
          </ion-segment-button>

          <ion-segment-button class="historico-footer__item" mode="md" value="tab-6">
            <ion-icon class="med-icon" name="med-duvidas"></ion-icon>
          </ion-segment-button>

          <ion-segment-button class="historico-footer__item" mode="md" value="tab-7">
            <div class="seletor-marcadores">
              <div class="seletor-marcadores__container">
                <div class="seletor-marcadores__item seletor-marcadores__item--warning">&nbsp;</div>
                <div class="seletor-marcadores__item seletor-marcadores__item--attention">&nbsp;</div>
              </div>
              <div class="seletor-marcadores__container">
                <div class="seletor-marcadores__item seletor-marcadores__item--success">&nbsp;</div>
                <div class="seletor-marcadores__item seletor-marcadores__item--brand">&nbsp;</div>
              </div>
            </div>
          </ion-segment-button>
        </ion-segment>
      </ion-footer>
    </ion-app>
  `;
};

export const Historico = Template.bind({});
Historico.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
