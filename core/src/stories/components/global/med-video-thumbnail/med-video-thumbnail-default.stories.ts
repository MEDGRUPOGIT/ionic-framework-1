import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Video Thumbnail',
  decorators: [withDesign],
};

const Template = ({value = 0, url, dsColor}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-video-thumbnail .dsColor=${dsColor} value=${value / 100} url=${url}></med-video-thumbnail>
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
  url: {
    defaultValue: 'https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad',
    control: { type: 'text'},
    description: 'Define a url da imagem a ser mostrada.'
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
};
