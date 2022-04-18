import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core (Revisado: abril 2022)/Badge',
  decorators: [withDesign],
};

const Template = ({ dsColor, dsSize, fill, label }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

         <!-- component markdown -->
          <ion-badge .dsColor=${dsColor} ds-size=${dsSize} fill=${fill}>${label}</ion-badge>
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
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12498%3A44031',
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
  dsSize: {
    options: [undefined, 'sm', 'md'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm | md' },
      defaultValue: { summary: 'undefined' },
    },
  },
  fill: {
    options: [undefined, 'outline'],
    control: { type: 'radio'},
    description: "Define a variação de peenchimento componente.",
    table: {
      type:  { summary: 'outline' },
      defaultValue: { summary: 'undefined' },
    },
  },
  label: {
    control: { type: 'text' },
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    defaultValue: 'Label',
    table: {
      type:  { summary: 'string' },
    },
  },
};
