import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Core/Download Button (Download)',
  decorators: [withDesign],
};

const Template = ({dsColor, dsSize, value, initial, downloading, downloaded, identification, index}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <med-download-button
            .dsColor=${dsColor}
            value=${value}
            ?initial=${initial}
            ?downloading=${downloading}
            ?downloaded=${downloaded}
            .index=${index}
            identification=${identification}
            .dsSize=${dsSize}
            >
          </med-download-button>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6861%3A53548',
  },
  actions: {
    handles: ['medDownloadRequested'],
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
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define o valor da progress bar do componente.'
  },
  downloading: {
    downloading: false,
    control: { type: 'boolean' },
    description: 'Define o estado do componente durante o download.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  downloaded: {
    downloaded: false,
    control: { type: 'boolean' },
    description: 'Define o estado do componente quando download tiver concluído.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  index: {
    control: { type: 'text' },
    description: 'Define qual a posição do array se encontra esse chart. Opcional.',
    table: {
      type:  { summary: 'number' },
      defaultValue: { summary: 'undefined' },
    },
  },
  identification: {
    control: { type: 'number' },
    description: 'Identificador do pie-chart para emissão de eventos.',
    table: {
      type:  { summary: 'number | string | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'lg'],
    control: { type: 'radio'},
    defaultValue: undefined,
    description: "Define a variação de tamanho.",
    table: {
      type:  { summary: 'lg' },
      defaultValue: { summary: undefined },
    },
  },
};
