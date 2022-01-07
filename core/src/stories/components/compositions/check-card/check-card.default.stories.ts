import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: 'Components/Compositions/Check Card',
  decorators: [withDesign],
};

const Template = ({ dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal,iconName, modalPlacement, tooltipCollapsed, tooltipHeading, tooltipContent }) => {
  return html`
    <style>
      .med-check-card__tooltip {
        --background: hsl(var(--med-color-fb-warning));
        --z-index: 4;
        display: none;
      }

      .med-check-card--alert .med-check-card__tooltip {
        display: block;
      }

      .med-check-card__tooltip-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
      }

      .med-check-card&__tooltip-icon {
        stroke: hsl(var(--med-color-neutral-1));
        cursor: pointer;
      }

      .med-check-card__alert-icon {
        stroke: hsl(var(--med-color-fb-warning));
        cursor: pointer;
      }
    </style>
    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs">

          <!-- component -->
          <med-check-card
            .dsColor=${dsColor}
            .alert=${alert}
            titulo=${titulo}
            categoria=${categoria}
            hora-inicial=${horaInicial}
            hora-final=${horaFinal}
            data-inicial=${dataInicial}
            data-final=${dataFinal}
            icon-name=${iconName}
            modal-placement=${modalPlacement}
            tooltip-collapsed=${tooltipCollapsed}
            tooltip-heading=${tooltipHeading}
            tooltip-content=${tooltipContent}
          >
            <ion-checkbox slot="input"></ion-checkbox>

            <med-tooltip slot="tooltip" class="med-check-card__tooltip" ds-color="fb-warning" placement="top" position="end">
              <ion-icon class="med-check-card__alert-icon med-icon med-icon--sm" name="med-marcar" slot="input"></ion-icon>
              <div slot="content">
                <div class="med-check-card__tooltip-header">
                  <med-type ds-color="neutral-01" token="p14b">{tooltipHeading}</med-type>
                  <ion-icon class="med-check-card__tooltip-icon med-icon med-icon--sm" name="med-fechar"></ion-icon>
                </div>
                <med-type ds-color="neutral-01" token="p14x" slot="content">{tooltipContent}</med-type>
              </div>
            </med-tooltip>
          </med-check-card>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  alert: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  titulo: {
    control: { type: 'text' },
    defaultValue: 'Título',
  },
  categoria: {
    control: { type: 'text' },
    defaultValue: 'Categoria',
  },
  horaInicial: {
    control: { type: 'text' },
    defaultValue: '21h00',
  },
  horaFinal: {
    control: { type: 'text' },
    defaultValue: '23h00',
  },
  dataInicial: {
    control: { type: 'text' },
    defaultValue: '25/12',
  },
  dataFinal: {
    control: { type: 'text' },
    defaultValue: '25/12',
  },
  tooltipHeading: {
    control: { type: 'text' },
    defaultValue: 'Tarefa pendente',
  },
  tooltipContent: {
    control: { type: 'text' },
    defaultValue: 'Para reagendar este card, clique no menu ao lado e selecione Editar.',
  },
  iconName: {
    control: { type: 'text' },
    defaultValue: 'med-marcar',
  },
  modalPlacement: {
    options: [undefined, 'top', 'bottom', 'left', 'right'],
    control: { type: 'radio'},
    description: "Define posicionamento em relação ao ícone.",
    table: {
      type:  { summary: 'top | bottom | left | right' },
      defaultValue: { summary: 'top' },
    },
  },
  tooltipCollapsed: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: true,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
};
