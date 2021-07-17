import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Monta Provas/Components/Chart',
  decorators: [withDesign],
};

const TemplateDefault = ({valores}) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valores.valores;
    document.querySelector('med-chart-label').valores = valores.valores;
  }, 1000);

  return html`
    <style>
      .med-accordion-header {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .med-accordion-header__heading {
        font-size: var(--med-font-size-xs);
        font-weight: var(--med-font-weight-semibold);
        line-height: var(--med-line-height-default);
        color: var(--med-color-neutral-10);
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: center;
      }

      .monta-provas-accordion__button {
        --font-size: 24px;
        --padding: 0;
        --width: 24px;
        --height: 24px;
      }

      .monta-provas-chart {
        background: var(--med-color-neutral-2);
        padding: 0 var(--med-spacing-stretch-md);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
      }

      .monta-provas-chart__total {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        line-height: var(--med-line-height-compressed);
        text-align: center;
      }

      .monta-provas-chart__label {
        font-size: var(--med-font-size-nano);
        color: var(--med-color-neutral-dark-10);
        font-weight: var(--med-font-weight-bold);
      }

      .monta-provas-chart__number {
        font-weight: var(--med-font-weight-bold);
        font-size: var(--med-font-size-md);
        color: var(--med-color-neutral-10);
      }
    </style>

    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
        <med-accordion class="monta-provas-accordion" icon="left">
          <div class="med-accordion-header" slot="header">
            <h4 class="med-accordion-header__heading">Nome da Prova</h4>

            <ion-button class="monta-provas-accordion__button" ds-name="icon-only">
              <ion-icon name="med-context-menu"></ion-icon>
            </ion-button>
          </div>

          <div class="monta-provas-chart" slot="content">
            <med-chart-radial class="monta-provas-chart__radial">
              <div class="monta-provas-chart__total">
                <span class="monta-provas-chart__label">Total de</span>
                <span class="monta-provas-chart__number">100</span>
                <span class="monta-provas-chart__label">Questões</span>
              </div>
            </med-chart-radial>

            <med-chart-label class="monta-provas-chart__label"></med-chart-label>
          </div>
        </med-accordion>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const Chart = TemplateDefault.bind({});
Chart.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
}
Chart.argTypes = {
  valores: {
    defaultValue: {
      valores: [
        {
          cor: 'ion-color-success',
          label: 'Acertos',
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: 'ion-color-caution',
          label: 'Erros',
          quantia: 16,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'Restantes',
          quantia: 52,
          ignoreBarra: true,
        }
      ],
    },
    control: { type: 'array' },
    description: 'Define a lista...',
    table: {
      type:  { summary: 'MedRadialItem[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
