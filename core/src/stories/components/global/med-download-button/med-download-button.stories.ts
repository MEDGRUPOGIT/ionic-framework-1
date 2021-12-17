import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Global/Download Button',
  decorators: [withDesign],
};

const Template = ({value, dsColor, downloading, downloaded, initial}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-download-button .dsColor=${dsColor} value=${value} ?downloading=${downloading} ?downloaded=${downloaded} ?initial=${initial}></med-download-button>
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
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6861%3A53667',
  },
  actions: {
    handles: ['medDownloaded', 'medCancelar'],
  },
}
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
  initial: {
    initial: false,
    control: { type: 'boolean' },
    description: 'Define o estado initial do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  downloading: {
    downloading: false,
    control: { type: 'boolean' },
    description: '',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  downloaded: {
    downloaded: false,
    control: { type: 'boolean' },
    description: '',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
