import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/@OK Vote',
  decorators: [withDesign],
};

const Template = ({ titulo, like, unlike }) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-vote .titulo=${titulo} .like=${like} .unlike=${unlike}></med-vote>
        <!-- component markdown -->

      <ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6948%3A53203',
  },
}
Default.argTypes = {
  titulo: {
    control: { type: 'text' },
    description: "Define o titulo do componente.",
    defaultValue: 'Cabe recurso?',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'Cabe recurso?' },
    },
  },
  like: {
    control: { type: 'text' },
    description: "Define a quantidade de recursos que cabem.",
    defaultValue: '2',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  unlike: {
    control: { type: 'text' },
    description: "Define a quantidade de recursos que não cabem.",
    defaultValue: '4',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
