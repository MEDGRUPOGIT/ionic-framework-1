import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Base',
  decorators: [withDesign],
};

const Template = ({ dsColor, spacingV, spacingH, radius }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-base .dsColor=${dsColor} .spacingV=${spacingV} .spacingH=${spacingH} .radius=${radius}></med-base>
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
    url: '',
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
  spacingV: {
    options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho do padding.",
    table: {
      type:  { summary: 's02 | s04 | s08 | s12 | s16 | s24' },
      defaultValue: { summary: 'undefined' },
    },
  },
  spacingH: {
    options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho do padding.",
    table: {
      type:  { summary: 's02 | s04 | s08 | s12 | s16 | s24'  },
      defaultValue: { summary: 'undefined' },
    },
  },
  radius: {
    options: [undefined, 's02', 's04', 's08'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho da borde-radius.",
    table: {
      type:  { summary: 's02 | s04 | s08 ' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
