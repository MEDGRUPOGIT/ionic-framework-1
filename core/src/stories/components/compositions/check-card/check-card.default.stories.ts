import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: 'Components/Compositions/Check Card',
  decorators: [withDesign],
};

const Template = ({ dsColor, alert, titulo, categoria, horaInicial, horaFinal, iconName, modalPlacement, tooltipCollapsed, tooltipHeading, tooltipContent }) => {
  return html`
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
            icon-name=${iconName}
            modal-placement=${modalPlacement}
            tooltip-collapsed=${tooltipCollapsed}
            tooltip-heading=${tooltipHeading}
            tooltip-content=${tooltipContent}
          >
            <ion-checkbox slot="input"></ion-checkbox>
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
