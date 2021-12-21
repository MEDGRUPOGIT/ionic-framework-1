import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Input',
  decorators: [withDesign],
};

const Template = ({ dsColor }) => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        .middle {
          padding: 0 16px;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-type token="p14">Digite o título:</med-type>
          <ion-input></ion-input>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=7380%3A50289',
  },
}
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: 'Define a cor do componente.',
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
