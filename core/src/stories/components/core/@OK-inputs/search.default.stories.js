import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core/@OK Inputs',
  decorators: [withDesign],
};

const Template = ({ dsName, placeholder, disabled }) => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        div {
          padding: 15px;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <div>
          <ion-searchbar
            mode="ios"
            .dsName=${dsName}
            placeholder=${placeholder}
            ?disabled=${disabled}>
          </ion-searchbar>
        </div>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Search = Template.bind({});
Search.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9341%3A58123',
  },
}
Search.argTypes = {
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
  placeholder: {
    control: { type: 'text' },
    description: 'Define o placeholder.',
    defaultValue: 'Placeholder Text',
    table: {
      type:  { summary: 'string' },
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
};
