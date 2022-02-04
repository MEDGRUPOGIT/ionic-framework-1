import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/Aula Professor',
  decorators: [withDesign],
};

const Template = ({dsColor, icon, titulo, professores, videos, value, active}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-aula-professor .dsColor=${dsColor} .icon=${icon} .titulo=${titulo} .professores=${professores} .videos=${videos} value=${value / 100} ?active=${active}></med-aula-professor>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const AulaProfessor = Template.bind({});
AulaProfessor.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
AulaProfessor.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    control: { type: 'text' },
    description: "TO DO.",
    defaultValue: 'med-video',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'med-video' },
    },
  },
  titulo: {
    control: { type: 'text' },
    description: "TO DO.",
    defaultValue: 'Aula de Revisão',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'Aula de Revisão' },
    },
  },
  professores: {
    control: { type: 'text' },
    description: "TO DO.",
    defaultValue: '2',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  videos: {
    control: { type: 'text' },
    description: "TO DO.",
    defaultValue: '5',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  active: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.',
    table: {
      type:  { summary: 'Number' },
      defaultValue: { summary: '0' },
    },
  },
};
