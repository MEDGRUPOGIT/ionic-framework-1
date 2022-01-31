import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../../global/templarios/color.enum";

export default {
  title: 'Pages/Medsoft Pro/Desktop/Aulas',
  decorators: [withDesign],
};

const Template = ({ dsColor }) => {
  return html`
    <ion-app>
      <med-nav-simple></med-nav-simple>

      <med-nav .dsColor=${dsColor}>
        <med-nav-item icon="med-play" text="Aulas" active></med-nav-item>
        <med-nav-item icon="med-apostila" text="Materiais"></med-nav-item>
        <med-nav-item icon="med-concursos" text="Questões"></med-nav-item>

        <med-nav-accordion></med-nav-accordion>

      </med-nav>

      <ion-content>
        <div class="col-left">
        </div>

        <div class="col-right">
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
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
};
