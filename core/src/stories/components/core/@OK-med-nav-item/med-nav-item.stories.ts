import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core/@OK Nav Container',
  decorators: [withDesign],
};

const Template = ({ dsColor, text, icon, disabled, active }) => {
  return html`
    <ion-app>
      <div class="flex-center">
        <med-nav-item .dsColor=${dsColor} text=${text} icon=${icon} ?disabled=${disabled} ?active=${active}></med-nav-item>
      </div>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=13338%3A46703',
  },
  actions: {
    handles: ['medFocus', 'medBlur', 'medClick'],
  },
}
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  text: {
    control: { type: 'text' },
    description: 'Define o texto do componente.',
    defaultValue: 'Mentoria',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-play',
    description: 'Define o icone do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  active: {
    active: false,
    control: { type: 'boolean' },
    description: 'Define o estado active do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  routerDirection: {
    control: { type: 'boolean' },
  },
  routerAnimation: {
    control: { type: 'boolean' },
  },
}
