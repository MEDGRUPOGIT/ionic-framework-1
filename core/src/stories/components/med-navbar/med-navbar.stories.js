import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { medColors, medNeutrals } from '../../med-colors';

export default {
  title: 'Components/Global/Navbar',
  decorators: [withDesign],
};

const TemplateDefault = ({ platform, color, neutral }) => {
  if (platform === 'Mobile') {
    document.querySelector('html').classList.remove('plt-desktop');
    document.querySelector('html').classList.remove('plt-electron');
  } else if (platform === 'Desktop') {
    document.querySelector('html').classList.add('plt-desktop');
    document.querySelector('html').classList.add('plt-electron');
  }

  return html `
    <ion-app>

      <!-- component -->
      <med-navbar .color=${color} .neutral=${neutral}>
        <ion-button ds-name="icon-label" slot="left">
          <ion-icon name="med-chevron-left"></ion-icon>
          voltar
        </ion-button>

        <span slot="title">header</span>
        <span slot="subtitle">subheader</span>

        <ion-button ds-name="icon-only" slot="right">
          <ion-icon slot="icon-only" name="med-star-filled"></ion-icon>
        </ion-button>
      </med-navbar>
      <!-- component -->

    </ion-app>
  `
}

export const Navbar = TemplateDefault.bind({});
Navbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=404%3A0',
  },
  actions: {
    handles: ['medResize'],
  },
}
Navbar.argTypes = {
  platform: {
    defaultValue: 'Desktop',
    options: ['Desktop', 'Mobile'],
    control: { type: 'radio' },
    description: 'Muda a visualização do componente entre plataformas. **Usado apenas no storybook para visualização.**'
  },
  color: {
    options: medColors,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'Color' },
      defaultValue: { summary: 'undefined' },
    },
  },
  neutral: {
    options: medNeutrals,
    control: { type: 'select'},
    description: "Define a cor neutral do componente.",
    table: {
      type:  { summary: 'Neutrals' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
