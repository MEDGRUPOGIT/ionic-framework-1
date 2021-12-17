import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Menu',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */

      /* !NÃO UTILIZAR! Apenas para estória */

      .cp-menu {
        --background: hsl(var(--med-color-neutral-10));
        --padding-start: 16px;
        --padding-end: 16px;
        --padding-top: 16px;
        --padding-bottom: 16px;
      }

      .cp-menu__heading {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
      }

      .cp-menu__heading:before {
        content: '';
        background: hsl(var(--med-color-neutral-9));
        height: 1px;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .cp-menu__title {
        background: hsl(var(--med-color-neutral-10));
        position: relative;
        padding: 0 16px;
        text-align: center;
      }

      .cp-menu__list {
        display: flex;
        padding: 22px 0 0 0;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: 1200px;
      }

      .cp-menu__item {
        display: flex;
        min-width: 132px;
        width: 33.33%;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        cursor: pointer;
        margin-bottom: 30px;
      }

      .cp-menu__icon {
        stroke: hsl(var(--med-color-brand-2));
      }

      .cp-menu__label {
        padding-top: 10px;
        text-align: center;
      }
    </style>

    <ion-app>
      <ion-content>

        <!-- component -->
          <ion-content class="cp-menu">
            <div>
              <div class="cp-menu__heading">
                <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Mentoria</med-type>
              </div>

              <ul class="cp-menu__list">
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-orientacao"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Orientações</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-metricas"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Orientações</med-type>
                </li>
              </ul>

              <div class="cp-menu__heading">
                <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Geral</med-type>
              </div>

              <ul class="cp-menu__list">
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-main"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Main</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-usuario"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Perfil</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-duplicar"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Slide de Aula</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-qrcode"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Medcode</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-gabarito"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Dúvidas Acadêmicas</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-cronograma"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Cronograma</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-drogas"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Drogas</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-bonus"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Bônus</med-type>
                </li>
              </ul>

              <div class="cp-menu__heading">
                <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Área de Treinamento</med-type>
              </div>

              <ul class="cp-menu__list">
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-anotacao"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Simulados</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-multimidia"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Multimídia</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-concursos"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Concursos na Íntegra</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-montaprovas"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Monta Provas</med-type>
                </li>
              </ul>

              <div class="cp-menu__heading">
                <med-type class="cp-menu__title" token="h20" ds-color="neutral-3">Administrativo</med-type>
              </div>

              <ul class="cp-menu__list">
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-financeiro"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Financeiro</med-type>
                </li>
                <li class="cp-menu__item">
                  <ion-icon class="med-icon cp-menu__icon" name="med-notasfiscais"></ion-icon>
                  <med-type class="cp-menu__label" token="p14" ds-color="neutral-3">Notas Fiscais</med-type>
                </li>
              </ul>
            </div>
          </ion-content>
        <!-- component -->

      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=8958%3A55343',
  },
};
Default.argTypes = {};
